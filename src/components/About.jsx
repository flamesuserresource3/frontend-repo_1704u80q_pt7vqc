import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="chi-sono" className="relative py-24 bg-emerald-950">
      {/* Soft radial background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_5%,rgba(16,185,129,0.12),transparent_60%)]" />
        <div className="absolute -right-32 top-1/3 h-64 w-64 blur-3xl opacity-30 bg-emerald-500/20 rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-50">Chi sono</h2>
            <p className="mt-4 text-emerald-100/90">
              Sono Daniele Cerutti, consulente e formatore specializzato in AI generativa, SEO e strumenti digitali. Collaboro con PMI, consulenti e agenzie per strutturare processi snelli, chiari e ripetibili.
            </p>
            <p className="mt-4 text-emerald-100/80">
              Lavoro per priorità e sostenibilità: meno tool, più metodo. Il risultato è un sistema che il tuo team padroneggia davvero.
            </p>
            <ul className="mt-6 space-y-2 text-emerald-100/80">
              <li>• Formazione su casi d'uso reali, non teoria</li>
              <li>• Piani SEO misurabili e senza fronzoli</li>
              <li>• Automazioni leggere per ridurre tempi ed errori</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-emerald-400/20 p-6 bg-emerald-900/40 backdrop-blur shadow-[0_0_0_1px_rgba(16,185,129,0.15)]"
          >
            <h3 className="text-lg font-medium text-emerald-50">Come lavoro</h3>
            <ol className="mt-4 space-y-3 text-emerald-100/80 list-decimal list-inside">
              <li>Analisi rapida: obiettivi, risorse, vincoli.</li>
              <li>Proposta chiara: attività, tempi, responsabilità.</li>
              <li>Applicazione guidata: test su casi reali e documentazione.</li>
              <li>Ottimizzazione: misuro, semplifico, standardizzo.</li>
            </ol>
            <p className="mt-4 text-sm text-emerald-200/80">Obiettivo: autonomia, non dipendenza dal consulente.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
