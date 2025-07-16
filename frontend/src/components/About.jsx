import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="h-screen py-20 px-6 bg-[#F5F5DC] text-[#4E342E] text-center"
    >
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-semibold mb-4">O nama</h2>
        <p className="text-lg leading-relaxed">
          Dobrodošli u Caffe BarFly – mesto koje spaja miris sveže kafe, toplinu
          ambijenta i prijatne razgovore. Naša misija je da svaki gost oseti
          domaću atmosferu i istinsku posvećenost ukusu.
        </p>
      </div>

      {/* Slike u gridu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <img
          src="/about1.jpg"
          alt="Enterijer kafića"
          className="rounded-xl shadow-lg object-cover w-full h-[250px]"
        />
        <img
          src="/about2.jpg"
          alt="Kafa"
          className="rounded-xl shadow-lg object-cover w-full h-[250px]"
        />
        <img
          src="/about3.jpg"
          alt="Atmosfera"
          className="rounded-xl shadow-lg object-cover w-full h-[250px]"
        />
      </div>
    </section>
  );
};

export default About;
