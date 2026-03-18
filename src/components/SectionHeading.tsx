import AnimateIn from "./AnimateIn";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <AnimateIn>
          <p
            className={`text-sm font-medium tracking-[0.2em] uppercase mb-4 ${
              light ? "text-gold-light" : "text-gold"
            }`}
          >
            {subtitle}
          </p>
        </AnimateIn>
      )}
      <AnimateIn delay={0.1}>
        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </AnimateIn>
      <AnimateIn delay={0.2}>
        <div
          className={`gold-line ${centered ? "mx-auto" : ""} mb-6`}
        />
      </AnimateIn>
      {description && (
        <AnimateIn delay={0.3}>
          <p
            className={`max-w-2xl text-base md:text-lg leading-relaxed ${
              centered ? "mx-auto" : ""
            } ${light ? "text-steel-light" : "text-steel"}`}
          >
            {description}
          </p>
        </AnimateIn>
      )}
    </div>
  );
}
