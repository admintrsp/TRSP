import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function PartnerInquiry() {
const [formData, setFormData] = useState({
  organization: "",
  contact: "",
  email: "",
  phone: "",
  organizationType: "",
  partnershipInterest: [],
  message: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/partner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const text = await response.json();

    console.log(text);

    alert("Success! The API received your form.");

  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

const partnershipOptions = [
  "Sponsor Participant Scholarships",
  "Healthcare Referral Partnership",
  "Corporate Sponsorship",
  "Volunteer Opportunities",
  "In-Kind Goods or Services",
  "I'd Like to Explore Opportunities",
];

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      <Navbar />

      <section className="pt-40 pb-24 px-6">

        <div className="max-w-3xl mx-auto">

          <p className="text-[#d8a066] uppercase tracking-[0.25em] mb-6">
            Community Partnership Inquiry
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Let's Build Something
            <br />
            <span className="text-[#d8a066]">
              Meaningful Together.
            </span>
          </h1>

          <p className="text-xl text-slate-300 mt-8 leading-relaxed">
            Thank you for your interest in partnering with the Renewed Strength Project.
            Please complete the form below and we'll reach out within two business days.
          </p>

        </div>

      </section>
{/* WHY PARTNER */}

<section className="py-24 px-6 bg-slate-900">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-semibold">
        Why Partner With Us
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Your Partnership
        <span className="block text-[#d8a066]">
          Makes A Local Impact
        </span>
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">

        <h3 className="text-2xl font-bold mb-4 text-[#d8a066]">
          Local Impact
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Every partnership helps remove financial barriers for individuals
          impacted by cancer throughout Northern Colorado.
        </p>

      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">

        <h3 className="text-2xl font-bold mb-4 text-[#d8a066]">
          Evidence-Informed
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Our programs are grounded in current exercise oncology research
          and delivered by qualified professionals.
        </p>

      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">

        <h3 className="text-2xl font-bold mb-4 text-[#d8a066]">
          Meaningful Partnership
        </h3>

        <p className="text-slate-300 leading-relaxed">
          We believe in building long-term relationships that create lasting
          benefits for participants, partners, and our community.
        </p>

      </div>

    </div>

  </div>

</section>
{/* WHAT HAPPENS NEXT */}

<section className="py-24 px-6 bg-slate-950">

  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-semibold">
        What Happens Next
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        A Simple
        <span className="block text-[#d8a066]">
          Partnership Process
        </span>
      </h2>

      <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
        We believe partnerships should begin with a conversation—not a commitment.
        Here's what you can expect after submitting your inquiry.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center">

        <div className="text-5xl font-bold text-[#d8a066] mb-6">
          1
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Submit Your Inquiry
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Tell us a little about your organization and your interest in supporting our mission.
        </p>

      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center">

        <div className="text-5xl font-bold text-[#d8a066] mb-6">
          2
        </div>

        <h3 className="text-2xl font-bold mb-4">
          We'll Reach Out
        </h3>

        <p className="text-slate-300 leading-relaxed">
          A member of our leadership team will contact you within two business days to learn more.
        </p>

      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center">

        <div className="text-5xl font-bold text-[#d8a066] mb-6">
          3
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Build Something Meaningful
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Together we'll explore opportunities that align with your organization and create lasting community impact.
        </p>

      </div>

    </div>

  </div>

</section>
{/* PARTNERSHIP INQUIRY FORM */}

<section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">

  <div className="max-w-3xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
        Partnership Inquiry
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Start the
        <span className="block text-[#d8a066]">
          Conversation
        </span>
      </h2>

      <p className="text-slate-300 text-lg leading-relaxed">
        We'd love to learn more about your organization and explore how we
        can create meaningful impact together.
      </p>

    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">

<form
  onSubmit={handleSubmit}
  className="space-y-8"
>

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <label className="block text-sm font-semibold text-slate-300 mb-2">
        Organization Name *
      </label>

<input
  type="text"
  placeholder="Renewed Strength Project"
  value={formData.organization}
  onChange={(e) =>
    setFormData({
      ...formData,
      organization: e.target.value,
    })
  }
  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white focus:border-[#d8a066] focus:outline-none"
/>
    </div>

    <div>
      <label className="block text-sm font-semibold text-slate-300 mb-2">
        Contact Name *
      </label>

<input
  type="text"
  placeholder="Jane Smith"
  value={formData.contact}
  onChange={(e) =>
    setFormData({
      ...formData,
      contact: e.target.value,
    })
  }
  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white focus:border-[#d8a066] focus:outline-none"
/>    </div>

  </div>
<div className="grid md:grid-cols-2 gap-6">

  <div>
    <label className="block text-sm font-semibold text-slate-300 mb-2">
      Email Address *
    </label>

<input
  type="email"
  placeholder="name@organization.org"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white focus:border-[#d8a066] focus:outline-none"
/> 
 </div>

  <div>
    <label className="block text-sm font-semibold text-slate-300 mb-2">
      Phone Number
    </label>

<input
  type="tel"
  placeholder="(970) 555-1234"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white focus:border-[#d8a066] focus:outline-none"
/>
  </div>

</div>

<div>

  <label className="block text-sm font-semibold text-slate-300 mb-2">
    I Represent A...
  </label>

<select
  value={formData.organizationType}
  onChange={(e) =>
    setFormData({
      ...formData,
      organizationType: e.target.value,
    })
  }
  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white focus:border-[#d8a066] focus:outline-none"
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

  <label className="block text-sm font-semibold text-slate-300 mb-4">
    How would you like to partner?
  </label>

<div className="grid md:grid-cols-2 gap-4">
  {partnershipOptions.map((option) => (
    <label
      key={option}
      className="flex items-center gap-3 bg-slate-950 border border-slate-700 rounded-xl p-4 hover:border-[#d8a066] cursor-pointer transition"
    >
      <input
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
          });
        }}
        className="accent-[#d8a066]"
      />

      <span>{option}</span>
    </label>
  ))}
</div>
</div>
<div>

  <label className="block text-sm font-semibold text-slate-300 mb-2">
    What inspired you to reach out?
  </label>

<textarea
  rows="6"
  placeholder="Tell us a little about your organization..."
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }
  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white focus:border-[#d8a066] focus:outline-none resize-none"
/>

</div>

<div className="pt-6 space-y-5">

  <button
    type="submit"
    className="
      w-full
      bg-[#d8a066]
      hover:bg-[#e6b684]
      text-slate-950
      font-semibold
      text-lg
      py-4
      rounded-2xl
      transition-all
      duration-300
      shadow-lg
      hover:shadow-[#d8a066]/30
    "
  >
    Start the Conversation
  </button>

  <p className="text-center text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
    We respect your privacy. The information you share will only be used
    to respond to your partnership inquiry and will never be sold or
    shared with third parties.
    <br /><br />
    We believe every meaningful partnership begins with a conversation,
    and we're grateful you're considering joining our mission.
  </p>

</div>

</form>

 </div>

  </div>

</section>

      <Footer />

    </div>
  );
}