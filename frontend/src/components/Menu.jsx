import React from 'react';
import CoffeeIntro from './CoffeeIntro';

const Menu = () => {
  return (
    <section id="menu" className="bg-[#FAF1E4] text-[#4E342E] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Uvod o kafi */}
        <CoffeeIntro />

        <h2 className="text-4xl md:text-5xl font-arizonia font-bold text-center mb-6">
          Naša Preporuka Nedelje
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16 italic">
          Izabrali smo ukuse koje volite — pažljivo pripremljeni, samo za vas.
        </p>

        {/* ☕ Kafe & Limunade */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Kafe & Limunade</h3>
          <div className="grid grid-cols-3 gap-4">
            <DrinkCard
              img="/coffee5.jpg"
              title="Espresso Shot"
              desc="Aromatičan, snažan i neodoljivo klasičan."
            />
            <DrinkCard
              img="/coffee4.jpg"
              title="Cappuccino"
              desc="Savršen balans kafe i pene od mleka."
            />
            <DrinkCard
              img="/lemonade.jpg"
              title="Domaća limunada"
              desc="Citrusno osveženje s dodatkom mente."
            />
          </div>
        </div>

        {/* 🍸 Kokteli */}
        <div>
          <h3 className="text-2xl font-bold mb-10 text-center">Kokteli</h3>
          <div className="grid grid-cols-3 gap-4">
            <DrinkCard
              img="/cocktail1.jpeg"
              title="BarFly Mojito"
              desc="Osvežavajući koktel s nanom i limetom."
            />
            <DrinkCard
              img="/cocktail2.jpg"
              title="Espresso Martini"
              desc="Spoj kafe i koktela – elegancija u čaši."
            />
            <DrinkCard
              img="/cocktail3.webp"
              title="Berry Bliss"
              desc="Sladak, voćni i idealan za letnje večeri."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Kartica za jedno piće
const DrinkCard = ({ img, title, desc }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center p-4 hover:shadow-lg transition duration-300">
    <img
      src={img}
      alt={title}
      className="w-full h-[230px] object-cover mb-4 rounded-md"
    />
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

export default Menu;
