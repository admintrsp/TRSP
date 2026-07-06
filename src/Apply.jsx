import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  preferredContact: "",
  cancerTreated: "",
  clearanceStatus: "",
  restorationGoal: "",
  availability: "",
  additionalNotes: "",
  consent: false,
  website: "",
};

const fieldClass =
  "w-full bg-white border border-[#d8cab7] px-4 py-3 text-[#071f3a] placeholder:text-[#8a8175] focus:border-[#c98b2c] focus:outline-none";

const labelClass = "block text-sm font-semibold text-[#071f3a] mb-2";

const options = {
  preferredContact: ["Email", "Phone", "Text"],
  cancerTreated: ["Yes", "No", "Prefer to discuss"],
  clearanceStatus: [
    "I have medical clearance",
    "I can request medical clearance",
    "I am not sure yet",
  ],
};

function SectionLabel({ children }) {
  return (
    <p className="text-[#c98b2c] uppercase tracking-[0.28em] text-xs font-bold mb-5">
      {children}
    </p>
  );
}

function TextField({ label, name, type = "text", value, onChange, required = false, placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label} {required && "*"}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, required = false, children }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label} {required && "*"}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={fieldClass}
      >
        <option value="" disabled>
          Select one
        </option>
        {children}
      </select>
    </div>
  );
}

export default function Apply() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      if (!formData.consent || formData.restorationGoal.trim().length < 10) {
        setErrorMessage("Please complete the required fields before submitting.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.error || "Application could not be submitted.");
      }

      setSuccessMessage(
        "Thank you. Your application has been received. We will review it and follow up with next steps."
      );
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Something went wrong while submitting the application. Please try again or email info@therenewedstrengthproject.org."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <SEO
        title="Apply for Cancer Exercise Support"
        description="Apply for TRSP participant support in Northern Colorado. Applications help us understand goals, current needs, medical context, safety considerations, and available pilot funding."
        path="/apply"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Apply", path: "/apply" },
        ]}
      />
      <Navbar />

      <section id="main-content" tabIndex="-1" className="pt-36 md:pt-40 pb-20 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Apply For Support</SectionLabel>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              Take the next supported step toward restoration.
            </h1>
          </div>

          <div>
            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed">
              This application helps us understand your current needs, your
              goals, and whether The Renewed Strength Project may be a safe
              and appropriate fit based on current capacity and funding.
            </p>

            <div className="grid md:grid-cols-3 gap-px bg-[#d8a066]/50 border border-[#d8a066]/50 mt-10">
              {[
                ["Local Pilot", "Currently focused on Loveland and Northern Colorado."],
                ["No Cost To Apply", "Support depends on program fit, safety, and available funding."],
                ["Simple Next Step", "We review personally and follow up if more context is needed."],
              ].map(([title, copy]) => (
                <div key={title} className="bg-[#f8f5ef] p-5">
                  <p className="font-serif text-2xl text-[#071f3a] mb-2">
                    {title}
                  </p>
                  <p className="text-[#4b5563] text-sm leading-relaxed">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ["01", "Submit Application", "Share basic contact information and what you are hoping to work toward."],
            ["02", "Review Fit", "We review applications personally and may follow up for more context."],
            ["03", "Plan Next Steps", "If the program is a fit, we discuss clearance, scheduling, and available funding."],
          ].map(([step, title, copy]) => (
            <div key={step} className="border border-[#e6dac8] bg-[#fbfaf7] p-8">
              <p className="font-serif text-5xl text-[#c98b2c] mb-6">
                {step}
              </p>
              <h2 className="font-serif text-3xl mb-4">
                {title}
              </h2>
              <p className="text-[#4b5563] leading-relaxed">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#e6dac8] p-8 md:p-10 shadow-xl shadow-[#071f3a]/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              {successMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-emerald-50 border border-emerald-300 p-6"
                >
                  <h2 className="text-emerald-800 text-xl font-semibold mb-2">
                    Application Received
                  </h2>
                  <p className="text-emerald-900 leading-relaxed">
                    {successMessage}
                  </p>
                </div>
              )}

              {errorMessage && (
                <div role="alert" className="bg-red-50 border border-red-300 p-6">
                  <h2 className="text-red-800 text-xl font-semibold mb-2">
                    Submission Issue
                  </h2>
                  <p className="text-red-900 leading-relaxed">
                    {errorMessage}
                  </p>
                </div>
              )}

              <div>
                <SectionLabel>Contact Information</SectionLabel>
                <div className="grid md:grid-cols-2 gap-6">
                  <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required autoComplete="given-name" />
                  <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required autoComplete="family-name" />
                  <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="name@example.com" autoComplete="email" />
                  <TextField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="(970) 555-1234" autoComplete="tel" />
                  <TextField label="City" name="city" value={formData.city} onChange={handleChange} required placeholder="Loveland" autoComplete="address-level2" />
                  <SelectField label="Preferred Contact" name="preferredContact" value={formData.preferredContact} onChange={handleChange} required>
                    {options.preferredContact.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </SelectField>
                </div>
              </div>

              <div>
                <SectionLabel>Program Fit</SectionLabel>
                <div className="grid md:grid-cols-2 gap-6">
                  <SelectField label="Have you been treated for cancer?" name="cancerTreated" value={formData.cancerTreated} onChange={handleChange} required>
                    {options.cancerTreated.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </SelectField>

                  <SelectField label="Medical Clearance" name="clearanceStatus" value={formData.clearanceStatus} onChange={handleChange} required>
                    {options.clearanceStatus.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </SelectField>
                </div>
              </div>

              <div>
                <label htmlFor="restorationGoal" className={labelClass}>
                  What are you hoping to restore or work toward? *
                </label>
                <textarea
                  id="restorationGoal"
                  name="restorationGoal"
                  rows="5"
                  value={formData.restorationGoal}
                  onChange={handleChange}
                  required
                  placeholder="Examples: returning to daily walks, rebuilding confidence in the gym, improving strength for work or family life..."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div>
                <label htmlFor="availability" className={labelClass}>
                  General availability
                </label>
                <textarea
                  id="availability"
                  name="availability"
                  rows="3"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="Mornings, afternoons, evenings, specific days, or anything we should know."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div>
                <label htmlFor="additionalNotes" className={labelClass}>
                  Anything else you would like us to know?
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows="4"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <label
                htmlFor="consent"
                className="flex items-start gap-3 bg-[#fbfaf7] border border-[#e6dac8] p-5"
              >
                <input
                  id="consent"
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 accent-[#c98b2c]"
                />
                <span className="text-sm text-[#4b5563] leading-relaxed">
                  I understand this application does not guarantee program
                  participation. I agree that The Renewed Strength Project may
                  contact me about my application and next steps.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#071f3a] hover:bg-[#0d2f57] disabled:bg-[#94a3b8] disabled:cursor-not-allowed text-white font-semibold text-lg py-4 transition"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>

              <p className="text-center text-sm text-[#4b5563] leading-relaxed max-w-xl mx-auto">
                Please do not include detailed medical records in this form.
                We will follow up directly if more information is needed.
              </p>

              <p className="text-center text-sm text-[#6b7280] leading-relaxed max-w-xl mx-auto">
                Information submitted here is used to review program fit and
                communicate about next steps. Application submission does not
                guarantee participation. You can review our{" "}
                <Link to="/privacy" className="text-[#c98b2c] hover:text-[#a66f22] underline underline-offset-4">
                  privacy and data use note
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
