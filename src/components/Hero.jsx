import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-emerald-950">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Aurora and vignette overlays (do not block interaction) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-emerald-950/40 to-emerald-950/80" />
        <div className="absolute -inset-x-20 -top-20 h-[50vh] blur-3xl opacity-50" aria-hidden>
          <div className="w-full h-full bg-[conic-gradient(from_120deg,rgba(16,185,129,0.25),transparent,rgba(20,184,166,0.25),transparent)]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-950 to-transparent" />
      </div>

      {/* Glowing beams */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
      >
        <div className="size-[60vmax] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.10),transparent_60%)]" />
      </motion.div>

      <div className="relative z-[1] max-w-6xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-900/40 px-3 py-1 text-emerald-200 shadow-sm backdrop-blur">
            <span className="inline-flex size-2 rounded-full bg-emerald-400/90 animate-pulse" />
            <span className="text-xs font-medium tracking-wide">AI + SEO ad alte prestazioni, senza complessità inutile</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] text-emerald-50">
            Fai un salto di livello
            <span className="block bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">con AI generativa e SEO pragmatico</span>
          </h1>
          <p className="mt-5 text-emerald-100/85 md:text-lg max-w-2xl">
            Metodo, strumenti e formazione operativa per trasformare obiettivi in risultati concreti. Approccio pulito, replicabile, misurabile.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#servizi"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 text-emerald-950 px-5 py-3 text-sm md:text-base font-semibold shadow-lg shadow-emerald-500/25 transition hover:shadow-emerald-400/40 hover:bg-emerald-300"
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Scopri i servizi</span>
            </a>
            <a
              href="#risorse"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-900/50 text-emerald-100 px-5 py-3 text-sm md:text-base transition hover:bg-emerald-900/70 backdrop-blur"
            >
              Risorse pratiche
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
