export default function HowItWorks() {
  const steps = [
    {
      title: 'Apply or Refer',
      text: 'Individuals apply or are referred to the program.',
    },
    {
      title: 'We Fund Training',
      text: 'Approved participants receive financial support.',
    },
    {
      title: 'Train & Rebuild',
      text: 'Participants work with qualified coaches to regain strength and function.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-14 text-slate-900">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-slate-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                {step.title}
              </h3>

              <p className="text-slate-700 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}