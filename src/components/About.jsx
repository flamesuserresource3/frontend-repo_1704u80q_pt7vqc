import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="chi-sono" className="relative py-20 bg-emerald-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_10%,rgba(16,185,129,0.10),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-50">Chi sono</h2>
            <p className="mt-4 text-emerald-100/90">
              Sono Daniele Cerutti, consulente e formatore specializzato in AI generativa, SEO e strumenti digitali. Lavoro con imprenditori, consulenti e agenzie per trasformare obiettivi in processi chiari e replicabili.
            </p>
            <p className="mt-4 text-emerald-100/80">
              Approccio pragmatico: partiamo da ciò che serve davvero, selezioniamo gli strumenti essenziali e progettiamo un metodo sostenibile per il tuo team.
            </p>
            <ul className="mt-6 space-y-2 text-emerald-100/80">
              <li>• Formazione su misura con esempi reali</li>
              <li>• Piani SEO orientati a risultati misurabili</li>
              <li>• Automazioni leggere per ridurre tempi ed errori</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-emerald-400/20 p-6 bg-emerald-900/40 backdrop-blur"
          >
            <h3 className="text-lg font-medium text-emerald-50">Come lavoro</h3>
            <ol className="mt-4 space-y-3 text-emerald-100/80 list-decimal list-inside">
              <li>Analisi essenziale: obiettivi, risorse, vincoli.</li>
              <li>Proposta chiara: attività, tempi, responsabilità.</li>
              <li>Applicazione guidata: test su casi reali e documentazione.</li>
              <li>Ottimizzazione: misuro, semplifico, standardizzo.</li>
            </ol>
            <p className="mt-4 text-sm text-emerald-200/80">
              Obiettivo: renderti autonomo, non dipendente dal consulente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
