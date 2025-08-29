import React from "react";
 
const BrandBadge = () => {
  return (
    <div className="inline-block px-2 py-1 mb-6 text-black bg-yellow-300 rounded-full shadow-md">
      <span className="text-sm font-semibold">Loved By 15,000+ Brands</span>
    </div>
  );
};

const MainSection = () => {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 text-center bg-yellow-100">
           
      <BrandBadge />
      <h1 className="mb-4 font-serif text-4xl italic text-gray-900 ">
        Discover The Best Apps and Tools For Your Brand
      </h1>

      <p className="mb-8 text-lg text-gray-700 max-w-1xl">
        Leverage our platform to discover the best tools, the tech stacks behind top brands and learn from the<br></br> consequential founders. Join for free today.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-6 py-3 font-semibold text-white bg-black rounded hover:bg-yellow-300">
          Explore Brands
        </button>
        <button className="px-6 py-3 font-semibold text-white bg-black rounded hover:bg-yellow-300">
          Explore Tools
        </button>
        <button className="px-6 py-3 font-semibold text-white bg-black rounded hover:bg-yellow-300">
          Explore Agencies
        </button>
      </div>
    </main>
  );
};

export default MainSection;