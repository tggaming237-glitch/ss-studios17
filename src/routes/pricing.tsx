import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | SS Studios" },
      {
        name: "description",
        content:
          "Affordable YouTube thumbnail packages: Basic ₹99, Standard ₹249, Premium ₹499.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Pricing
            </span>
            <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Simple Pricing
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Choose a plan that fits your content schedule. All plans include
              high-resolution, click-optimized designs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border bg-background p-6 ${
                  plan.popular
                    ? "border-primary/50 ring-1 ring-primary/20"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-primary-foreground">
                    MOST POPULAR
                  </span>
                )}

                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {plan.tagline}
                    </p>
                  </div>
                  <div
                    className={`size-2 rounded-full ${
                      plan.popular ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                </div>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold">
                    ₹{plan.price}
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-auto block rounded-xl px-4 py-3 text-center text-sm font-bold transition-colors ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-white/10 bg-white/5 text-foreground hover:bg-white/10"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Need a custom bulk plan for your channel?{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Contact us
            </Link>{" "}
            for a quote.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}

const plans = [
  {
    name: "Basic",
    tagline: "Perfect for one-off videos.",
    price: 99,
    popular: false,
    features: [
      "1 Custom Thumbnail",
      "24h Delivery",
      "1 Revision",
      "High-Resolution JPG",
    ],
  },
  {
    name: "Standard",
    tagline: "Best value for active creators.",
    price: 249,
    popular: true,
    features: [
      "3 Custom Thumbnails",
      "Source Files Included",
      "3 Revisions",
      "48h Delivery",
      "A/B Variations",
    ],
  },
  {
    name: "Premium",
    tagline: "Full channel growth package.",
    price: 499,
    popular: false,
    features: [
      "5 Custom Thumbnails",
      "Priority Support",
      "Unlimited Revisions",
      "24h Delivery",
      "Brand Style Guide",
    ],
  },
];
