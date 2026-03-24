import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Technologie",
    text: "Une architecture analytique conçue pour lire, anticiper et piloter les systèmes complexes dans des environnements à haute valeur stratégique.",
  },
  {
    title: "Validation",
    text: "Une trajectoire de crédibilité fondée sur des résultats avancés, une logique de preuve claire et une préparation à la validation industrielle.",
  },
  {
    title: "Déploiement",
    text: "Une logique de plateforme apte à soutenir plusieurs verticales de marché avec une cohérence technologique forte.",
  },
];

const highlights = [
  "Λ-Core Engine",
  "Architecture multi-échelle",
  "Lecture dynamique avancée",
  "Positionnement plateforme",
  "Infrastructure deep tech",
  "Trajectoire industrielle",
];

const sectors = [
  "Aéronautique",
  "Énergie",
  "Industrie avancée",
  "Mobilité durable",
  "Santé et systèmes biologiques",
  "Éducation et cognition",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#031126] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,153,255,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(0,102,255,0.14),transparent_22%),linear-gradient(to_bottom,#031126,#071a38,#031126)]" />

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
            <Link href="/technologie" className="transition hover:text-white">
              Technologie
            </Link>
            <Link href="/validation" className="transition hover:text-white">
              Validation
            </Link>
            <Link href="/investisseurs" className="transition hover:text-white">
              Investisseurs
            </Link>
            <a href="#applications" className="transition hover:text-white">
              Applications
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="mailto:benoitlavoie2019@gmail.com?subject=Demande%20de%20rencontre%20STRAT%C3%89ON&body=Bonjour%2C%0A%0AJe%20souhaite%20en%20savoir%20plus%20sur%20STRAT%C3%89ON.%0A%0A"
            className="hidden rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_35px_rgba(0,160,255,0.12)] transition hover:scale-[1.02] lg:inline-flex"
          >
            Demander une rencontre
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100">
              Infrastructure deep tech
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Une nouvelle architecture pour comprendre et piloter les systèmes complexes
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              STRATÉON développe une plateforme technologique capable d’anticiper, de stabiliser et d’optimiser les systèmes à travers plusieurs industries stratégiques. Son approche transforme la lecture statique en intelligence dynamique exploitable.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:benoitlavoie2019@gmail.com?subject=Demande%20de%20rencontre%20STRAT%C3%89ON&body=Bonjour%2C%0A%0AJe%20souhaite%20en%20savoir%20plus%20sur%20votre%20technologie.%0A%0A"
                className="rounded-2xl border border-cyan-300/35 bg-cyan-400/10 px-6 py-3.5 text-sm font-medium text-cyan-100 shadow-[0_0_35px_rgba(0,160,255,0.12)] transition hover:scale-[1.02]"
              >
                Demander une rencontre stratégique
              </a>
              <Link
                href="/technologie"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-slate-100 transition hover:bg-white/10"
              >
                Explorer la technologie
              </Link>
            </div>

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
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Core technology
                  </div>
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
                {highlights.map((item) => (
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

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-white/10 bg-[#071a38]/80 p-7">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">Validation</div>
              <h3 className="mt-4 text-2xl font-semibold">Crédibilité technologique</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                La démarche de STRATÉON s’appuie sur une logique de preuve et sur une trajectoire claire vers la validation industrielle.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-[#071a38]/80 p-7">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">Marché</div>
              <h3 className="mt-4 text-2xl font-semibold">Projection multi-sectorielle</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Une même architecture peut soutenir plusieurs verticales stratégiques avec une cohérence forte et un potentiel d’expansion international.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-[#071a38]/80 p-7">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">Investisseurs</div>
              <h3 className="mt-4 text-2xl font-semibold">Actif structuré</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Le site présente STRATÉON comme une plateforme deep tech crédible, apte à soutenir des discussions de financement et de partenariat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">Applications</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Une technologie, plusieurs verticales stratégiques
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#071a38]/70 px-5 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-8 text-center lg:px-8">
        <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">Contact</div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Ouvrir une discussion stratégique avec STRATÉON
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-300 leading-8">
            STRATÉON s’inscrit dans une dynamique de collaboration avec des partenaires industriels et des investisseurs afin de déployer sa technologie à grande échelle.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:benoitlavoie2019@gmail.com?subject=Contact%20STRAT%C3%89ON&body=Bonjour%2C%0A%0AJe%20souhaite%20vous%20contacter%20au%20sujet%20de%20STRAT%C3%89ON.%0A%0A"
              className="rounded-2xl border border-cyan-300/35 bg-cyan-400/10 px-6 py-3.5 text-sm font-medium text-cyan-100 transition hover:scale-[1.02]"
            >
              Contacter STRATÉON
            </a>
            <Link
              href="/investisseurs"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-slate-100 transition hover:bg-white/10"
            >
              Accéder à la page investisseurs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}