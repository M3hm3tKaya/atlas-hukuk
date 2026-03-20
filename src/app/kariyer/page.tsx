import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import Accordion from "@/components/Accordion";
import { careerValues, openPositions } from "@/lib/data";
import CareerForm from "./CareerForm";

export const metadata: Metadata = {
  title: "Kariyer | Atlas Hukuk",
  description: "Atlas Hukuk'ta kariyer fırsatları. Deneyimli ve genç avukatları ekibimize bekliyoruz.",
};

export default function KariyerPage() {
  return (
    <>
      <PageHero
        title="Kariyer"
        subtitle="Bize Katılın"
        description="Atlas Hukuk'ta hukuk mesleğinin en iyi yönlerini keşfedecek, kendinizi geliştirecek ve başarılı bir kariyer inşa edeceksiniz."
      />

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold text-sm tracking-[0.2em] uppercase text-center mb-4">
              Çalışma Kültürümüz
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy text-center mb-4">
              Neden Atlas Hukuk?
            </h2>
            <div className="gold-line mx-auto mb-16" />
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {careerValues.map((value, index) => (
              <AnimateIn key={value.title} delay={index * 0.15}>
                <div className="bg-light rounded-lg p-6 sm:p-8 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <span className="font-serif text-xl text-gold font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold text-sm tracking-[0.2em] uppercase text-center mb-4">
              Açık Pozisyonlar
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy text-center mb-4">
              Mevcut Fırsatlar
            </h2>
            <div className="gold-line mx-auto mb-16" />
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <Accordion items={openPositions} />
          </AnimateIn>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold text-sm tracking-[0.2em] uppercase text-center mb-4">
              Başvuru
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy text-center mb-4">
              Başvuru Formu
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-steel text-center mb-12 max-w-lg mx-auto">
              İlgilendiğiniz pozisyon için aşağıdaki formu doldurarak başvurunuzu iletebilirsiniz.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <CareerForm />
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
