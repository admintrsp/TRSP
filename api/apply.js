import { randomUUID } from 'node:crypto';
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
  'firstName',
  'lastName',
  'email',
  'phone',
  'city',
  'preferredContact',
  'cancerTreated',
  'clearanceStatus',
  'restorationGoal',
  'availability',
  'additionalNotes',
  'consent',
  'website',
];

const preferredContactOptions = ['Email', 'Phone', 'Text'];
const cancerTreatedOptions = ['Yes', 'No', 'Prefer to discuss'];
const clearanceOptions = [
  'I have medical clearance',
  'I can request medical clearance',
  'I am not sure yet',
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

  const payload = {
    firstName: sanitizeText(body.firstName, 80),
    lastName: sanitizeText(body.lastName, 80),
    email: sanitizeText(body.email, 120).toLowerCase(),
    phone: sanitizeText(body.phone, 40),
    city: sanitizeText(body.city, 80),
    preferredContact: sanitizeText(body.preferredContact, 40),
    cancerTreated: sanitizeText(body.cancerTreated, 40),
    clearanceStatus: sanitizeText(body.clearanceStatus, 80),
    restorationGoal: sanitizeLongText(body.restorationGoal, 1500),
    availability: sanitizeLongText(body.availability, 750),
    additionalNotes: sanitizeLongText(body.additionalNotes, 1000),
    consent: body.consent === true,
  };

  const hasRequiredFields =
    payload.firstName &&
    payload.lastName &&
    isEmail(payload.email) &&
    payload.phone &&
    payload.city &&
    preferredContactOptions.includes(payload.preferredContact) &&
    cancerTreatedOptions.includes(payload.cancerTreated) &&
    clearanceOptions.includes(payload.clearanceStatus) &&
    payload.restorationGoal &&
    payload.consent;

  if (!hasRequiredFields) {
    return publicError(res);
  }

  const intakeUrl = process.env.HEADQUARTERS_INTAKE_URL;
  const intakeSecret = process.env.TRSP_PUBLIC_INTAKE_SECRET;

  if (!intakeUrl || !intakeSecret) {
    return res.status(500).json({
      success: false,
      error: "Application could not be submitted right now.",
    });
  }

  const submissionKey = randomUUID();

  try {
    const response = await fetch(intakeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-TRSP-Intake-Secret": intakeSecret,
        "X-TRSP-Submission-Key": submissionKey,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.success === false) {
      return res.status(500).json({
        success: false,
        error: "Application could not be submitted right now.",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Application could not be submitted right now.",
    });
  }
}
