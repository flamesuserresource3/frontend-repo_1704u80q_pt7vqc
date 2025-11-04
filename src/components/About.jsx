import React from 'react';

const About = () => {
  return (
    <section id="chi-sono" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Chi sono</h2>
            <p className="mt-4 text-gray-700">
              Sono Daniele Cerutti, consulente e formatore specializzato in AI generativa, SEO e strumenti digitali. Lavoro con imprenditori, consulenti e agenzie per trasformare obiettivi in processi chiari e replicabili.
            </p>
            <p className="mt-4 text-gray-700">
              Il mio approccio è pratico: partiamo da ciò che serve davvero, selezioniamo gli strumenti essenziali e progettiamo un metodo sostenibile per il tuo team. Niente tecnicismi inutili, niente promesse esagerate.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Percorsi di formazione su misura con esempi reali</li>
              <li>• Piani SEO orientati a risultati misurabili</li>
              <li>• Automazioni leggere per ridurre tempi e errori</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">Come lavoro</h3>
            <ol className="mt-4 space-y-3 text-gray-700 list-decimal list-inside">
              <li>Analisi essenziale: obiettivi, risorse, vincoli.</li>
              <li>Proposta chiara: attività, tempi, responsabilità.</li>
              <li>Applicazione guidata: test su casi reali e documentazione.</li>
              <li>Ottimizzazione: misuro, semplifico, standardizzo.</li>
            </ol>
            <p className="mt-4 text-sm text-gray-600">
              L’obiettivo è renderti autonomo, non dipendente dal consulente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
