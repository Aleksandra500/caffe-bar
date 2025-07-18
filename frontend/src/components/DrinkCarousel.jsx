import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const drinks = [
  {
    img: '/coffee1.jpg',
    title: 'Espresso Shot',
    desc: 'Pure and bold, straight to the point.',
  },
  {
    img: '/coffee2.jpg',
    title: 'Cappuccino',
    desc: 'Creamy and balanced with milk foam.',
  },
  {
    img: '/coffee3.webp',
    title: 'Americano',
    desc: 'Smooth and extended with hot water.',
  },
  {
    img: '/coffee4.jpg',
    title: 'Flat White',
    desc: 'Silky microfoam and rich espresso.',
  },
];

const DrinkCarousel = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
      },
    },
    [
      // Autoplay funkcija
      (slider) => {
        let timeout;
        const clearNextTimeout = () => clearTimeout(timeout);
        const nextTimeout = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 3000); // promeni vreme ovde ako želiš duže/kraće
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
        {drinks.map((drink, index) => (
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

export default DrinkCarousel;
