import React from 'react';
import CoffeeIntro from './CoffeeIntro';

const Menu = () => {
  return (
    <section id="menu" className="bg-[#1c1b18] text-[#f5f5f5] pt-12 pb-24 px-6">
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
              img="/eshot.webp"
              title="Espresso Shot"
              desc="Bogata aroma, snažan karakter i čista energija u maloj šoljici. Espresso u BarFly-ju je pažljivo dozirana snaga u svakom gutljaju."
            />
            <RoundCard
              img="/capuc.jpg"
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
              img="/libre.jpeg"
              title="Cuba Libre"
              desc="Osvježavajuća klasika! Rum, Coca-Cola i svež limunov sok – jednostavno, a neodoljivo. Popularan izbor za ležerna druženja i letnje večeri."
            />
            <RoundCard
              img="/mohito.jpg"
              title="Mojito"
              desc="Kubanski klasik koji osvaja svežinom! Mojito je spoj belog ruma, sveže nane, limete, šećera i gazirane vode. Lagano sladak i citrusan, sa aromatičnom mentom koja pruža osvežavajući ukus – idealan za tople dane i letnje večeri.

"
            />
            <RoundCard
              img="/aperol.jpg"
              title="Aperol Spritz"
              desc="Osvježavajući italijanski klasik, Aperol Spritz kombinuje laganu gorčinu Aperola s delikatnom notom prosecca i završava se s kiselkastim dodirom gazirane vode. Idealno letnje piće, poznato po svojoj narandžastoj boji i laganom, gorko-slatkom ukusu. Servira se s kriškom pomorandže i ledom — savršeno za opuštanje u dobrom društvu."
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