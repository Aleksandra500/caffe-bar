import React from 'react';

const Events = () => {
  return (
    <section
      id="events"
      className="h-screen py-20 px-6 bg-[#ECE0D1] text-[#4E342E] text-center"
    >
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-semibold mb-4">Događaji</h2>
        <p className="text-lg">
          Pogledaj atmosferu sa naših prethodnih večeri.
        </p>
      </div>

      {/* Galerija */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <img
          src="/event1.jpg"
          alt="Dj"
          className="rounded-xl shadow-md object-cover w-full h-64"
        />
        <img
          src="/event2.jpg"
          alt="Kokteli"
          className="rounded-xl shadow-md object-cover w-full h-64"
        />
        <img
          src="/event3.jpg"
          alt="Gosti i atmosfera"
          className="rounded-xl shadow-md object-cover w-full h-64"
        />
      </div>
    </section>
  );
};

export default Events;
