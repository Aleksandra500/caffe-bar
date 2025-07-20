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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <RoundCard
              img="/coffee5.jpg"
              title="Espresso Shot"
              desc="Bogata aroma, snažan karakter i čista energija u maloj šoljici. Espresso u BarFly-ju je pažljivo dozirana snaga u svakom gutljaju."
            />
            <RoundCard
              img="/coffee4.jpg"
              title="Cappuccino"
              desc="Savršena harmonija punog espressa i nežne pene od mleka. Kremasto iskustvo koje kombinuje tradiciju i komfor."
            />
            <RoundCard
              img="/lemonade.jpg"
              title="Domaća limunada"
              desc="Svetla, osvežavajuća i prirodna – limun, menta i trunkica meda. Idealna za lagane trenutke i letnje dane."
            />
          </div>
        </div>

        {/* 🍸 Kokteli */}
        <div>
          <h3 className="text-2xl font-bold mb-12 text-center text-[#f4e3c1] tracking-wide">
            Kokteli
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <RoundCard
              img="/sijalica.png"
              title="BarFly Mojito"
              desc="Klasičan mojito s našim twist-om – više limete, više osveženja. Svaki gutljaj hladi i pokreće. Idealno za letnje večeri na terasi uz muziku."
            />
            <RoundCard
              img="/brain.png"
              title="Espresso Martini"
              desc="Savršena fuzija kofeina i stila. Hladan espresso, vodka i liker ujedinjeni u sofisticiran koktel za kasne večeri i razgovore."
            />
            <RoundCard
              img="/koktel-sa-slagom.png"
              title="Berry Bliss"
              desc="Voćna eksplozija bobičastih aroma u svilenkastom miksu. Lagan, elegantan i neodoljivo osvežavajući – pravi izbor za dobar start večeri."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Univerzalna kartica sa okruglom slikom (i za kafe i za koktele)
const RoundCard = ({ img, title, desc }) => (
  <div className="bg-[#2b2a27] rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
    <img
      src={img}
      alt={title}
      className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-[#f4e3c1]"
    />
    <h4 className="text-xl font-semibold mb-3 text-[#f4e3c1]">{title}</h4>
    <p className="text-sm text-[#d2c7b3] leading-relaxed">{desc}</p>
  </div>
);

export default Menu;
