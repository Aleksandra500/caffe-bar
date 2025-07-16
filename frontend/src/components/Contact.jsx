import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen py-20 px-6 bg-[#F5F5F5] text-[#4E342E] text-center"
    >
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-semibold mb-4">Kontaktiraj nas</h2>
        <p className="text-lg">
          Tu smo za sve informacije i sugestije. Dobrodošli!
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-left space-y-4 text-md">
        <p><strong>📍 Adresa:</strong> Ulica Kralja Petra 12, Beograd</p>
        <p><strong>📞 Telefon:</strong> +381 64 123 4567</p>
        <p><strong>📧 Email:</strong> kontakt@caffelav.rs</p>
        <p><strong>🕒 Radno vreme:</strong> Pon–Ned: 08:00 – 00:00</p>
      </div>

      {/* Opciona forma (možeš je i izbaciti) */}
      <form className="mt-10 max-w-xl mx-auto grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Vaše ime"
          className="p-3 rounded-md border border-gray-300"
        />
        <input
          type="email"
          placeholder="Vaš email"
          className="p-3 rounded-md border border-gray-300"
        />
        <textarea
          placeholder="Poruka"
          rows="4"
          className="p-3 rounded-md border border-gray-300"
        ></textarea>
        <button
          type="submit"
          className="bg-[#4E342E] text-white py-3 rounded-md hover:bg-[#3E2723]"
        >
          Pošalji poruku
        </button>
      </form>
    </section>
  );
};

export default Contact;
