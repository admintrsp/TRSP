import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
};

const fieldClass =
  "w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white focus:border-[#d8a066] focus:outline-none";

const options = {
  preferredContact: ["Email", "Phone", "Text"],
  cancerTreated: ["Yes", "No", "Prefer to discuss"],
  clearanceStatus: [
    "I have medical clearance",
    "I can request medical clearance",
    "I am not sure yet",
  ],
};

function TextField({ label, name, type = "text", value, onChange, required = false, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-300 mb-2">
        {label} {required && "*"}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={fieldClass}
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, required = false, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-300 mb-2">
        {label} {required && "*"}
      </label>

      <select
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
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#d8a066] uppercase tracking-[0.25em] mb-6">
            Apply For Support
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Take the next supported step toward restoration.
          </h1>

          <p className="text-xl text-slate-300 mt-8 leading-relaxed max-w-3xl">
            This application helps us understand your current needs, your goals,
            and whether The Renewed Strength Project may be a safe and
            appropriate fit based on current capacity and funding.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Submit Application",
              copy: "Share basic contact information and what you are hoping to work toward.",
            },
            {
              step: "2",
              title: "Review Fit",
              copy: "We review applications personally and may follow up for more context.",
            },
            {
              step: "3",
              title: "Plan Next Steps",
              copy: "If the program is a fit, we discuss clearance, scheduling, and available funding.",
            },
          ].map((item) => (
            <div key={item.step} className="bg-slate-950 border border-slate-800 rounded-3xl p-8">
              <div className="text-4xl font-bold text-[#d8a066] mb-5">
                {item.step}
              </div>
              <h2 className="text-2xl font-bold mb-4">
                {item.title}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {successMessage && (
                <div className="bg-emerald-900/30 border border-emerald-500 rounded-2xl p-6">
                  <h2 className="text-emerald-400 text-xl font-semibold mb-2">
                    Application Received
                  </h2>
                  <p className="text-slate-200 leading-relaxed">
                    {successMessage}
                  </p>
                </div>
              )}

              {errorMessage && (
                <div className="bg-red-900/30 border border-red-500 rounded-2xl p-6">
                  <h2 className="text-red-300 text-xl font-semibold mb-2">
                    Submission Issue
                  </h2>
                  <p className="text-slate-200 leading-relaxed">
                    {errorMessage}
                  </p>
                </div>
              )}

              <div>
                <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
                  Contact Information
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                  />
                  <TextField
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(970) 555-1234"
                  />
                  <TextField
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Loveland"
                  />
                  <SelectField
                    label="Preferred Contact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    required
                  >
                    {options.preferredContact.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </SelectField>
                </div>
              </div>

              <div>
                <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
                  Program Fit
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <SelectField
                    label="Have you been treated for cancer?"
                    name="cancerTreated"
                    value={formData.cancerTreated}
                    onChange={handleChange}
                    required
                  >
                    {options.cancerTreated.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </SelectField>

                  <SelectField
                    label="Medical Clearance"
                    name="clearanceStatus"
                    value={formData.clearanceStatus}
                    onChange={handleChange}
                    required
                  >
                    {options.clearanceStatus.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </SelectField>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  What are you hoping to restore or work toward? *
                </label>

                <textarea
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
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  General availability
                </label>

                <textarea
                  name="availability"
                  rows="3"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="Mornings, afternoons, evenings, specific days, or anything we should know."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Anything else you would like us to know?
                </label>

                <textarea
                  name="additionalNotes"
                  rows="4"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <label className="flex items-start gap-3 bg-slate-950 border border-slate-700 rounded-2xl p-5">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 accent-[#d8a066]"
                />
                <span className="text-sm text-slate-300 leading-relaxed">
                  I understand this application does not guarantee program
                  participation. I agree that The Renewed Strength Project may
                  contact me about my application and next steps.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d8a066] hover:bg-[#e6b684] disabled:bg-slate-600 disabled:cursor-not-allowed text-slate-950 font-semibold text-lg py-4 rounded-2xl transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>

              <p className="text-center text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
                Please do not include detailed medical records in this form.
                We will follow up directly if more information is needed.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
