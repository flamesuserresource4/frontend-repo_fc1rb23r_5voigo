import { Video, Camera, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm text-white/90 ring-1 ring-white/15">
              <Video className="h-4 w-4" /> Live & Wedding Production
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Capture the moments.
              <br /> Craft the story.
            </h1>
            <p className="mt-4 text-white/70 md:text-lg">
              Premium wedding cinematography and live event production. From intimate vows to large stage shows, we design visuals that last a lifetime.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="rounded-lg bg-pink-500 px-6 py-3 font-medium text-white shadow-lg shadow-pink-500/25 transition hover:bg-pink-600"
              >
                Book Your Date
              </a>
              <a
                href="#pricing"
                className="rounded-lg bg-white/10 px-6 py-3 font-medium text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                View Packages
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2"><Camera className="h-5 w-5" /> 4K Cinema</div>
              <div className="flex items-center gap-2"><Calendar className="h-5 w-5" /> Flexible scheduling</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop"
                alt="Wedding and live production"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-gray-900/40 via-transparent to-gray-900/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
