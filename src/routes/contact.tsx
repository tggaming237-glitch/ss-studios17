import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, MessageCircle } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | SS Studios" },
      {
        name: "description",
        content:
          "Get in touch with SS Studios via Instagram, Email, or WhatsApp to order your custom YouTube thumbnails.",
      },
      {
        property: "og:title",
        content: "Contact | SS Studios",
      },
      {
        property: "og:description",
        content:
          "Get in touch with SS Studios via Instagram, Email, or WhatsApp to order your custom YouTube thumbnails.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Contact
            </span>
            <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Ready to grow?
            </h1>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Reach out and let us create thumbnails that stop the scroll and
              get your videos clicked.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Social Media
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <a
              href="https://www.instagram.com/ss.studios17"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
            >
              <Instagram className="size-5 text-pink-500" />
              <span className="text-sm font-semibold">@ss.studios17</span>
            </a>

            <a
              href="mailto:hello@ssstudios.com"
              className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
            >
              <Mail className="size-5 text-secondary" />
              <span className="text-sm font-semibold">Email</span>
            </a>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-xl bg-[#25D366] p-4 text-black transition-transform hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="size-5" />
              <span className="text-sm font-bold">WhatsApp</span>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-card-bg p-6 text-center">
            <h2 className="font-display text-lg font-semibold">
              Quick Response Guarantee
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              I usually reply within a few hours on WhatsApp and Instagram.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
