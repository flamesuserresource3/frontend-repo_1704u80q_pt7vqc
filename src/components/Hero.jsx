import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Shield } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden bg-white">
      {/* Decorative top border accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        {/* Copy area */}
        <div className="z-10 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 px-3 py-1 text-xs font-medium text-emerald-700"
            aria-label="Highlight: AI + SEO"
          >
            <Shield className="h-3.5 w-3.5" /> AI • SEO • Automazioni
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
          >
            Daniele Cerutti
            <span className="block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Consulente & Formatore</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg"
          >
            Strategie di crescita misurabili con AI generativa, SEO avanzata e strumenti digitali. Progettiamo funnel, automazioni e contenuti che scalano, mantenendo la massima leggibilità e un tocco di tecnologia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Rocket className="h-4 w-4 transition group-hover:translate-x-0.5" />
              Prenota una call
              <ArrowRight className="h-4 w-4 -mr-1 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#resources"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-5 py-3 text-sm font-medium text-emerald-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Scarica media kit
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-6 grid max-w-lg grid-cols-2 gap-3 text-sm text-gray-600"
          >
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> +180% traffico organico medio</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Automazioni AI su misura</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Funnel data-driven</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Formazione operativa</li>
          </motion.ul>
        </div>

        {/* Visual area */}
        <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[520px]">
          <div className="absolute inset-0 rounded-2xl border border-emerald-100/60 bg-emerald-50/40" />
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <Spline
              scene="https://prod.spline.design/0HFZpC1JX9Q9u7-7/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />

            {/* Gradients and beams - pointer events none to keep Spline interactive */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="absolute bottom-[-40px] right-[-40px] h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_80%_20%,rgba(16,185,129,0.12),transparent)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
