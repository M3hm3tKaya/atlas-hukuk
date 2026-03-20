import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { siteConfig } from "@/lib/data";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/Icons";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Atlas Hukuk",
  description: "Atlas Hukuk ile iletişime geçin. Ücretsiz ön görüşme için randevu alın.",
};

export default function IletisimPage() {
  return (
    <>
      <PageHero
        title="İletişim"
        subtitle="Bize Ulaşın"
        description="Hukuki danışmanlık ve randevu talepleriniz için bizimle iletişime geçin."
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Left - Contact Info + Map placeholder */}
            <div>
              <AnimateIn>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-4">
                  Ofisimiz
                </h2>
                <div className="gold-line mb-8" />
              </AnimateIn>

              {/* Map Placeholder */}
              <AnimateIn delay={0.1}>
                <div className="aspect-[4/3] bg-light rounded-lg mb-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-navy/10" />
                  <div className="relative text-center">
                    <MapPinIcon className="text-gold/40 mx-auto mb-3" size={48} />
                    <p className="font-serif text-navy/40 text-lg">
                      Harita Görünümü
                    </p>
                    <p className="text-navy/30 text-sm mt-1">
                      Levent, Beşiktaş, İstanbul
                    </p>
                  </div>
                </div>
              </AnimateIn>

              {/* Contact Details */}
              <AnimateIn delay={0.2}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPinIcon className="text-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy mb-1">
                        Adres
                      </h3>
                      <p className="text-steel text-sm">{siteConfig.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-gold/10 flex items-center justify-center shrink-0">
                      <PhoneIcon className="text-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy mb-1">
                        Telefon
                      </h3>
                      <p className="text-steel text-sm">{siteConfig.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-gold/10 flex items-center justify-center shrink-0">
                      <MailIcon className="text-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy mb-1">
                        E-posta
                      </h3>
                      <p className="text-steel text-sm">{siteConfig.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-gold/10 flex items-center justify-center shrink-0">
                      <ClockIcon className="text-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy mb-1">
                        Çalışma Saatleri
                      </h3>
                      <p className="text-steel text-sm">{siteConfig.workHours}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Right - Appointment Form */}
            <div>
              <AnimateIn direction="right">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-4">
                  Randevu Formu
                </h2>
                <div className="gold-line mb-8" />
                <p className="text-steel text-sm mb-8">
                  Aşağıdaki formu doldurarak ücretsiz ön görüşme için randevu talep edebilirsiniz.
                </p>
              </AnimateIn>

              <AnimateIn direction="right" delay={0.15}>
                <ContactForm />
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
