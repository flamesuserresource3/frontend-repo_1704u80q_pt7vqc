import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden bg-emerald-950">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient veil to blend 3D with brand tones (does not block interaction) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-emerald-950/60 via-emerald-900/50 to-emerald-950/80" />

      {/* Accent radial glow */}
      <div className="pointer-events-none absolute -inset-x-20 -bottom-32 h-72 blur-3xl opacity-40" aria-hidden>
        <div className="w-full h-full bg-gradient-to-t from-emerald-500/30 via-teal-400/20 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-900/40 px-3 py-1 text-emerald-200 shadow-sm">
            <span className="inline-flex size-2 rounded-full bg-emerald-400/80 animate-pulse" />
            <span className="text-xs font-medium tracking-wide">SEO + AI generativa per imprese che vogliono correre</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] text-emerald-50">
            Strategie e formazione
            <span className="block bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">ad alto impatto con AI e SEO</span>
          </h1>
          <p className="mt-5 text-emerald-100/80 md:text-lg max-w-2xl">
            Sono Daniele Cerutti: trasformo obiettivi in processi chiari e replicabili. Niente buzzword, solo risultati misurabili e metodi sostenibili per PMI e agenzie.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#servizi"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 text-emerald-950 px-5 py-3 text-sm md:text-base font-semibold hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/20"
            >
              <Rocket className="h-4 w-4" /> Scopri i servizi
            </a>
            <a
              href="#risorse"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-400/40 bg-emerald-900/40 text-emerald-100 px-5 py-3 text-sm md:text-base hover:bg-emerald-900/60 transition"
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
