import React from 'react';
import { Book, Download, Mail } from 'lucide-react';

const ResourceItem = ({ icon: Icon, title, description, action }) => (
  <div className="rounded-xl border border-gray-200 p-6 bg-white">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="mt-3 text-gray-700">{description}</p>
    <div className="mt-4">{action}</div>
  </div>
);

const Resources = () => {
  return (
    <section id="risorse" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Risorse</h2>
        <p className="mt-3 text-gray-700 max-w-2xl">
          Materiali brevi e applicabili per iniziare subito: guide sintetiche, checklist operative e esempi di prompt. Nessun gergo, solo passaggi chiari.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <ResourceItem
            icon={Book}
            title="Guida: AI nei processi di contenuto"
            description="Come impostare un flusso editoriale con AI in 5 passaggi, dalla ricerca al controllo qualità."
            action={
              <a href="#" className="inline-flex items-center gap-2 text-gray-900 hover:underline">
                <Download className="h-4 w-4" /> Scarica PDF
              </a>
            }
          />
          <ResourceItem
            icon={Download}
            title="Checklist SEO essenziale"
            description="Le attività minime per pubblicare contenuti che posano le basi del traffico organico."
            action={
              <a href="#" className="inline-flex items-center gap-2 text-gray-900 hover:underline">
                <Download className="h-4 w-4" /> Scarica checklist
              </a>
            }
          />
          <ResourceItem
            icon={Mail}
            title="Newsletter pratica"
            description="Una volta al mese: casi reali, modelli e strumenti utili. Niente spam, niente hype."
            action={
              <a href="#contatti" className="inline-flex items-center gap-2 text-gray-900 hover:underline">
                <Mail className="h-4 w-4" /> Iscriviti / chiedi info
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Resources;
