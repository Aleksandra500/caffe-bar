import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#1C1B18] text-[#EADBC8] px-6 py-24 font-serif"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-arizonia text-[#D7B47C] mb-6">
          Contact Us
        </h2>
        <p className="text-md md:text-lg mb-12 text-[#d2c7b3] leading-relaxed">
          Imate pitanja, sugestije ili želite da rezervišete mesto? <br />
          Slobodno nas kontaktirajte – uvek nam je drago da čujemo od vas!
        </p>

        <div className="grid gap-10 text-left sm:grid-cols-2 text-[#EADBC8]">
          <div>
            <h4 className="text-lg font-semibold text-[#D7B47C] mb-2">📍 Adresa</h4>
            <p>Ulica Cara Dušana 13, Trstenik, Srbija</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#D7B47C] mb-2">📞 Telefon</h4>
            <p>+381 64 123 4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#D7B47C] mb-2">✉️ Email</h4>
            <p>info@barfly.rs</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#D7B47C] mb-2">🕒 Radno vreme</h4>
            <p>
              Ponedeljak - Četvrtak: 07:00 - 00:00 <br />
              Petak - Subota: 07:00 - 01:00 <br />
              Nedelja: 09:00 - 00:00
            </p>
          </div>
        </div>

        <div className="mt-14">
          <a
            href="mailto:info@barfly.rs"
            className="inline-block bg-[#D7B47C] text-[#1C1B18] font-semibold px-8 py-3 rounded-full hover:bg-[#b9996f] transition duration-300 ease-in-out"
          >
            Pošalji poruku
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
