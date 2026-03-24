import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Technologie universelle propriétaire",
    text: "STRATÉON développe une architecture analytique capable de lire les systèmes complexes selon une logique dynamique, multi-échelle et orientée vers l’action.",
  },
  {
    title: "Λ-Core Engine",
    text: "Le moteur analytique central organise l’observation, l’interprétation et le pilotage des transitions système dans des contextes industriels à forte valeur.",
  },
  {
    title: "Lecture dynamique avancée",
    text: "Cette approche permet de suivre l’évolution interne d’un système dans le temps et de faire émerger des signaux utiles avant les lectures conventionnelles.",
  },
];

const capabilities = [
  "Lecture multi-échelle",
  "Détection des zones de transition",
  "Pilotage des régimes dynamiques",
  "Applicabilité multi-sectorielle",
  "Architecture compatible avec l’industrie",
  "Fondation pour solutions verticales",
];

const blocks = [
  {
    id: "01",
    title: "Nature de la technologie",
    text: "La technologie STRATÉON repose sur une architecture de stabilité dynamique conçue pour rendre les systèmes complexes plus lisibles, plus pilotables et plus exploitables dans des environnements à haute exigence.",
  },
  {
    id: "02",
    title: "Architecture Λ-Core Engine",
    text: "Le Λ-Core Engine agit comme le cœur analytique du système. Il soutient la lecture structurée des dynamiques internes, l’identification des changements de régime et la production d’une intelligence exploitable par les décideurs et les opérateurs.",
  },
  {
    id: "03",
    title: "Passage de la lecture statique au pilotage dynamique",
    text: "L’approche proposée par STRATÉON ouvre une nouvelle relation aux données. Elle favorise une compréhension active des trajectoires système et soutient la prise de décision dans le temps, plutôt qu’une simple observation descriptive.",
  },
  {
    id: "04",
    title: "Logique multi-échelle et multi-sectorielle",
    text: "La même architecture peut servir des contextes variés, depuis des systèmes mécaniques avancés jusqu’à des environnements organisationnels, énergétiques, biologiques ou cognitifs, avec une cohérence méthodologique forte.",
  },
  {
    id: "05",
    title: "Avantage technologique",
    text: "STRATÉON soutient une lecture plus précoce, plus structurée et plus stratégique des dynamiques complexes. Cette avance crée un potentiel puissant en matière de performance, de fiabilité et de différenciation industrielle.",
  },
];

export default function TechnologiePage() {
  return (
    <main className="min-h-screen bg-[#031126] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,153,255,0.18),transparent_34%),linear-gradient(to_bottom,#031126,#071a38,#031126)]" />

      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl bg-[#031126]/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(0,140,255,0.18)]">
              <Image src="/logo-strateon.png" alt="STRATÉON" width={38} height={38} />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[0.28em]">STRATÉON</div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
                Dynamic Stability Architecture
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link href="/technologie" className="text-white">Technologie</Link>
            <Link href="/validation" className="transition hover:text-white">Validation</Link>
            <Link href="/applications" className="transition hover:text-white">Applications</Link>
            <Link href="/investisseurs" className="transition hover:text-white">Investisseurs</Link>
            <Link href="/#contact" className="transition hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100">
              Page Technologie
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Une architecture analytique conçue pour lire et piloter les systèmes complexes
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Cette page présente le cœur scientifique et technologique de STRATÉON, avec une mise en scène claire du Λ-Core Engine, de la lecture dynamique et de l’avantage stratégique porté par l’architecture de stabilité dynamique.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <div className="text-base font-semibold">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(0,153,255,0.18),transparent_52%)] blur-2xl" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Core technology</div>
                  <div className="mt-2 text-2xl font-semibold">Λ-Core Engine</div>
                </div>
                <div className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  Strategic layer
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Image
                  src="/logo-core.png"
                  alt="Λ-Core Engine"
                  width={320}
                  height={320}
                  className="drop-shadow-[0_0_45px_rgba(0,150,255,0.35)]"
                />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-[#071a38]/80 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">Architecture</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Les cinq blocs de la page Technologie
            </h2>
          </div>
          <p className="max-w-2xl text-slate-300 leading-8">
            La structure qui suit transforme votre profondeur technologique en un récit lisible, crédible et hautement valorisant pour des audiences industrielles et financières.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {blocks.map((block) => (
            <div
              key={block.id}
              className="grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-7 lg:grid-cols-[120px_1fr]"
            >
              <div className="text-4xl font-semibold text-cyan-200/80">{block.id}</div>
              <div>
                <h3 className="text-2xl font-semibold">{block.title}</h3>
                <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-300">{block.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.8rem] border border-white/10 bg-[#071a38]/80 p-7">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">Positionnement</div>
              <h3 className="mt-4 text-2xl font-semibold">De la compréhension à l’action</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                STRATÉON soutient une capacité de lecture, d’anticipation et d’optimisation qui élève le rôle des données dans les systèmes complexes et renforce la valeur stratégique des décisions.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-[#071a38]/80 p-7">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">Projection</div>
              <h3 className="mt-4 text-2xl font-semibold">Une fondation pour les verticales de marché</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Cette page favorise une transition naturelle vers les applications sectorielles, la validation industrielle et le récit investisseur. Elle devient ainsi un pivot central de toute la plateforme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">Étape suivante</div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Préparer la page Validation
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-300 leading-8">
            La suite la plus porteuse consiste à construire une page Validation à fort impact, capable d’appuyer votre crédibilité auprès des investisseurs et des partenaires industriels.
          </p>
        </div>
      </section>
    </main>
  );
}