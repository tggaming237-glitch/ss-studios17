import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { thumbnails, categories, type Category } from "../lib/portfolio-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | SS Thumbnail Studio" },
      {
        name: "description",
        content:
          "Browse high-CTR YouTube thumbnails for Gaming, Tech, AI, and Education creators.",
      },
      {
        property: "og:title",
        content: "Portfolio | SS Thumbnail Studio",
      },
      {
        property: "og:description",
        content:
          "Browse high-CTR YouTube thumbnails for Gaming, Tech, AI, and Education creators.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? thumbnails
      : thumbnails.filter((t) => t.category === active);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="mb-6 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Portfolio
            </span>
            <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Featured Work
            </h1>
            <p className="mt-3 text-muted-foreground">
              Thumbnails designed to stop the scroll and drive clicks across every
              major niche.
            </p>
          </div>
        </AnimatedSection>

        {/* Category filter */}
        <AnimatedSection delay={100}>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 75}>
              <div className="group overflow-hidden rounded-2xl bg-card-bg ring-1 ring-white/5 card-hover">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                    CTR {item.ctr}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="min-w-0 truncate text-sm font-semibold">
                      {item.title}
                    </span>
                    <span className="shrink-0 rounded bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No thumbnails in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
