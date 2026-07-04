import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function PartnerInquiry() {
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

      <Footer />

    </div>
  );
}