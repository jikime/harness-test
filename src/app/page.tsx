import { ThemeToggle } from "@/components/theme-toggle";
import { FeatureCard } from "@/components/feature-card";

const features = [
  {
    title: "Next.js 16 App Router",
    description:
      "Built with the latest Next.js App Router for efficient server-side rendering and seamless navigation.",
    badge: "Framework",
    badgeVariant: "default" as const,
    buttonLabel: "Explore",
  },
  {
    title: "Tailwind CSS 4",
    description:
      "Styled with Tailwind CSS 4 for rapid UI development with utility-first CSS classes.",
    badge: "Styling",
    badgeVariant: "secondary" as const,
    buttonLabel: "Get Started",
  },
  {
    title: "shadcn/ui Components",
    description:
      "Beautiful and accessible UI components built with Radix UI and Tailwind CSS.",
    badge: "UI Library",
    badgeVariant: "outline" as const,
    buttonLabel: "View Components",
  },
  {
    title: "TypeScript Support",
    description:
      "Full TypeScript support for type safety and improved developer experience.",
    badge: "Language",
    badgeVariant: "default" as const,
    buttonLabel: "Learn More",
  },
  {
    title: "Dark Mode",
    description:
      "Built-in dark mode support with next-themes for a comfortable viewing experience.",
    badge: "Feature",
    badgeVariant: "secondary" as const,
    buttonLabel: "Toggle Theme",
  },
  {
    title: "Responsive Design",
    description:
      "Fully responsive layout that works seamlessly on mobile and desktop devices.",
    badge: "Design",
    badgeVariant: "outline" as const,
    buttonLabel: "View Demo",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Next.js App</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Build with{" "}
            <span className="text-primary">Next.js 16</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            A modern web application built with Next.js 16, Tailwind CSS 4, and
            shadcn/ui. Featuring dark mode, responsive design, and beautiful
            components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-11 px-8 font-medium transition-colors hover:bg-primary/90">
              Get Started
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-input bg-background h-11 px-8 font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Features</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the powerful features and technologies used in this
            application.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
              badgeVariant={feature.badgeVariant}
              buttonLabel={feature.buttonLabel}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground text-sm">
          <p>Built with Next.js 16, Tailwind CSS 4, and shadcn/ui</p>
        </div>
      </footer>
    </div>
  );
}
