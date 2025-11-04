import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Resources from './components/Resources';

function App() {
  return (
    <div className="font-inter text-gray-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold">Daniele Cerutti</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#chi-sono" className="hover:text-gray-900">Chi sono</a>
            <a href="#servizi" className="hover:text-gray-900">Servizi</a>
            <a href="#risorse" className="hover:text-gray-900">Risorse</a>
            <a href="#contatti" className="hover:text-gray-900">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Resources />

        {/* Contatti */}
        <section id="contatti" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Contatti</h2>
                <p className="mt-3 text-gray-700">
                  Hai un obiettivo concreto e vuoi capire il percorso migliore? Prenota una call di 20 minuti: valuteremo insieme priorità, tempi e prossimi passi.
                </p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>• Focus su risultati e fattibilità</li>
                  <li>• Indicazioni chiare già dalla prima chiamata</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:daniele.cerutti@example.com?subject=Richiesta%20informazioni"
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm md:text-base hover:bg-gray-800 transition"
                  >
                    Scrivimi via email
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm md:text-base hover:bg-gray-50 transition"
                  >
                    Prenota una call
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-medium">Richiedi materiali di esempio</h3>
                <p className="mt-2 text-sm text-gray-600">Riceverai un pacchetto con una guida, una checklist e un esempio di prompt.</p>
                <form className="mt-4 grid gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <textarea
                    placeholder="Di cosa hai bisogno?"
                    rows="3"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm md:text-base hover:bg-gray-800 transition"
                    aria-label="Invia (demo)"
                  >
                    Invia richiesta (demo)
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Daniele Cerutti · Consulenza e formazione su AI, SEO, strumenti digitali</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
