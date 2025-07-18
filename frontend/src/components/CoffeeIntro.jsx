const CoffeeIntro = () => {
  return (
    <section className="bg-[#FFF8F0] text-[#4E342E] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {/* Leva slika */}
        <img
          src="/zrna-kafe.jpg"
          alt="Coffee Aroma"
          className="rounded-xl shadow-md hidden md:block"
        />

        {/* Srednji tekst */}
        <div className="text-center md:col-span-1">
          <h3 className="text-3xl font-bold mb-4 font-arizonia">Our Coffee Ritual</h3>
          <p className="text-md leading-relaxed">
            Every cup we serve is a story — of warmth, aroma, and slow enjoyment.  
            Whether you're starting your day or catching up with friends,  
            BarFly coffee is here to elevate the moment.
          </p>
        </div>

        {/* Desna slika */}
        <img
          src="/zrna-kafe.jpg"
          alt="Coffee Beans"
          className="rounded-xl shadow-md hidden md:block"
        />
      </div>
    </section>
  );
};

export default CoffeeIntro;
