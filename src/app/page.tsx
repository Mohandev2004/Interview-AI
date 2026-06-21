import { cookies } from "next/headers";
import { TOKEN_COOKIE_NAME } from "@/lib/auth/jwt";
import AppHeader from "@/components/layout/app-header";
import CtaSection from "@/components/landing/cta-section";
import FeatureTilesSection from "@/components/landing/feature-tiles-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import LandingHeroSection from "@/components/landing/landing-hero-section";
import SiteFooter from "@/components/landing/site-footer";
import TechStackSection from "@/components/landing/tech-stack-section";
import { Separator } from "@/components/ui/separator";

export default async function HomePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_COOKIE_NAME)?.value;
  const startHref = token ? "/dashboard" : "/signup";

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,hsl(0_0%_100%/0.06),transparent_70%)]" />

      <AppHeader variant="marketing" />

      <main className="relative mx-auto max-w-6xl px-4 md:px-6">
        <LandingHeroSection startHref={startHref} />

        <Separator />

        <FeatureTilesSection />

        <Separator />

        <HowItWorksSection />

        <Separator />

        <TechStackSection />

        <Separator />

        <Separator />

        <CtaSection startHref={startHref} />
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Interview AI",
            "operatingSystem": "All",
            "applicationCategory": "EducationalApplication",
            "description": "Ace your next job interview with Interview AI. Practice coding and behavioral mock interviews with realistic real-time AI feedback and detailed performance analytics.",
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "USD"
            },
            "featureList": [
              "AI-powered coding mock interviews",
              "Behavioral question prep with instant AI feedback",
              "Detailed speech-to-text response analysis",
              "Real-time interview scoring and dashboard tracking"
            ]
          })
        }}
      />
    </div>
  );
}
