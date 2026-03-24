import Image from "next/image";
import Link from "next/link";

const proofs = [
  {
    title: "Résultats avancés",
    text: "Les travaux réalisés démontrent une capacité à détecter des transitions système de manière précoce, avant les approches conventionnelles.",
  },
  {
    title: "Lecture anticipative",
    text: "L’architecture STRATÉON permet d’identifier des dynamiques internes avant leur manifestation dans les indicateurs classiques.",
  },
  {
    title: "Robustesse multi-domaines",
    text: "Les résultats observés montrent une cohérence dans différents environnements complexes, soutenant une applicabilité élargie.",
  },
];

const comparison = [
  "Modèles statistiques classiques",
  "Approches IA conventionnelles",
  "Systèmes de maintenance prédictive",
  "Analyse descriptive traditionnelle",
];

const steps = [
  {
    id: "01",
    title: "Validation expérimentale",
    text: "Des expérimentations sur des datasets complexes démontrent la capacité de STRATÉON à capter des signaux critiques et à structurer une lecture dynamique du système.",
  },
  {
    id: "02",
    title: "Avantage comparatif",
    text: "La technologie permet une lecture plus précoce et plus structurée que les approches existantes, offrant un potentiel de décision amélioré.",
  },
  {
    id: "03",
    title: "Indicateurs exploitables",
    text: "Les indicateurs générés soutiennent une compréhension claire des zones de transition, des régimes dynamiques et des trajectoires système.",
  },
  {
    id: "04",
    title: "Préparation industrielle",
    text: "STRATÉON est positionnée pour entrer dans une phase de validation industrielle avec des partenaires stratégiques.",
  },
];

export default function ValidationPage() {
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
            <Link href="/validation" className="text-white">Validation</Link>
            <Link href="/investisseurs">Investisseurs</Link>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-semibold max-w-4xl">
          Une base de preuves qui soutient la crédibilité et l’adoption industrielle
        </h1>

        <p className="mt-6 text-slate-300 max-w-2xl">
          STRATÉON s’appuie sur des résultats avancés pour démontrer la pertinence de son architecture dans la lecture et le pilotage des systèmes complexes.
        </p>

        <div className="mt-8">
          <a
            href="mailto:benoitlavoie2019@gmail.com?subject=Validation%20STRAT%C3%89ON&body=Bonjour%2C%0A%0AJe%20souhaite%20en%20savoir%20plus%20sur%20la%20validation%20de%20STRAT%C3%89ON.%0A%0A"
            className="inline-flex rounded-xl border border-cyan-400 px-6 py-3"
          >
            Demander une rencontre
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto pb-20">
        {proofs.map((item) => (
          <div key={item.title} className="border border-white/10 p-6 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#071a38] border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Comparaison aux approches actuelles</h2>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {comparison.map((item) => (
              <div key={item} className="border border-white/10 p-4 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="border border-white/10 p-6 rounded-xl bg-white/5">
            <div className="text-blue-300 text-xl">{step.id}</div>
            <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{step.text}</p>
          </div>
        ))}
      </section>

      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold">
          Une trajectoire vers la validation industrielle
        </h2>
        <p className="mt-6 text-slate-300 max-w-xl mx-auto">
          STRATÉON ouvre la voie à des collaborations industrielles permettant de démontrer la valeur de la technologie en conditions réelles.
        </p>
      </section>
    </main>
  );
}