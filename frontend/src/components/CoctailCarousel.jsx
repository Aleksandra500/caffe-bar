import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const cocktails = [
  {
    img: '/cocktail1.jpg',
    title: 'BarFly Mojito',
    desc: 'Minty & fresh with lime and rum.',
  },
  {
    img: '/cocktail2.jpg',
    title: 'Espresso Martini',
    desc: 'Coffee & vodka in perfect balance.',
  },
  {
    img: '/cocktail3.webp',
    title: 'Berry Bliss',
    desc: 'Sweet mix of berries and gin.',
  },
  {
    img: '/cocktail4.webp',
    title: 'Tropical Storm',
    desc: 'Pineapple, coconut and rum explosion.',
  },
];

const CocktailCarousel = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
      },
    },
    [
      (slider) => {
        let timeout;
        const clearNextTimeout = () => clearTimeout(timeout);
        const nextTimeout = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        };

        slider.on('created', nextTimeout);
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
        {cocktails.map((drink, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col items-center bg-white p-6 text-center"
          >
            <img
              src={drink.img}
              alt={drink.title}
              className="w-full h-[300px] object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{drink.title}</h3>
            <p className="text-sm text-gray-600">{drink.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailCarousel;
