import React from 'react';

const events = [
  {
    img: '/dj-hover.jpg',
    title: 'DJ Nights',
    date: 'Every Friday & Saturday',
    desc: 'Feel the vibe with our resident DJ from 21h. Chill, lounge, deep house – every weekend.',
  },
  {
    img: '/quiz.avif',
    title: 'Winter Sports Quiz',
    date: 'Sundays (Winter Season)',
    desc: 'Gather your team and test your sports knowledge. Fun, beer and prizes from 19h.',
  },
];

const Events = () => {
  return (
    <section id="events" className="h-sreen py-20 bg-[#FFF8F0] text-[#4E342E] px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-arizonia">Events at BarFly</h2>
        <p className="text-lg text-gray-700">
          Our weekends are made for music, fun, and a little bit of challenge.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 italic mb-2">{event.date}</p>
              <p className="text-gray-700 text-sm">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
