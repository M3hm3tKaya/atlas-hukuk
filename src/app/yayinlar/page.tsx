import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { publications } from "@/lib/data";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Yayinlar | Atlas Hukuk",
  description: "Atlas Hukuk avukatlarimizin hukuki makaleleri, analizleri ve degerlendirmeleri.",
};

export default function YayinlarPage() {
  return (
    <>
      <PageHero
        title="Yayinlar"
        subtitle="Makalelerimiz"
        description="Avukatlarimizin kaleme aldigi guncel hukuki analiz ve degerlendirmeler."
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <AnimateIn key={pub.id} delay={index * 0.08}>
                <article className="bg-light rounded-lg p-8 h-full flex flex-col group hover:shadow-md transition-shadow duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                      {pub.category}
                    </span>
                    <span className="text-xs text-steel">{pub.date}</span>
                  </div>

                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-navy mb-3 group-hover:text-gold-dark transition-colors duration-300">
                    {pub.title}
                  </h2>

                  <p className="text-steel text-sm leading-relaxed mb-6 flex-1">
                    {pub.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-navy/10">
                    <p className="text-sm font-medium text-navy">
                      {pub.author}
                    </p>
                    <span className="text-gold group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRightIcon size={18} />
                    </span>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
