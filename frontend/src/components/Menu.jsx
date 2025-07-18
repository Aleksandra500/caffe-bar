import React from 'react';
import DrinkCarousel from './DrinkCarousel';
import CocktailCarousel from './CoctailCarousel';
import CoffeeIntro from './CoffeeIntro'

const Menu = () => {
  return (
    <section id="menu" className="bg-[#FAF1E4] text-[#4E342E] py-20 px-6">
      <div className="max-w-6xl mx-auto">
      <CoffeeIntro/>
        <h2 className="text-4xl md:text-5xl font-arizonia font-bold text-center mb-16">
          Explore Our Drinks
        </h2>

        {/* COFFEE CAROUSEL */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Coffee Selection</h3>
          <DrinkCarousel />
        </div>

        {/* COCKTAILS (ostaje kao statični grid) */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Cocktail Selection</h3>
          <CocktailCarousel/>
        </div>
      </div>
    </section>
  );
};

// Mala komponenta za prikaz jednog pića
const DrinkCard = ({ img, title, desc }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center p-4">
    <img
      src={img}
      alt={title}
      className="w-full h-[200px] object-cover mb-4 rounded-md"
    />
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

export default Menu;
