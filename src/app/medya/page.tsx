import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { mediaItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Medya | Atlas Hukuk",
  description: "Atlas Hukuk'un basın yansımaları ve medya görünürlüğü.",
};

export default function MedyaPage() {
  return (
    <>
      <PageHero
        title="Medya"
        subtitle="Basın Yansımaları"
        description="Atlas Hukuk'un ulusal medyada yer alan basın haberleri ve röportajları."
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mediaItems.map((item, index) => (
              <AnimateIn key={item.id} delay={index * 0.1}>
                <article className="bg-light rounded-lg overflow-hidden h-full flex flex-col group hover:shadow-md transition-shadow duration-500">
                  {/* Outlet banner */}
                  <div className="bg-navy px-4 sm:px-6 py-3 sm:py-4">
                    <p className="text-gold text-xs font-medium tracking-wider uppercase">
                      {item.outlet}
                    </p>
                    <p className="text-steel-light text-xs mt-1">
                      {item.date}
                    </p>
                  </div>

                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h2 className="font-serif text-lg sm:text-xl font-semibold text-navy mb-3 group-hover:text-gold-dark transition-colors duration-300">
                      {item.title}
                    </h2>
                    <p className="text-steel text-sm leading-relaxed flex-1">
                      {item.excerpt}
                    </p>
                    <div className="mt-6 pt-4 border-t border-navy/10">
                      <span className="text-gold text-sm font-medium cursor-pointer hover:text-gold-dark transition-colors duration-300 flex items-center min-h-[44px] sm:min-h-0">
                        Devamını Oku &rarr;
                      </span>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-12 sm:py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-serif text-xl md:text-3xl font-semibold text-navy mb-4">
              Basın İletişim
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-steel text-base mb-4">
              Röportaj ve basın talepleri için iletişim departmanımıza ulaşabilirsiniz.
            </p>
            <p className="text-navy font-medium">
              basin@atlashukuk.com.tr
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
