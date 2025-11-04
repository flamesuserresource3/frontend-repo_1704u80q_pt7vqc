import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Resources from './components/Resources';
import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="font-inter bg-emerald-950 text-emerald-50 min-h-screen relative">
      {/* Global decorative grid + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Top nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-emerald-950/60 border-b border-emerald-400/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-emerald-100 hover:text-emerald-50 transition">Daniele Cerutti</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-emerald-200">
            <a href="#chi-sono" className="hover:text-emerald-50">Chi sono</a>
            <a href="#servizi" className="hover:text-emerald-50">Servizi</a>
            <a href="#risorse" className="hover:text-emerald-50">Risorse</a>
            <a href="#contatti" className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 px-3 py-1 hover:bg-emerald-900/40 transition">
              <Mail className="h-4 w-4" /> Contatti
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Resources />

        {/* Contatti */}
        <section id="contatti" className="relative py-24">
          {/* spotlight background */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-72 w-[80%] rounded-b-[50%] blur-3xl opacity-30 bg-gradient-to-b from-emerald-500/20 to-transparent" />
          </div>
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Contatti</h2>
                <p className="mt-3 text-emerald-100/85">
                  Hai un obiettivo concreto e vuoi capire il percorso migliore? Prenota una call di 20 minuti: valuteremo insieme priorità, tempi e prossimi passi.
                </p>
                <ul className="mt-4 text-emerald-100/80 space-y-2">
                  <li>• Focus su risultati e fattibilità</li>
                  <li>• Indicazioni chiare già dalla prima chiamata</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:daniele.cerutti@example.com?subject=Richiesta%20informazioni"
                    className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 text-emerald-950 px-5 py-3 text-sm md:text-base font-semibold hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/25"
                  >
                    <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> Scrivimi via email
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-900/50 text-emerald-100 px-5 py-3 text-sm md:text-base hover:bg-emerald-900/70 transition"
                  >
                    Prenota una call
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-900/40 p-6 backdrop-blur shadow-[0_0_0_1px_rgba(16,185,129,0.15)]">
                <h3 className="text-lg font-medium">Richiedi materiali di esempio</h3>
                <p className="mt-2 text-sm text-emerald-100/80">Riceverai un pacchetto con una guida, una checklist e un esempio di prompt.</p>
                <form className="mt-4 grid gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full rounded-md border border-emerald-400/20 bg-emerald-900/60 text-emerald-50 placeholder-emerald-200/60 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-emerald-400/20 bg-emerald-900/60 text-emerald-50 placeholder-emerald-200/60 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                  />
                  <textarea
                    placeholder="Di cosa hai bisogno?"
                    rows="3"
                    className="w-full rounded-md border border-emerald-400/20 bg-emerald-900/60 text-emerald-50 placeholder-emerald-200/60 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-400 text-emerald-950 px-5 py-3 text-sm md:text-base font-semibold hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/25"
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

      <footer className="py-8 border-t border-emerald-400/10 bg-emerald-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 text-sm text-emerald-200 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Daniele Cerutti · Consulenza e formazione su AI, SEO, strumenti digitali</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-100">LinkedIn</a>
            <a href="#" className="hover:text-emerald-100">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
