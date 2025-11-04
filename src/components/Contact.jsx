import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, ArrowRight, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contatti" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Contatti</h2>
            <p className="mt-3 max-w-lg text-gray-600">Parliamo dei tuoi obiettivi: definiremo un piano chiaro con azioni prioritarie e KPI misurabili. Preferisci email o una call rapida?</p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:daniele@example.com"
                className="inline-flex items-center gap-2 text-gray-800 underline underline-offset-4 hover:text-gray-900"
              >
                <Mail className="h-4 w-4" /> daniele@example.com
              </a>
              <a
                href="tel:+391234567890"
                className="inline-flex items-center gap-2 text-gray-800 underline underline-offset-4 hover:text-gray-900"
              >
                <Phone className="h-4 w-4" /> +39 123 456 7890
              </a>
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <Calendar className="h-4 w-4" /> Prenota su Calendly
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
          >
            <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()} aria-label="Modulo di contatto">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-800">Nome</span>
                <input type="text" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Il tuo nome" />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-800">Email</span>
                <input type="email" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="tu@azienda.it" />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-gray-800">Messaggio</span>
                <textarea rows="4" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Raccontami del tuo progetto" />
              </label>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                Invia richiesta
              </button>
            </form>
            <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden>
              <div className="absolute right-[-40px] top-[-40px] h-48 w-48 rounded-full bg-emerald-200/30 blur-3xl" />
              <div className="absolute bottom-[-50px] left-[-30px] h-48 w-48 rounded-full bg-teal-200/30 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
