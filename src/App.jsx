import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">Studio Aura</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#booking" className="text-gray-600 hover:text-gray-900">Booking</a>
          </nav>
          <a href="#booking" className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">Check date</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Pricing />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}

export default App;
