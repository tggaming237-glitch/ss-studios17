import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "../components/AnimatedSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | SS Studios" },
      {
        name: "description",
        content:
          "SS Studios creates professional YouTube thumbnails that help creators increase clicks and grow their channels.",
      },
      {
        property: "og:title",
        content: "About | SS Studios",
      },
      {
        property: "og:description",
        content:
          "SS Studios creates professional YouTube thumbnails that help creators increase clicks and grow their channels.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            About
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            About SS Studios
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I create professional YouTube thumbnails that help creators increase
              clicks and grow their channels. Every design is built around
              proven visual psychology: high contrast, readable faces, clear
              focal points, and colors that pop on any screen.
            </p>
            <p>
              I specialize in Gaming, Tech, AI, Education, and Finance
              content. By combining traditional design craft with AI-assisted
              workflows, I deliver polished thumbnails faster without
              sacrificing the human touch that makes viewers click.
            </p>
            <p>
              Whether you need a single thumbnail for a flagship video or a
              consistent batch for your content calendar, I treat every
              project like it is the one that can change your channel.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {aboutCards.map((card, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-card-bg p-6"
              >
                <div className="mb-3 text-2xl font-bold text-primary">
                  {card.title}
                </div>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

const aboutCards = [
  {
    title: "Click Psychology",
    description:
      "Thumbnails are crafted to trigger curiosity, urgency, and recognition in the first split second.",
  },
  {
    title: "Niche Expertise",
    description:
      "Deep understanding of what works in Gaming, Tech, AI, Education, and Finance thumbnails.",
  },
];
