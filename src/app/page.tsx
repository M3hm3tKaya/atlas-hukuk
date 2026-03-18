import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import { getExpertiseIcon } from "@/components/Icons";
import {
  expertiseAreas,
  stats,
  coreValues,
  caseStudies,
  testimonials,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-light opacity-80" />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn delay={0.2} duration={1}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-8">
              Istanbul Levent &mdash; 2001&apos;den Bu Yana
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4} duration={1}>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wider mb-6">
              ATLAS
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.6} duration={1}>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-8" />
          </AnimateIn>

          <AnimateIn delay={0.8} duration={1}>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white/90 font-light mb-12">
              Hakkinizi Savunuyoruz
            </p>
          </AnimateIn>

          <AnimateIn delay={1} duration={1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors duration-300"
              >
                Ucretsiz Danismanlik
              </Link>
              <Link
                href="/uzmanlik"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Uzmanlik Alanlarimiz
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <AnimateIn delay={1.2} duration={1}>
            <div className="w-px h-16 bg-gradient-to-b from-gold/0 via-gold to-gold/0" />
          </AnimateIn>
        </div>
      </section>

      {/* ===== 6 UZMANLIK KARTI ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Uzmanlik Alanlari"
            title="Hukuki Hizmetlerimiz"
            description="Genis uzmanlik yelpazemizle her turlu hukuki ihtiyacinizda yaninizdayiz."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <AnimateIn key={area.id} delay={index * 0.1} className="h-full">
                <div className="h-full bg-navy rounded-lg p-8 group hover:bg-navy-light transition-colors duration-500">
                  <div className="text-gold mb-6">
                    {getExpertiseIcon(area.icon, { size: 32 })}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-steel-light text-sm leading-relaxed">
                    {area.shortDesc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RAKAMLAR ===== */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimateIn key={stat.label} delay={index * 0.15}>
                <div className="text-center">
                  <span className="font-serif text-4xl md:text-5xl font-bold text-navy block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-steel text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3 DEGER ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Degerlerimiz"
            title="Neden Atlas Hukuk?"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <AnimateIn key={value.title} delay={index * 0.15}>
                <div className="text-center px-6">
                  <div className="w-16 h-px bg-gold mx-auto mb-6" />
                  <h3 className="font-serif text-2xl font-semibold text-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-steel text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3 CASE STUDY ===== */}
      <section className="section-padding bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Basari Hikayeleri"
            title="Secilmis Davalarimiz"
            description="Muvekkillerimiz icin elde ettigimiz somut sonuclardan bazilari."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((cs, index) => (
              <AnimateIn key={cs.id} delay={index * 0.15}>
                <div className="bg-navy-light rounded-lg p-8 border border-white/5 hover:border-gold/20 transition-colors duration-500">
                  <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {cs.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-white mt-4 mb-3">
                    {cs.title}
                  </h3>
                  <p className="text-steel-light text-sm leading-relaxed mb-4">
                    {cs.problem}
                  </p>
                  <p className="text-gold text-sm font-medium">
                    {cs.result}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/basari-hikayeleri"
                className="inline-flex items-center px-6 py-3 border border-gold/30 text-gold font-medium rounded hover:bg-gold hover:text-navy transition-colors duration-300"
              >
                Tum Basari Hikayeleri
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== YORUMLAR ===== */}
      <section className="section-padding bg-light-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Muvekkillerimiz"
            title="Guven ve Memnuniyet"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <AnimateIn key={item.name} delay={index * 0.15}>
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="text-gold text-4xl font-serif mb-4">
                    &ldquo;
                  </div>
                  <p className="text-steel text-base leading-relaxed mb-6">
                    {item.text}
                  </p>
                  <div>
                    <p className="font-semibold text-navy text-sm">
                      {item.name}
                    </p>
                    <p className="text-steel text-xs">{item.company}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Hukuki Sorununuz Icin Ilk Adimi Atin
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-steel-light text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Uzman ekibimizle ucretsiz on gorusme icin hemen iletisime gecin.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-10 py-4 bg-gold text-navy font-semibold text-lg rounded hover:bg-gold-light transition-colors duration-300"
            >
              Ucretsiz Danismanlik
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
