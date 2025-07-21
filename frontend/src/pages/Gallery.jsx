import React from 'react';

const images = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-[#1C1B18] text-[#f4e3c1] py-24 px-6 min-h-screen"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-arizonia font-bold mb-4">
          BarFly Galerija
        </h2>
        <p className="text-lg text-[#d2c7b3] max-w-2xl mx-auto italic">
          Pogledajte trenutke koji čine naš ambijent posebnim – od toplih
          jutarnjih kafa do noćnih žurki uz DJ-a.
        </p>
      </div>

      {/* Grid sa slikama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[260px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* CTA dugme */}
      <div className="mt-16 text-center">
        <a
          href="https://instagram.com/barfly" // zameni sa stvarnim linkom ako imaš
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f4e3c1] text-[#1C1B18] px-8 py-3 rounded-full font-semibold hover:bg-[#e9d4b8] transition"
        >
          Pratite nas na Instagramu
        </a>
      </div>
    </section>
  );
};

export default Gallery;
