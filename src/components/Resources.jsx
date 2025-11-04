import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Link as LinkIcon } from 'lucide-react';

const resources = [
  {
    title: 'Media Kit',
    desc: 'Informazioni, bio, linee guida visual e case study selezionati.',
    action: { label: 'Scarica PDF', href: '#', icon: <Download className="h-4 w-4" /> },
  },
  {
    title: 'Checklist SEO 2025',
    desc: 'Tutti i passaggi essenziali per un SEO audit efficace.',
    action: { label: 'Scarica', href: '#', icon: <FileText className="h-4 w-4" /> },
  },
  {
    title: 'Template Prompting',
    desc: 'Strutture pronte per ChatGPT e strumenti LLM per marketing e content.',
    action: { label: 'Apri', href: '#', icon: <LinkIcon className="h-4 w-4" /> },
  },
];

const Resources = () => {
  return (
    <section id="resources" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Risorse</h2>
          <p className="mt-3 text-gray-600">Materiali operativi e scaricabili per accelerare l’esecuzione.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <motion.a
              key={r.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              href={r.action.href}
              className="group relative block overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 transition group-hover:opacity-100" aria-hidden>
                <div className="absolute right-[-30px] top-[-30px] h-36 w-36 rounded-full bg-emerald-200/30 blur-2xl" />
                <div className="absolute bottom-[-40px] left-[-20px] h-40 w-40 rounded-full bg-teal-200/30 blur-2xl" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-gray-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{r.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50/70 px-3 py-1.5 text-sm font-medium text-emerald-700">
                  {r.action.icon}
                  {r.action.label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
