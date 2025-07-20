import React from 'react';

const Events = () => {
  return (
    <section id="events" className="bg-[#1C1B18] text-[#EDE0D4] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-arizonia mb-4 text-[#f4e3c1]">
          Weekend Nights at BarFly
        </h2>
        <p className="text-base md:text-lg text-[#d2c7b3] max-w-2xl mx-auto">
          As the lights dim, the rhythm begins — join us for unforgettable nights with deep beats, signature cocktails, and vibrant atmosphere.
        </p>
      </div>

      {/* Glavna DJ slika */}
      <div className="relative max-w-6xl mx-auto mb-20 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/dj-hover.jpg"
          alt="DJ Night"
          className="w-full h-[400px] object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h3 className="text-3xl md:text-5xl font-bold text-[#f4e3c1] drop-shadow-lg mb-4">
            DJ Nights
          </h3>
          <p className="text-sm md:text-base text-[#e0d8c4] italic">
            Every Friday & Saturday from 21h
          </p>
          <p className="mt-4 text-base max-w-xl text-[#d2c7b3]">
            Chill, lounge, and deep house vibes – let the music guide your weekend.
          </p>
        </div>
      </div>

      {/* Krugaste slike atmosfere */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-20">
        {['/event1.jpg', '/event2.jpg', '/event3.jpg'].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Event atmosphere ${i + 1}`}
            className="w-40 h-40 object-cover rounded-full shadow-md hover:scale-105 transition"
          />
        ))}
      </div>

      {/* Sekundarni event - kviz */}
      <div className="max-w-4xl mx-auto text-center border-t border-[#3b372f] pt-12">
        <h3 className="text-2xl font-semibold mb-2 text-[#f4e3c1]">
          Winter Sports Quiz
        </h3>
        <p className="text-sm text-[#cfc6b4] italic mb-2">
          Sundays (Winter Season) from 19h
        </p>
        <p className="text-base text-[#d2c7b3]">
          Gather your team and test your sports knowledge while enjoying our winter brews and cozy ambiance.
        </p>
      </div>
    </section>
  );
};

export default Events;
