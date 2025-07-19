const CoffeeIntro = () => {
  return (
    <section className="bg-[#FFF8F0] text-[#4E342E] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Leva dugačka slika */}
        <img
          src="/zrna-kafe.jpg"
          alt="Coffee"
          className="w-[150px] h-[40px] object-cover rounded-[4rem] hidden md:block"
        />

        {/* Tekst */}
        <div className="text-center max-w-xl px-4">
          <h3 className="text-3xl font-arizonia mb-4">Coffee with Character</h3>
          <p className="text-base leading-relaxed">
            At BarFly, coffee is not just a drink — it’s a ritual.  
            We carefully select every bean and craft each cup with intention.  
            Whether you like it strong, smooth, or sweet — we’ve got your moment covered.
          </p>
        </div>

        {/* Desna dugačka slika */}
        <img
          src="/zrna-kafe.jpg"
          alt="Beans"
          className="w-[150px] h-[40px] object-cover rounded-[4rem] hidden md:block"
        />
      </div>
    </section>
  );
};

export default CoffeeIntro;
