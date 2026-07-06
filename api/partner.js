import {
  getClientKey,
  hasUnexpectedFields,
  isEmail,
  isRateLimited,
  publicError,
  sanitizeLongText,
  sanitizeText,
} from './_form-utils.js';

const allowedFields = [
  'organization',
  'contact',
  'email',
  'phone',
  'organizationType',
  'partnershipInterest',
  'message',
  'website',
];

const organizationTypes = [
  'Business',
  'Healthcare Organization',
  'Nonprofit Organization',
  'Foundation',
  'Educational Institution',
  'Faith Community',
  'Government Agency',
  'Civic Organization',
  'Other',
];

const partnershipOptions = [
  'Sponsor Participant Scholarships',
  'Healthcare Referral Partnership',
  'Corporate Sponsorship',
  'Volunteer Opportunities',
  'In-Kind Goods or Services',
  "I'd Like to Explore Opportunities",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  const body = req.body || {};

  if (hasUnexpectedFields(body, allowedFields) || body.website) {
    return publicError(res);
  }

  if (isRateLimited(getClientKey(req))) {
    return res.status(429).json({
      success: false,
      error: 'Too many submissions. Please wait a few minutes and try again.',
    });
  }

  const selectedInterests = Array.isArray(body.partnershipInterest)
    ? body.partnershipInterest.filter((item) => partnershipOptions.includes(item))
    : [];

  const payload = {
    submissionType: 'partnerInquiry',
    organization: sanitizeText(body.organization, 120),
    contact: sanitizeText(body.contact, 120),
    email: sanitizeText(body.email, 120).toLowerCase(),
    phone: sanitizeText(body.phone, 40),
    organizationType: sanitizeText(body.organizationType, 80),
    partnershipInterest: selectedInterests,
    message: sanitizeLongText(body.message, 1500),
  };

  const hasRequiredFields =
    payload.organization &&
    payload.contact &&
    isEmail(payload.email) &&
    organizationTypes.includes(payload.organizationType) &&
    payload.partnershipInterest.length > 0;

  if (!hasRequiredFields) {
    return publicError(res);
  }

  const scriptUrl =
    process.env.GOOGLE_PARTICIPANT_APPLICATION_SCRIPT_URL ||
    process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    return res.status(500).json({
      success: false,
      error: "Missing partner inquiry script URL",
    });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || data.success === false) {
      return res.status(500).json({
        success: false,
        error: "Partner inquiry could not be submitted right now.",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Partner inquiry could not be submitted right now.",
    });
  }
}
