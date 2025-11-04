import React from 'react';
import { Rocket, Users, Search } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, points }) => (
  <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="mt-3 text-gray-700">{description}</p>
    <ul className="mt-4 space-y-2 text-gray-700">
      {points.map((p, i) => (
        <li key={i}>• {p}</li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  return (
    <section id="servizi" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Servizi</h2>
        <p className="mt-3 text-gray-700 max-w-2xl">
          Interventi mirati, pensati per creare valore applicabile in poco tempo. Ogni progetto include materiali chiari e passaggi replicabili dal team.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <ServiceCard
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
          <a href="#contatti" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm md:text-base hover:bg-gray-800 transition">
            Richiedi una call conoscitiva
          </a>
          <a href="#risorse" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm md:text-base hover:bg-gray-50 transition">
            Guarda esempi e template
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
