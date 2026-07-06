import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SEO from "./components/SEO"

function SectionLabel({ children }) {
  return (
    <p className="text-[#c98b2c] uppercase tracking-[0.28em] text-xs font-bold mb-5">
      {children}
    </p>
  )
}

function GoldDivider() {
  return <div className="w-16 h-px bg-[#c98b2c] my-8"></div>
}

const fieldClass =
  "w-full border border-[#d8c8b2] bg-white px-4 py-3 text-[#071f3a] placeholder:text-[#9ca3af] focus:border-[#c98b2c] focus:outline-none"

export default function PartnerInquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    organization: "",
    contact: "",
    email: "",
    phone: "",
    organizationType: "",
    partnershipInterest: [],
    message: "",
    website: "",
  })

  const partnershipOptions = [
    "Sponsor Participant Scholarships",
    "Healthcare Referral Partnership",
    "Corporate Sponsorship",
    "Volunteer Opportunities",
    "In-Kind Goods or Services",
    "I'd Like to Explore Opportunities",
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")
    setErrorMessage("")

    try {
      if (
        !formData.organization.trim() ||
        !formData.contact.trim() ||
        !formData.email.trim() ||
        !formData.organizationType ||
        formData.partnershipInterest.length === 0
      ) {
        setErrorMessage("Please complete the required fields before submitting.")
        setIsSubmitting(false)
        return
      }

      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || data.success === false) {
        throw new Error(data.error || "Partner inquiry could not be submitted.")
      }

      setSuccessMessage(
        "Thank you! Your partnership inquiry has been received. A member of our leadership team will contact you within two business days."
      )

      setFormData({
        organization: "",
        contact: "",
        email: "",
        phone: "",
        organizationType: "",
        partnershipInterest: [],
        message: "",
        website: "",
      })
    } catch (error) {
      console.error(error)
      setErrorMessage(
        "Something went wrong while submitting the inquiry. Please try again or email info@therenewedstrengthproject.org."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <SEO
        title="Partnership Inquiry"
        description="Start a community partnership inquiry with TRSP to support individualized exercise and restoration-focused coaching for individuals affected by cancer in Northern Colorado."
        path="/partner-inquiry"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Partnership Inquiry", path: "/partner-inquiry" },
        ]}
      />
      <Navbar />

      <section id="main-content" tabIndex="-1" className="pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Community Partnership Inquiry</SectionLabel>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              Let’s build something meaningful together.
            </h1>
            <GoldDivider />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-[#334155] leading-relaxed">
            <p>
              Thank you for your interest in partnering with The Renewed
              Strength Project. This form helps us understand your organization
              and the kind of impact you are hoping to create.
            </p>
            <p>
              Partnership starts with a conversation. After you submit this
              inquiry, we will follow up within two business days.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <SectionLabel>Why Partner With Us</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Your partnership helps remove financial barriers locally.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#d8a066]/50 border border-[#d8a066]/50 mt-14">
            {[
              {
                title: "Local Impact",
                copy:
                  "Support individuals affected by cancer throughout Northern Colorado.",
              },
              {
                title: "Evidence-Informed",
                copy:
                  "Help expand access to individualized, restoration-focused training.",
              },
              {
                title: "Meaningful Partnership",
                copy:
                  "Build long-term relationships that create practical community impact.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8">
                <h3 className="font-serif text-3xl mb-4">{item.title}</h3>
                <p className="text-[#4b5563] leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Partnership Inquiry</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Start the conversation.
            </h2>
            <p className="text-lg text-[#4b5563] leading-relaxed max-w-3xl mx-auto mt-6">
              We would love to learn more about your organization and explore
              how we can create meaningful impact together.
            </p>
          </div>

          <div className="bg-white border border-[#e6dac8] p-6 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {successMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className="border border-emerald-600 bg-emerald-50 p-6"
                >
                  <h3 className="text-emerald-800 text-xl font-semibold mb-2">
                    Thank you
                  </h3>
                  <p className="text-emerald-900 leading-relaxed">
                    {successMessage}
                  </p>
                </div>
              )}

              {errorMessage && (
                <div role="alert" className="border border-red-300 bg-red-50 p-6">
                  <h3 className="text-red-800 text-xl font-semibold mb-2">
                    Submission Issue
                  </h3>
                  <p className="text-red-900 leading-relaxed">
                    {errorMessage}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-[#334155] mb-2"
                  >
                    Organization Name *
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Organization name"
                    value={formData.organization}
                    required
                    autoComplete="organization"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        organization: e.target.value,
                      })
                    }
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-semibold text-[#334155] mb-2"
                  >
                    Contact Name *
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.contact}
                    required
                    autoComplete="name"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: e.target.value,
                      })
                    }
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#334155] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@organization.org"
                    value={formData.email}
                    required
                    autoComplete="email"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#334155] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(970) 555-1234"
                    value={formData.phone}
                    autoComplete="tel"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="organizationType"
                  className="block text-sm font-semibold text-[#334155] mb-2"
                >
                  I Represent A...
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  required
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      organizationType: e.target.value,
                    })
                  }
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select Organization Type
                  </option>
                  <option>Business</option>
                  <option>Healthcare Organization</option>
                  <option>Nonprofit Organization</option>
                  <option>Foundation</option>
                  <option>Educational Institution</option>
                  <option>Faith Community</option>
                  <option>Government Agency</option>
                  <option>Civic Organization</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <p className="block text-sm font-semibold text-[#334155] mb-4">
                  How would you like to partner?
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {partnershipOptions.map((option, index) => (
                    <label
                      key={option}
                      htmlFor={`partnershipInterest-${index}`}
                      className="flex items-center gap-3 border border-[#e6dac8] bg-[#fbfaf7] p-4 hover:border-[#c98b2c] cursor-pointer transition"
                    >
                      <input
                        id={`partnershipInterest-${index}`}
                        name="partnershipInterest"
                        type="checkbox"
                        checked={formData.partnershipInterest.includes(option)}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            partnershipInterest: e.target.checked
                              ? [...formData.partnershipInterest, option]
                              : formData.partnershipInterest.filter(
                                  (item) => item !== option
                                ),
                          })
                        }}
                        className="accent-[#c98b2c]"
                      />
                      <span className="text-[#334155]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#334155] mb-2"
                >
                  What inspired you to reach out?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us a little about your organization..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="partner-website">Website</label>
                <input
                  id="partner-website"
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      website: e.target.value,
                    })
                  }
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="pt-4 space-y-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#071f3a] hover:bg-[#0d2f57] disabled:bg-[#9ca3af] disabled:cursor-not-allowed text-white font-semibold text-lg py-4 rounded-sm transition"
                >
                  {isSubmitting ? "Submitting..." : "Start the Conversation"}
                </button>

                <p className="text-center text-sm text-[#6b7280] leading-relaxed max-w-xl mx-auto">
                  The information you share will only be used to respond to
                  your partnership inquiry and support TRSP operations.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
