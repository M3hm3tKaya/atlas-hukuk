import AnimateIn from "./AnimateIn";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative bg-navy pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <AnimateIn delay={0}>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              {subtitle}
            </p>
          </AnimateIn>
        )}
        <AnimateIn delay={0.15}>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <div className="gold-line mx-auto mb-6" />
        </AnimateIn>
        {description && (
          <AnimateIn delay={0.4}>
            <p className="max-w-2xl mx-auto text-steel-light text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
