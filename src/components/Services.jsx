import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Search, Workflow, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Search className="h-5 w-5 text-emerald-600" />,
    title: 'SEO avanzata',
    desc: 'Audit tecnico, content strategy e ottimizzazioni on-page/off-page per scalare in SERP.',
  },
  {
    icon: <Workflow className="h-5 w-5 text-emerald-600" />,
    title: 'Automazioni AI',
    desc: 'Pipeline personalizzate per generazione contenuti, analisi, e workflow no-code/low-code.',
  },
  {
    icon: <LineChart className="h-5 w-5 text-emerald-600" />,
    title: 'Growth & Funnel',
    desc: 'Progettazione funnel, CRO e tracciamenti per crescita sostenibile e misurabile.',
  },
  {
    icon: <Rocket className="h-5 w-5 text-emerald-600" />,
    title: 'Formazione',
    desc: 'Workshop e training operativi su AI generativa, SEO e tool digitali per i team.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.5 } }),
};

const Services = () => {
  return (
    <section id="servizi" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Servizi</h2>
          <p className="mt-3 text-gray-600">Soluzioni concrete con tecnologia di ultima generazione e massima attenzione alla leggibilità e ai risultati.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              custom={i}
              className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:shadow-lg"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 transition group-hover:opacity-100" aria-hidden>
                <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-emerald-200/30 blur-2xl" />
                <div className="absolute bottom-[-50px] left-[-30px] h-48 w-48 rounded-full bg-teal-200/30 blur-2xl" />
              </div>
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">{s.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
