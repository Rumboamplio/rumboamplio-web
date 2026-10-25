import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Compass, Store, Landmark, Wrench, MessageCircle, Route as RouteIcon,
  FileText, CheckCircle2, Mail, Menu, X, Search, UserCheck, Scale, ArrowRight,
} from "lucide-react";
import hero from "@/assets/hero-landscape.jpg";

const EMAIL = "david@rumboamplio.com";
const BOOK = "https://calendar.app.google/ENj9bcK6qoCMVNbC9";
const TITLE = "RUMBOAMPLIO · Exploración comparada de alternativas profesionales";
const DESC =
  "Exploramos contigo alternativas profesionales reales: reinvención, emprendimiento, empleo público y nuevas profesiones. Informe comparativo personalizado por 49 €.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["#caminos", "Caminos"],
  ["#como-funciona", "Cómo funciona"],
  ["#enfoque", "Enfoque"],
  ["#precio", "Precio"],
  ["#contacto", "Contacto"],
];

const paths = [
  { icon: Compass, n: "01", t: "Reinventarte con tu experiencia", d: "Nuevos sectores, otros puestos, consultoría y trabajo freelance a partir de lo que ya sabes hacer." },
  { icon: Store, n: "02", t: "Emprendimiento y franquicias", d: "Proyectos propios y modelos de franquicia, con su inversión, requisitos y realidad del día a día." },
  { icon: Landmark, n: "03", t: "Empleo público y oposiciones", d: "Cuerpos y plazas acordes a tu perfil: requisitos de acceso, temarios, plazos y condiciones." },
  { icon: Wrench, n: "04", t: "Nuevas profesiones y oficios técnicos", d: "Profesiones emergentes y oficios cualificados, con la formación necesaria para acceder a ellos." },
];

const steps = [
  { icon: MessageCircle, t: "Primera conversación gratuita", d: "Mantendremos una conversación por videollamada para conocer tu situación, intereses y límites." },
  { icon: RouteIcon, t: "Recorrido de exploración", d: "Te haremos las preguntas adecuadas para investigar de forma personalizada las alternativas reales que encajan contigo." },
  { icon: FileText, t: "Informe comparativo", d: "Prepararemos un informe basado en tus preferencias e intereses para que puedas valorar por ti mismo, con información actualizada, las diferentes posibilidades reales para tu perfil." },
  { icon: CheckCircle2, t: "Entrega y aclaraciones", d: "Volveremos a reunirnos por videollamada para comentar el informe y resolver las dudas que te surjan al leerlo." },
];

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#inicio" className="font-serif text-lg tracking-[0.18em] text-deep">RUMBOAMPLIO</a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([h, l]) => (
              <a key={h} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
            ))}
            <a href={BOOK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-deep">Reservar</a>
          </nav>
          <button className="md:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
            {nav.map(([h, l]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-border/60 py-3 text-base">{l}</a>
            ))}
            <a href={BOOK} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-full bg-primary py-3 text-center font-medium text-primary-foreground">Reserva tu primera conversación gratuita</a>
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-28">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
            <img src={hero} alt="Caminos que se bifurcan entre olivos al atardecer" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/45 to-deep/10" />
            <div className="relative flex min-h-[78vh] flex-col justify-end p-7 md:min-h-[640px] md:p-14">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-deep-foreground/80">Exploración de alternativas profesionales</p>
              <h1 className="max-w-3xl text-4xl font-light leading-[1.08] text-deep-foreground sm:text-5xl md:text-6xl">
                Tu futuro tiene más caminos de los que imaginas
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-deep-foreground/85 md:text-lg">
                Exploramos contigo alternativas profesionales reales, para que puedas decidir con más información y perspectiva.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={BOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-background px-7 py-4 text-sm font-semibold text-deep shadow-lg transition hover:bg-secondary">
                  Reserva tu primera conversación gratuita
                </a>
                <span className="text-sm text-deep-foreground/75">15–20 minutos · sin compromiso</span>
              </div>
            </div>
          </div>
        </section>

        {/* Caminos */}
        <section id="caminos" className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead kicker="Cuatro caminos" title="Las alternativas que exploramos contigo" />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {paths.map(({ icon: I, n, t, d }) => (
                <article key={n} className="flex flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_var(--deep)]">
                  <div className="flex items-center justify-between">
                    <I className="h-7 w-7 text-primary" strokeWidth={1.4} />
                    <span className="font-serif text-sm text-muted-foreground">{n}</span>
                  </div>
                  <h3 className="mt-8 text-xl leading-snug">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="bg-secondary/60 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead kicker="Cómo funciona" title="Te acompañamos a descubrir qué se puede adaptar a ti, mediante un proceso de descubrimiento" />
            <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map(({ icon: I, t, d }, i) => (
                <li key={t} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background">
                      <I className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </span>
                    <span className="font-serif text-sm text-muted-foreground">Paso {i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Enfoque */}
        <section id="enfoque" className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Nuestro enfoque</p>
              <h2 className="mt-4 text-3xl font-light leading-tight md:text-5xl">No es coaching. No prometemos empleo.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Hacemos investigación objetiva y personalizada sobre alternativas profesionales reales. Te damos información contrastada y comparada; la decisión siempre es tuya.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { icon: Search, t: "Investigación objetiva", d: "Datos de salarios, requisitos, formación e inversión, siempre con sus fuentes." },
                { icon: UserCheck, t: "Personalizada", d: "Partimos de tu experiencia, tu situación y lo que de verdad te importa." },
                { icon: Scale, t: "Tú decides", d: "No te empujamos hacia ningún camino: comparamos para que elijas con perspectiva." },
              ].map(({ icon: I, t, d }) => (
                <div key={t} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                  <I className="mt-1 h-6 w-6 shrink-0 text-primary" strokeWidth={1.4} />
                  <div>
                    <h3 className="text-lg">{t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precio */}
        <section id="precio" className="px-5 pb-20 md:px-8 md:pb-28">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-forest px-6 py-14 text-center text-forest-foreground md:px-14 md:py-20">
            <svg aria-hidden="true" viewBox="0 0 100 140" fill="none" className="pointer-events-none absolute -left-8 -top-6 h-40 w-28 text-gold/25 md:h-64 md:w-44">
              <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M50 138C47 104 47 66 54 8" />
                <ellipse cx="34" cy="106" rx="15" ry="6" transform="rotate(-30 34 106)" />
                <ellipse cx="68" cy="92" rx="15" ry="6" transform="rotate(28 68 92)" />
                <ellipse cx="33" cy="76" rx="14" ry="5.5" transform="rotate(-30 33 76)" />
                <ellipse cx="69" cy="60" rx="13" ry="5" transform="rotate(28 69 60)" />
                <ellipse cx="36" cy="44" rx="12" ry="4.5" transform="rotate(-30 36 44)" />
                <ellipse cx="70" cy="30" rx="11" ry="4" transform="rotate(28 70 30)" />
              </g>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 100 140" fill="none" className="pointer-events-none absolute -bottom-6 -right-8 h-40 w-28 rotate-180 text-gold/25 md:h-64 md:w-44">
              <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M50 138C47 104 47 66 54 8" />
                <ellipse cx="34" cy="106" rx="15" ry="6" transform="rotate(-30 34 106)" />
                <ellipse cx="68" cy="92" rx="15" ry="6" transform="rotate(28 68 92)" />
                <ellipse cx="33" cy="76" rx="14" ry="5.5" transform="rotate(-30 33 76)" />
                <ellipse cx="69" cy="60" rx="13" ry="5" transform="rotate(28 69 60)" />
                <ellipse cx="36" cy="44" rx="12" ry="4.5" transform="rotate(-30 36 44)" />
                <ellipse cx="70" cy="30" rx="11" ry="4" transform="rotate(28 70 30)" />
              </g>
            </svg>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forest-soft/60 via-transparent to-forest/70" />
            <div className="relative">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold md:text-xs">Oferta especial de octubre de 2026</p>
              <div className="mt-12 flex items-center justify-center gap-3 sm:gap-6">
                <span aria-hidden="true" className="font-serif text-2xl font-light leading-none text-forest-foreground/55 line-through sm:text-4xl md:text-5xl">79 €</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-gold sm:h-5 sm:w-5" strokeWidth={1.6} />
                <span className="blob-cream relative bg-background px-7 py-6 shadow-plump sm:px-12 sm:py-9 md:px-16 md:py-12">
                  <span className="font-serif text-5xl font-light leading-none text-forest sm:text-7xl md:text-8xl">49 €</span>
                  <span className="absolute left-1/2 top-full mt-5 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-gold md:text-[0.7rem]">
                    Durante este mes
                  </span>
                </span>
              </div>
              <p className="mx-auto mt-16 max-w-md text-lg leading-relaxed text-forest-foreground/85">
                Una oportunidad para dar el siguiente paso con información y perspectiva.
              </p>
              <a href={BOOK} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-background px-8 py-5 text-base font-semibold text-forest transition hover:bg-secondary md:px-10 md:py-6">
                Reserva tu primera conversación gratuita <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </a>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="border-t border-border px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light md:text-4xl">¿Hablamos?</h2>
            <p className="mt-4 text-muted-foreground">Escríbenos para reservar tu primera conversación o resolver cualquier duda.</p>
            <a href={`mailto:${EMAIL}`} className="mt-8 inline-flex items-center gap-3 font-serif text-xl text-primary underline-offset-4 hover:underline md:text-2xl">
              <Mail className="h-5 w-5" strokeWidth={1.5} /> {EMAIL}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <span className="font-serif tracking-[0.18em] text-deep">RUMBOAMPLIO</span>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">{EMAIL}</a>
          <span>© {new Date().getFullYear()} RUMBOAMPLIO</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.25em] text-primary">{kicker}</p>
      <h2 className="mt-4 text-3xl font-light leading-tight md:text-5xl">{title}</h2>
    </div>
  );
}