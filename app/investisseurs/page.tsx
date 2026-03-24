import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Opportunité de marché",
    text: "Les systèmes complexes deviennent centraux dans les industries stratégiques, créant un besoin croissant pour des technologies capables de les lire et les piloter.",
  },
  {
    title: "Technologie différenciante",
    text: "STRATÉON introduit une architecture unique qui transforme la lecture des systèmes en intelligence exploitable.",
  },
  {
    title: "Positionnement plateforme",
    text: "Une approche conçue pour soutenir plusieurs industries avec un potentiel d’expansion international.",
  },
];

const model = [
  "Licences technologiques sectorielles",
  "Partenariats industriels stratégiques",
  "Déploiement par verticales",
  "Valorisation de la propriété intellectuelle",
  "Effet plateforme multi-marchés",
];

const roadmap = [
  {
    id: "01",
    title: "Structuration",
    text: "Mise en place de l’entreprise, consolidation de la propriété intellectuelle et développement initial.",
  },
  {
    id: "02",
    title: "Validation industrielle",
    text: "Collaboration avec partenaires pour démontrer la valeur en environnement réel.",
  },
  {
    id: "03",
    title: "Expansion",
    text: "Déploiement progressif dans plusieurs secteurs à partir du socle technologique.",
  },
  {
    id: "04",
    title: "Scalabilité",
    text: "Transformation en infrastructure technologique globale.",
  },
];

export default function InvestisseursPage() {
  return (
    <main className="min-h-screen bg-[#031126] text-white">
      <header className="border-b border-white/10 px-6 py-5">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-strateon.png" alt="STRATÉON" width={36} height={36} />
            <span className="tracking-widest font-semibold">STRATÉON</span>
          </Link>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <Link href="/technologie">Technologie</Link>
            <Link href="/validation">Validation</Link>
            <Link href="/investisseurs" className="text-white">Investisseurs</Link>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-semibold max-w-4xl">
          Une opportunité de construire une infrastructure technologique mondiale
        </h1>

        <p className="mt-6 text-slate-300 max-w-2xl">
          STRATÉON propose une nouvelle catégorie technologique capable de transformer la manière dont les systèmes complexes sont compris et pilotés.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:benoitlavoie2019@gmail.com?subject=Investissement%20STRAT%C3%89ON&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20plus%20d'informations%20sur%20les%20opportunit%C3%A9s%20d'investissement.%0A%0A"
            className="border border-cyan-400 px-6 py-3 rounded-xl"
          >
            Demander une rencontre
          </a>

          <a
            href="mailto:benoitlavoie2019@gmail.com?subject=Pitch%20Deck%20STRAT%C3%89ON&body=Bonjour%2C%0A%0AJe%20souhaite%20recevoir%20le%20pitch%20deck%20de%20STRAT%C3%89ON.%0A%0A"
            className="border border-white/20 px-6 py-3 rounded-xl"
          >
            Demander le pitch deck
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto pb-20">
        {pillars.map((item) => (
          <div key={item.title} className="border border-white/10 p-6 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#071a38] border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Modèle d’affaires</h2>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {model.map((item) => (
              <div key={item} className="border border-white/10 p-4 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-6">
        {roadmap.map((step) => (
          <div key={step.id} className="border border-white/10 p-6 rounded-xl bg-white/5">
            <div className="text-blue-300 text-xl">{step.id}</div>
            <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{step.text}</p>
          </div>
        ))}
      </section>

      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold">
          Accès aux documents investisseurs
        </h2>
        <p className="mt-6 text-slate-300 max-w-xl mx-auto">
          La page investisseurs ouvre une relation directe avec STRATÉON pour les demandes d’information, de rencontre et de présentation stratégique.
        </p>
      </section>
    </main>
  );
}