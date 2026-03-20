"use client";

import { useState } from "react";

export default function CareerForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-light rounded-lg p-8 sm:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-gold text-2xl">&#10003;</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy mb-3">
          Başvurunuz Alındı
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
            htmlFor="career-name"
            className="block text-sm font-medium text-navy mb-2"
          >
            Ad Soyad *
          </label>
          <input
            id="career-name"
            type="text"
            required
            className="w-full px-4 py-3 border border-light rounded bg-white text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
            placeholder="Ad Soyad"
          />
        </div>
        <div>
          <label
            htmlFor="career-email"
            className="block text-sm font-medium text-navy mb-2"
          >
            E-posta *
          </label>
          <input
            id="career-email"
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
            htmlFor="career-phone"
            className="block text-sm font-medium text-navy mb-2"
          >
            Telefon
          </label>
          <input
            id="career-phone"
            type="tel"
            className="w-full px-4 py-3 border border-light rounded bg-white text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
            placeholder="+90 5xx xxx xx xx"
          />
        </div>
        <div>
          <label
            htmlFor="career-position"
            className="block text-sm font-medium text-navy mb-2"
          >
            Pozisyon *
          </label>
          <select
            id="career-position"
            required
            className="w-full px-4 py-3 border border-light rounded bg-white text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
          >
            <option value="">Seçiniz</option>
            <option value="kidemli-ticaret">Kıdemli Avukat - Ticaret Hukuku</option>
            <option value="avukat-is">Avukat - İş Hukuku</option>
            <option value="stajyer">Stajyer Avukat</option>
            <option value="diger">Diğer</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="career-message"
          className="block text-sm font-medium text-navy mb-2"
        >
          Ön Yazı
        </label>
        <textarea
          id="career-message"
          rows={5}
          className="w-full px-4 py-3 border border-light rounded bg-white text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
          placeholder="Kendinizi kısaca tanıtın..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors duration-300 min-h-[48px]"
      >
        Başvuru Gönder
      </button>
    </form>
  );
}
