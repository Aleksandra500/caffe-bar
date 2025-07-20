import React from 'react';
import CoffeeIntro from './CoffeeIntro';

const Menu = () => {
  return (
    <section id="menu" className="bg-[#1c1b18] text-[#f5f5f5] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Uvod o kafi */}
        <CoffeeIntro />

        <h2 className="text-4xl md:text-5xl font-arizonia font-bold text-center mb-6 text-[#f4e3c1]">
          Naša Preporuka Nedelje
        </h2>
        <p className="text-center text-lg text-[#d2c7b3] mb-20 italic max-w-2xl mx-auto">
          Izabrali smo pažljivo najtraženije ukuse – savršen spoj tradicije i elegancije, u čaši.
        </p>

        {/* ☕ Kafe & Limunade */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-12 text-center text-[#f4e3c1] tracking-wide">
            Kafe & Limunade
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <DrinkCard
              img="/coffee5.jpg"
              title="Espresso Shot"
              desc="Bogata aroma, snažan karakter i čista energija u maloj šoljici."
            />
            <DrinkCard
              img="/coffee4.jpg"
              title="Cappuccino"
              desc="Savršena harmonija punog espressa i nežne pene od mleka."
            />
            <DrinkCard
              img="/lemonade.jpg"
              title="Domaća limunada"
              desc="Svetla, osvežavajuća i prirodna – limun, menta i trunkica meda."
            />
          </div>
        </div>

        {/* 🍸 Kokteli */}
        <div>
          <h3 className="text-2xl font-bold mb-12 text-center text-[#f4e3c1] tracking-wide">
            Kokteli
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <DrinkCard
              img="/cocktail1.jpeg"
              title="BarFly Mojito"
              desc="Klasičan mojito s našim twist-om – više limete, više osveženja."
            />
            <DrinkCard
              img="/cocktail2.jpg"
              title="Espresso Martini"
              desc="Savršena fuzija kofeina i stila – moćan, hladan i zavodljiv."
            />
            <DrinkCard
              img="/cocktail3.webp"
              title="Berry Bliss"
              desc="Letnji voćni raj u čaši – kombinacija bobičastog i sitnog leda."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Kartica za jedno piće
const DrinkCard = ({ img, title, desc }) => (
  <div className="bg-[#2b2a27] rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
    <img
      src={img}
      alt={title}
      className="w-full h-[240px] object-cover mb-4 rounded-lg"
    />
    <h4 className="text-xl font-semibold mb-2 text-[#f4e3c1]">{title}</h4>
    <p className="text-sm text-[#d2c7b3]">{desc}</p>
  </div>
);

export default Menu;
