import { Film, Radio, Heart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Cinematography",
    description:
      "Full-day coverage with multiple cameras, aerial shots, and a cinematic highlight film.",
  },
  {
    icon: Radio,
    title: "Live Event Production",
    description:
      "Multi-cam live switching, audio mixing, recording, and streaming to your platforms.",
  },
  {
    icon: Film,
    title: "Documentary Edits",
    description:
      "Full-length edits preserving vows, speeches, performances, and all key moments.",
  },
  {
    icon: Sparkles,
    title: "Same-Day Edits",
    description:
      "Short, shareable films produced on-site to wow your guests or online audience.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            What we do best
          </h2>
          <p className="mt-2 text-gray-600">
            Professional coverage for weddings, concerts, conferences and more.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-pink-50 p-3 text-pink-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
