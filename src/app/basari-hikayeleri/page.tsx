import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri | Atlas Hukuk",
  description: "Müvekkillerimiz için elde ettiğimiz başarılı sonuçlar ve emsal davalar.",
};

export default function BasariHikayeleriPage() {
  return (
    <>
      <PageHero
        title="Başarı Hikayeleri"
        subtitle="Davalarımız"
        description="Her dava, müvekkillerimiz için elde ettiğimiz başarının ve deneyimimizin bir yansımasıdır."
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, index) => (
              <AnimateIn key={cs.id} delay={index * 0.1}>
                <article className="bg-light rounded-lg p-5 sm:p-8 md:p-10 border-l-4 border-gold">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                      {cs.category}
                    </span>
                    <span className="text-xs text-steel">Dava #{cs.id}</span>
                  </div>

                  <h2 className="font-serif text-xl md:text-3xl font-semibold text-navy mb-4 sm:mb-6">
                    {cs.title}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">
                        Sorun
                      </h3>
                      <p className="text-steel text-base leading-relaxed">
                        {cs.problem}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">
                        Çözüm
                      </h3>
                      <p className="text-steel text-base leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-navy/10">
                      <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">
                        Sonuç
                      </h3>
                      <p className="text-navy text-base font-medium leading-relaxed">
                        {cs.result}
                      </p>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
              Sizin İçin de Başarı Hikayesi Yazalım
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-steel-light text-base sm:text-lg mb-8 sm:mb-10 px-4 sm:px-0">
              Hukuki sorununuzu dinlemek ve en uygun stratejiyi belirlemek için buradayız.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-6 sm:px-8 py-4 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors duration-300 min-h-[48px]"
            >
              Hemen İletişime Geçin
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
