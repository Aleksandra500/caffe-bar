
const CoffeeIntro = () => {
  return (
    <section className="bg-[#1c1b18] text-[#d2c7b3] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Leva slika (uvek vidljiva, pozicija zavisi od veličine ekrana) */}
        <img
          src="/zrna-kafe.jpg"
          alt="Coffee"
          className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] object-cover rounded-full shadow-md"
        />

        {/* Tekstualni deo */}
        <div className="text-center max-w-xl px-4">
          <h3 className="text-3xl md:text-4xl font-arizonia mb-6 text-[#f4e3c1]">
            Coffee with Character
          </h3>
          <p className="text-base md:text-lg leading-relaxed">
            BarFly kafa nije samo piće — to je ritual.  
            Pažljivo biramo zrna i sa strašću pripremamo svaki gutljaj.  
            Bilo da volite jaku, blagu ili aromatičnu – vaša šoljica čeka.
          </p>
        </div>

        {/* Desna slika (uvek vidljiva) */}
        <img
          src="/zrna-kafe.jpg"
          alt="Beans"
          className="hidden md:block w-[140px] h-[140px] md:w-[180px] md:h-[180px] object-cover rounded-full shadow-md"
        />
      </div>
    </section>
  );
};

export default CoffeeIntro;
