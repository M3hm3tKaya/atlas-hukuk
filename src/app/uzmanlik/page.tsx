import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { getExpertiseIcon } from "@/components/Icons";
import { expertiseAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Uzmanlık Alanları | Atlas Hukuk",
  description: "Ticaret, iş, gayrimenkul, aile, ceza ve fikri mülkiyet hukuku alanlarında uzman kadromuzla yanınızdayız.",
};

export default function UzmanlikPage() {
  return (
    <>
      <PageHero
        title="Uzmanlık Alanları"
        subtitle="Hizmetlerimiz"
        description="Her biri kendi alanında uzman avukatlarımızla hukuki ihtiyaçlarınıza kapsamlı çözümler sunuyoruz."
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {expertiseAreas.map((area, index) => {
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={area.id}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content side */}
                  <div className="flex-1">
                    <AnimateIn direction={isReversed ? "right" : "left"}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-gold">
                          {getExpertiseIcon(area.icon, { size: 36 })}
                        </div>
                        <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full uppercase tracking-wider">
                          {area.id}
                        </span>
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy mb-6">
                        {area.title}
                      </h2>
                      <div className="gold-line mb-6" />
                      <p className="text-steel text-base leading-relaxed mb-8">
                        {area.fullDesc}
                      </p>
                      <ul className="space-y-3">
                        {area.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-navy text-sm font-medium"
                          >
                            <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </AnimateIn>
                  </div>

                  {/* Visual placeholder side */}
                  <div className="flex-1 w-full">
                    <AnimateIn
                      direction={isReversed ? "left" : "right"}
                      delay={0.15}
                    >
                      <div className="aspect-[4/3] bg-light rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-navy/10" />
                        <div className="relative text-center">
                          <div className="text-gold/30 mb-4">
                            {getExpertiseIcon(area.icon, { size: 80 })}
                          </div>
                          <p className="font-serif text-navy/40 text-lg">
                            {area.title}
                          </p>
                        </div>
                      </div>
                    </AnimateIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
              Hukuki Danışmanlık İçin Bize Ulaşın
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-steel-light text-lg mb-10">
              Uzmanlık alanınıza uygun avukatımızla ücretsiz ön görüşme yapın.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors duration-300"
            >
              İletişime Geçin
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
