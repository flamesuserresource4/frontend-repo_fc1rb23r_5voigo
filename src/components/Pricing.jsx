const tiers = [
  {
    name: "Essentials",
    price: 1200,
    description: "Perfect for small weddings and intimate events",
    features: [
      "6 hours coverage",
      "1 cinematographer",
      "Highlight film (3-4 min)",
      "Professional audio capture",
      "Delivery in 3-4 weeks",
    ],
    popular: false,
  },
  {
    name: "Signature",
    price: 2400,
    description: "Our most popular wedding package",
    features: [
      "10 hours coverage",
      "2 cinematographers",
      "Highlight film (5-7 min)",
      "Ceremony + Speeches documentary edits",
      "Drone where legal",
      "Delivery in 4-6 weeks",
    ],
    popular: true,
  },
  {
    name: "Live Pro",
    price: 3200,
    description: "For concerts, conferences and large shows",
    features: [
      "Multi-cam live switching",
      "Audio mixing + ISO recording",
      "Graphics + lower thirds",
      "Streaming to 1 destination",
      "On-site engineer",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-2 text-gray-600">
            Choose a package or request a custom quote for your event.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${
                tier.popular
                  ? "border-pink-500 ring-2 ring-pink-500/20"
                  : "border-gray-200"
              } rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{tier.description}</p>
                </div>
                {tier.popular && (
                  <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
                    Most Popular
                  </span>
                )}
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                <span className="text-sm text-gray-500">USD</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-black"
              >
                Book this package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
