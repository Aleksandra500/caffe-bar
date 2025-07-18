import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#FFF8F0] text-[#4E342E] py-20 px-6 font-paprika"
    >
      {/* Grid 2 kolone: leva slika, desni tekst + navigate */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-16">
        {/* Leva slika */}
        <img
          src="/sankceo.png"
          alt="Enterijer"
          className="rounded-xl shadow-lg w-full h-[400px] object-cover"
        />

        {/* Desni tekst */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-5xl md:text-6xl font-arizonia font-bold">
            About BarFly
          </h2>
          <p className="text-lg leading-relaxed font-sans">
            Welcome to BarFly, where coffee isn’t just a beverage, it’s a
            ritual. We blend passion, taste and warm atmosphere to give you a
            place to relax, connect and enjoy your perfect cup.
          </p>

          {/* Navigate blok */}
          <div className="bg-[#FDEDE1] p-6 rounded-xl shadow flex flex-col items-start gap-2">
            <p className="text-xl font-semibold">Navigate to BarFly</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#6D4C41] font-semibold hover:underline"
            >
              Check location <span className="text-2xl">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Donji deo – logo ili dodatna slika */}
      <div className="w-full max-w-6xl mx-auto">
        <img
          src="/logoColor.png"
          alt="BarFly Logo"
          className="w-full h-[300px] object-contain mx-auto"
        />
      </div>
    </section>
  );
};

export default About;
