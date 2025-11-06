export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-white/70">© {new Date().getFullYear()} Your Studio Name. All rights reserved.</p>
          <nav className="flex gap-6 text-white/70">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#booking" className="hover:text-white">Booking</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
