import React from 'react';
import { Book, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ResourceItem = ({ icon: Icon, title, description, action, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45, delay }}
    className="rounded-xl border border-emerald-400/20 p-6 bg-emerald-900/40 backdrop-blur"
  >
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 text-emerald-950 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-emerald-50">{title}</h3>
    </div>
    <p className="mt-3 text-emerald-100/85">{description}</p>
    <div className="mt-4">{action}</div>
  </motion.div>
);

const Resources = () => {
  return (
    <section id="risorse" className="py-20 bg-emerald-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-50">Risorse</h2>
        <p className="mt-3 text-emerald-100/85 max-w-2xl">
          Materiali brevi e applicabili per iniziare subito: guide sintetiche, checklist operative e esempi di prompt. Nessun gergo, solo passaggi chiari.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <ResourceItem
            delay={0}
            icon={Book}
            title="Guida: AI nei processi di contenuto"
            description="Imposta un flusso editoriale con AI in 5 passaggi: dalla ricerca al controllo qualità."
            action={
              <a href="#" className="inline-flex items-center gap-2 text-emerald-200 hover:text-emerald-100 hover:underline">
                <Download className="h-4 w-4" /> Scarica PDF
              </a>
            }
          />
          <ResourceItem
            delay={0.05}
            icon={Download}
            title="Checklist SEO essenziale"
            description="Le attività minime per avviare traffico organico sostenibile."
            action={
              <a href="#" className="inline-flex items-center gap-2 text-emerald-200 hover:text-emerald-100 hover:underline">
                <Download className="h-4 w-4" /> Scarica checklist
              </a>
            }
          />
          <ResourceItem
            delay={0.1}
            icon={Mail}
            title="Newsletter pratica"
            description="Una volta al mese: casi reali, modelli e strumenti utili. Niente hype."
            action={
              <a href="#contatti" className="inline-flex items-center gap-2 text-emerald-200 hover:text-emerald-100 hover:underline">
                <Mail className="h-4 w-4" /> Iscriviti / chiedi info
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Resources;
