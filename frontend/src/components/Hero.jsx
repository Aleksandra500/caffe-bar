

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center relative"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay za bolji kontrast teksta */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Sadržaj preko slike */}
      <div className="relative z-10 px-6">
        <h1 className="font-paprika text-6xl md:text-9xl font-bold mb-4 tracking-wide">
          Caffe BarFly
        </h1>
        <p className=" font-serif mt-3 text-lg md:text-xl text-[#EDE0D4]">
          Mesto gde kafa postaje doživljaj
        </p>
      </div>

      {/* Strelica za skrol */}
      <a
        href="#about"
        className="absolute bottom-8 text-[#EDE0D4] text-6xl animate-bounce z-10"
      >
        ↓
      </a>
    </section>
  );
};

export default Hero;
