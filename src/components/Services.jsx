import React from 'react';
import { Rocket, Users, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, points, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
    className="rounded-xl border border-emerald-400/20 p-6 bg-emerald-900/40 backdrop-blur shadow-[0_0_0_1px_rgba(16,185,129,0.15)] hover:shadow-[0_0_0_1px_rgba(16,185,129,0.35)] transition"
  >
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 text-emerald-950 flex items-center justify-center shadow-lg shadow-emerald-500/30">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-emerald-50">{title}</h3>
    </div>
    <p className="mt-3 text-emerald-100/85">{description}</p>
    <ul className="mt-4 space-y-2 text-emerald-100/80">
      {points.map((p, i) => (
        <li key={i}>• {p}</li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  return (
    <section id="servizi" className="relative py-20 bg-emerald-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_60%_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-50">Servizi</h2>
        <p className="mt-3 text-emerald-100/85 max-w-2xl">
          Interventi mirati, pensati per creare valore applicabile in poco tempo. Ogni progetto include materiali chiari e passaggi replicabili dal team.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <ServiceCard
            delay={0}
            icon={Users}
            title="Formazione operativa"
            description="Workshop e percorsi su AI generativa, SEO e automazioni leggere."
            points={[
              'Contenuti su misura con esempi del tuo settore',
              'Esercitazioni guidate e toolkit pronti all’uso',
              'Follow-up per consolidare le competenze',
            ]}
          />
          <ServiceCard
            delay={0.05}
            icon={Search}
            title="Consulenza SEO pragmatica"
            description="Piani chiari per aumentare traffico e lead senza sovrastrutturare."
            points={[
              'Ricerca opportunità e priorità concrete',
              'Calendario contenuti e ottimizzazioni tecniche essenziali',
              'Metriche e check ricorrenti',
            ]}
          />
          <ServiceCard
            delay={0.1}
            icon={Rocket}
            title="Strategie con AI generativa"
            description="Processi e prompt design per marketing, contenuti e customer care."
            points={[
              'Mappatura dei casi d’uso ad alto impatto',
              'Standard operativi e librerie di prompt',
              'Integrazione con gli strumenti già in uso',
            ]}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#contatti" className="inline-flex items-center justify-center rounded-lg bg-emerald-400 text-emerald-950 px-5 py-3 text-sm md:text-base font-semibold hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/20">
            Richiedi una call conoscitiva
          </a>
          <a href="#risorse" className="inline-flex items-center justify-center rounded-lg border border-emerald-400/40 bg-emerald-900/40 text-emerald-100 px-5 py-3 text-sm md:text-base hover:bg-emerald-900/60 transition">
            Guarda esempi e template
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
