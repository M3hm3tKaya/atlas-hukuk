import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-serif text-3xl font-bold text-white tracking-wider">
                ATLAS
              </span>
              <div className="w-12 h-0.5 bg-gold mt-2" />
              <span className="text-xs tracking-[0.3em] text-steel-light uppercase block mt-1">
                Hukuk Bürosu
              </span>
            </div>
            <p className="text-steel-light text-sm leading-relaxed">
              25 yıllık deneyimle İstanbul Levent&apos;te kurumsal hukuk
              danışmanlığı hizmeti sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6">
              Hızlı Erişim
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-light text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6">
              Uzmanlık Alanları
            </h4>
            <ul className="space-y-3">
              {[
                "Ticaret Hukuku",
                "İş Hukuku",
                "Gayrimenkul Hukuku",
                "Aile Hukuku",
                "Ceza Hukuku",
                "Fikri Mülkiyet",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/uzmanlik"
                    className="text-steel-light text-sm hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="text-gold shrink-0 mt-0.5" size={18} />
                <span className="text-steel-light text-sm">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="text-gold shrink-0" size={18} />
                <span className="text-steel-light text-sm">
                  {siteConfig.phone}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="text-gold shrink-0" size={18} />
                <span className="text-steel-light text-sm">
                  {siteConfig.email}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <ClockIcon className="text-gold shrink-0" size={18} />
                <span className="text-steel-light text-sm">
                  {siteConfig.workHours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel text-xs">
            &copy; 2026 Atlas Hukuk Bürosu. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/kariyer"
              className="text-steel text-xs hover:text-gold transition-colors duration-300"
            >
              Kariyer
            </Link>
            <Link
              href="/iletisim"
              className="text-steel text-xs hover:text-gold transition-colors duration-300"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
