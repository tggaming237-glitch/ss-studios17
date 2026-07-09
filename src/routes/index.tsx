import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedSection } from "../components/AnimatedSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SS Thumbnail Studio | High-CTR YouTube Thumbnails" },
      {
        name: "description",
        content:
          "Professional AI-assisted YouTube thumbnails for Gaming, Tech, Education and Finance creators.",
      },
      {
        property: "og:title",
        content: "SS Thumbnail Studio | High-CTR YouTube Thumbnails",
      },
      {
        property: "og:description",
        content:
          "Professional AI-assisted YouTube thumbnails for Gaming, Tech, Education and Finance creators.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 size-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-secondary/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
              Boost Your CTR
            </span>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              High-CTR{" "}
              <span className="text-gradient">YouTube</span>
              <br />
              Thumbnails
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
              Professional AI-assisted thumbnails for Gaming, Tech, Education and
              Finance creators.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 active:scale-95 sm:w-auto animate-pulse-glow"
              >
                Order Now
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-white/10 sm:w-auto"
              >
                View Portfolio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured preview */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  Featured Work
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  A few thumbnails that drove real results.
                </p>
              </div>
              <Link
                to="/portfolio"
                className="hidden text-sm font-semibold text-secondary hover:underline sm:block"
              >
                See All
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 100}>
                <div className="group overflow-hidden rounded-2xl bg-card-bg ring-1 ring-white/5 card-hover">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{item.title}</span>
                      <span className="rounded bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/portfolio"
              className="text-sm font-semibold text-secondary hover:underline"
            >
              See All Work
            </Link>
          </div>
        </div>
      </section>

      {/* Quick pitch */}
      <section className="border-t border-white/5 bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="grid gap-8 sm:grid-cols-3">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/5 bg-background p-6 text-center"
                >
                  <div className="mb-3 text-2xl font-bold text-primary">
                    {h.value}
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {h.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

import { thumbnails } from "../lib/portfolio-data";

const featuredItems = thumbnails.slice(0, 4);

const highlights = [
  {
    value: "50+",
    title: "Creators Served",
    description: "From gaming to finance channels.",
  },
  {
    value: "AI+",
    title: "AI Assisted Workflow",
    description: "Faster turnarounds without losing quality.",
  },
  {
    value: "24h",
    title: "Quick Delivery",
    description: "Most thumbnails delivered within a day.",
  },
];
