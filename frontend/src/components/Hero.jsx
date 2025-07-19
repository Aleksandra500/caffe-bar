const Hero = () => {
  return (
   <section
  id="home"
  className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center relative"
  style={{ backgroundImage: "url('/yellowhover.png')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content Wrapper */}
  <div className="relative z-10 px-6 flex flex-col items-center">
    <div className="mb-4">
      <img
        src="/cropped.png"
        alt="logo"
        className="w-96 sm:w-96 md:w-96 lg:w-[450px] xl:w-[600px] mx-auto"
      />
    </div>
    <div>
      <p className="font-serif text-base sm:text-lg md:text-xl xl:text-2xl text-[#EDE0D4]">
        Mesto gde kafa postaje doživljaj
      </p>
    </div>
  </div>

  {/* Strelica za skrol */}
  <a
    href="#about"
    className="absolute bottom-8 text-[#EDE0D4] text-4xl sm:text-5xl md:text-6xl animate-bounce z-10"
  >
    ↓
  </a>
</section>
  );
};

export default Hero;
