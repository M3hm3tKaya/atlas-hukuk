import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ekibimiz | Atlas Hukuk",
  description: "Atlas Hukuk'un deneyimli avukat kadrosuyla tanışın. 12 uzman avukat, 25 yıllık deneyim.",
};

export default function EkipPage() {
  return (
    <>
      <PageHero
        title="Ekibimiz"
        subtitle="Avukatlarımız"
        description="Deneyim, uzmanlık ve tutku ile çalışarak müvekkillerimizin haklarını en etkili şekilde savunuyoruz."
      />

      {/* Founders - Large Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold text-sm tracking-[0.2em] uppercase text-center mb-4">
              Kurucular
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy text-center mb-4">
              Kurucu Ortaklar
            </h2>
            <div className="gold-line mx-auto mb-10 sm:mb-16" />
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {teamMembers.founders.map((member, index) => (
              <AnimateIn key={member.name} delay={index * 0.15}>
                <div className="bg-light rounded-lg overflow-hidden">
                  {/* Photo placeholder */}
                  <div className="aspect-[3/2] bg-gradient-to-br from-navy/10 to-navy/20 flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-navy/10 flex items-center justify-center">
                      <span className="font-serif text-2xl sm:text-3xl text-navy/30 font-bold">
                        {member.name.split(" ").pop()?.[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-8">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold font-medium text-sm mb-4">
                      {member.title}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-xs bg-navy/5 text-navy px-3 py-1 rounded-full">
                        {member.specialty}
                      </span>
                      <span className="text-xs bg-gold/10 text-gold-dark px-3 py-1 rounded-full">
                        {member.experience}
                      </span>
                    </div>
                    <p className="text-xs text-steel mb-4">
                      {member.education}
                    </p>
                    <p className="text-steel text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Members - Medium Cards 2x2 */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold text-sm tracking-[0.2em] uppercase text-center mb-4">
              Kıdemli Ekip
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy text-center mb-4">
              Kıdemli Avukatlarımız
            </h2>
            <div className="gold-line mx-auto mb-10 sm:mb-16" />
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {teamMembers.seniors.map((member, index) => (
              <AnimateIn key={member.name} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-5 sm:p-8 shadow-sm">
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Avatar placeholder */}
                    <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                      <span className="font-serif text-xl text-navy/30 font-bold">
                        {member.name.split(" ").pop()?.[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-navy mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gold font-medium text-sm mb-3">
                        {member.title}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-navy/5 text-navy px-3 py-1 rounded-full">
                          {member.specialty}
                        </span>
                        <span className="text-xs bg-gold/10 text-gold-dark px-3 py-1 rounded-full">
                          {member.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Junior Members - Compact Cards 3x2 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold text-sm tracking-[0.2em] uppercase text-center mb-4">
              Genç Kadro
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy text-center mb-4">
              Avukatlarımız
            </h2>
            <div className="gold-line mx-auto mb-10 sm:mb-16" />
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {teamMembers.juniors.map((member, index) => (
              <AnimateIn key={member.name} delay={index * 0.08}>
                <div className="bg-light rounded-lg p-5 sm:p-6 text-center">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-lg text-navy/30 font-bold">
                      {member.name.split(" ").pop()?.[0]}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-steel text-sm mb-2">{member.specialty}</p>
                  <span className="text-xs text-gold font-medium">
                    {member.experience}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
