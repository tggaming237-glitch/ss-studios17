import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "framer-motion";
import heroVideo from "../assets/hero-gaming-montage.mp4.asset.json";
import { thumbnails } from "../lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SS Studios | High-CTR YouTube Thumbnails" },
      {
        name: "description",
        content:
          "Professional AI-assisted YouTube thumbnails for Gaming, Tech, Education and Finance creators.",
      },
      { property: "og:title", content: "SS Studios | High-CTR YouTube Thumbnails" },
      {
        property: "og:description",
        content:
          "Professional AI-assisted YouTube thumbnails for Gaming, Tech, Education and Finance creators.",
      },
    ],
  }),
  component: HomePage,
});

const featuredItems = thumbnails.slice(0, 4);

const highlights = [
  { value: 50, suffix: "+", title: "Creators Served", description: "From gaming to finance channels." },
  { value: 100, suffix: "%", title: "AI Assisted Workflow", description: "Faster turnarounds without losing quality." },
  { value: 24, suffix: "h", title: "Quick Delivery", description: "Most thumbnails delivered within a day." },
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return controls.stop;
  }, [inView, to, mv]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function Particles() {
  // Deterministic pseudo-random positions to avoid SSR hydration mismatch
  const particles = Array.from({ length: 22 }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    const rand2 = ((i * 2749 + 12345) % 100) / 100;
    return {
      left: `${(rand * 100).toFixed(2)}%`,
      top: `${(rand2 * 100).toFixed(2)}%`,
      size: 2 + (i % 4),
      duration: 8 + (i % 6),
      delay: (i % 10) * 0.4,
      color: i % 2 === 0 ? "var(--primary)" : "var(--secondary, #3b82f6)",
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 600], [0, 80]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <div className="flex flex-col scroll-smooth">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        {/* Video background with parallax */}
        <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }}>
          <video
            className="h-full w-full object-cover opacity-20"
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background" />

        {/* Animated purple + blue gradient glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          animate={{ opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute left-[15%] top-[10%] size-[380px] rounded-full bg-primary/30 blur-[120px] sm:size-[520px]"
            animate={{ x: [0, 40, -20, 0], y: [0, 30, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[10%] right-[10%] size-[380px] rounded-full bg-secondary/25 blur-[120px] sm:size-[520px]"
            animate={{ x: [0, -30, 20, 0], y: [0, -25, 15, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Particles */}
        <Particles />

        {/* Content */}
        <motion.div
          className="relative z-10 mx-auto max-w-3xl text-center"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs"
          >
            Boost Your CTR
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            High-CTR <span className="text-gradient">YouTube</span>
            <br />
            Thumbnails
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-lg text-base text-muted-foreground sm:text-lg"
          >
            Professional AI-assisted thumbnails for Gaming, Tech, Education and Finance creators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-[0_0_30px_rgba(139,92,246,0.55)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(139,92,246,0.85)] sm:w-auto"
              >
                <motion.span
                  aria-hidden
                  className="absolute inset-0 -z-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%]"
                  animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">Get Started</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                to="/portfolio"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          Scroll
        </motion.div>
      </section>

      {/* Featured preview */}
      <FeaturedSection />

      {/* Highlights with count-up */}
      <HighlightsSection />
    </div>
  );
}

function FeaturedSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Featured Work</h2>
            <p className="mt-2 text-sm text-muted-foreground">A few thumbnails that drove real results.</p>
          </div>
          <Link to="/portfolio" className="hidden text-sm font-semibold text-secondary hover:underline sm:block">
            See All
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: "0 20px 60px -20px rgba(139,92,246,0.55)" }}
              className="group overflow-hidden rounded-2xl bg-card-bg ring-1 ring-white/5 transition-shadow"
            >
              <div className="aspect-video overflow-hidden p-2">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.02] text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Upload Thumbnail
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{item.image ? item.title : "Coming Soon"}</span>
                  <span className="rounded bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/portfolio" className="text-sm font-semibold text-secondary hover:underline">
            See All Work
          </Link>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-white/5 bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px -20px rgba(59,130,246,0.5)" }}
              className="rounded-2xl border border-white/5 bg-background p-6 text-center transition-shadow"
            >
              <div className="mb-3 font-display text-3xl font-bold text-primary sm:text-4xl">
                <CountUp to={h.value} suffix={h.suffix} />
              </div>
              <h3 className="font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
