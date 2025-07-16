import React from 'react';

const Menu = () => {
  return (
    <section
      id="menu"
      className="h-screen py-20 px-6 bg-[#FFF8F0] text-[#4E342E] text-center"
    >
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-semibold mb-4">Naš Meni</h2>
        <p className="text-lg">
          Pažljivo birane kafe, osvežavajući kokteli i domaći kolači.
        </p>
      </div>

      {/* Grid meni stavki */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Kafa */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <img src="/espresso.jpg" alt="Espresso" className="rounded-md mb-4 h-40 w-full object-cover" />
          <h3 className="text-xl font-bold mb-2">Espresso</h3>
          <p className="text-sm text-gray-700">Intenzivna aroma, savršeno izbalansirana jačina.</p>
        </div>

        {/* Latte */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <img src="/latte.jpg" alt="Latte" className="rounded-md mb-4 h-40 w-full object-cover" />
          <h3 className="text-xl font-bold mb-2">Vanilla Latte</h3>
          <p className="text-sm text-gray-700">Kremasto mleko sa daškom vanile i bogatom kafom.</p>
        </div>

        {/* Kolač */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <img src="/cake.jpg" alt="Cappuccino" className="rounded-md mb-4 h-40 w-full object-cover" />
          <h3 className="text-xl font-bold mb-2">Cappuccino</h3>
          <p className="text-sm text-gray-700">kremast ukus.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
