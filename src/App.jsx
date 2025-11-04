import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Resources from './components/Resources';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-base font-semibold tracking-tight text-gray-900">
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">DC</span> • Cerutti
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
            <a href="#servizi" className="hover:text-gray-900">Servizi</a>
            <a href="#resources" className="hover:text-gray-900">Risorse</a>
            <a href="#contatti" className="rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-emerald-700 hover:bg-emerald-50">Contatti</a>
          </nav>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      </header>

      {/* Hero (accent, ma copy su bianco) */}
      <Hero />

      {/* Highlights bar */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white p-4">
            <Star className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">+180% traffico</p>
              <p className="text-xs text-gray-600">media 6 mesi</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white p-4">
            <Award className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">30+ progetti</p>
              <p className="text-xs text-gray-600">PMI e brand</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white p-4">
            <Users className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Team Enablement</p>
              <p className="text-xs text-gray-600">formazione operativa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services: bianco leggibile con accenti verdi */}
      <Services />

      {/* Resources: bianco leggibile con card */}
      <Resources />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} Daniele Cerutti. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Cookie</a>
              <a href="#contatti" className="rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-emerald-700 hover:bg-emerald-50">Contatti</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
