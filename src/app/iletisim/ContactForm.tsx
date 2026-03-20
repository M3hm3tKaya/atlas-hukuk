"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-light rounded-lg p-8 sm:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-gold text-2xl">&#10003;</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy mb-3">
          Talebiniz Alındı
        </h3>
        <p className="text-steel">
          En kısa sürede sizinle iletişime geçeceğiz. İlginiz için teşekkür ederiz.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-navy mb-2"
          >
            Ad Soyad *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            className="w-full px-4 py-3 border border-light rounded bg-white text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
            placeholder="Ad Soyad"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-navy mb-2"
          >
            E-posta *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            className="w-full px-4 py-3 border border-light rounded bg-white text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
            placeholder="ornek@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-medium text-navy mb-2"
          >
            Telefon *
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            className="w-full px-4 py-3 border border-light rounded bg-white text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
            placeholder="+90 5xx xxx xx xx"
          />
        </div>
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-medium text-navy mb-2"
          >
            Konu *
          </label>
          <select
            id="contact-subject"
            required
            className="w-full px-4 py-3 border border-light rounded bg-white text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
          >
            <option value="">Seçiniz</option>
            <option value="ticaret">Ticaret Hukuku</option>
            <option value="is">İş Hukuku</option>
            <option value="gayrimenkul">Gayrimenkul Hukuku</option>
            <option value="aile">Aile Hukuku</option>
            <option value="ceza">Ceza Hukuku</option>
            <option value="fikri-mulkiyet">Fikri Mülkiyet Hukuku</option>
            <option value="diger">Diğer</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-navy mb-2"
        >
          Mesajınız *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-light rounded bg-white text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
          placeholder="Hukuki sorununuzu kısaca açıklayın..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="contact-consent"
          type="checkbox"
          required
          className="mt-1 accent-gold w-5 h-5 min-w-[20px]"
        />
        <label htmlFor="contact-consent" className="text-xs sm:text-sm text-steel leading-relaxed">
          Kişisel verilerimin işlem görmesine ve tarafıma iletişim amacıyla ulaşılmasına muvafakat ediyorum.
        </label>
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors duration-300 min-h-[48px]"
      >
        Randevu Talep Et
      </button>
    </form>
  );
}
