import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
            AI generativa, SEO e strumenti digitali
            <span className="block text-gray-600">per risultati concreti nelle PMI e nelle agenzie</span>
          </h1>
          <p className="mt-6 text-gray-700 md:text-lg">
            Sono Daniele Cerutti: ti aiuto a scegliere e applicare le soluzioni giuste, senza gergo tecnico e senza promesse irrealistiche.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#servizi" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm md:text-base hover:bg-gray-800 transition">
              Scopri i servizi
            </a>
            <a href="#risorse" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm md:text-base hover:bg-gray-50 transition">
              Risorse pratiche
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
