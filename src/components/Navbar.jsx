import React, { useState } from "react";

const menuContents = {
  Tools: (
    <div className="p-4 min-w-[200px] bg-white shadow-lg rounded">
      <p className="mb-2 font-semibold">All Tools</p>
      <ul>
        <li className="py-1">Finance Tools</li>
        <li className="py-1">Analytics Tools</li>
        <li className="py-1">Retention Tools</li>
        <li className="py-1">Marketing Tools</li>
        <li className="py-1">Operations Tools</li>
        <li className="py-1">Subscription Tools</li>
        <li className="py-1">Optimization Tools</li>
        <li className="py-1">Landing Page Tools</li>
        <li className="py-1">Shoppable Video Tools</li>
      </ul>
    </div>
  ),
  Brands: (
    <div className="p-4 min-w-[200px] bg-white shadow-lg rounded">
      <p className="mb-2 font-semibold">All Brands</p>
      <ul>
        <li className="py-1">Kids Brands</li>
        <li className="py-1">Food Brands</li>
        <li className="py-1">Home Brands</li>
        <li className="py-1">Beauty Brands</li>
        <li className="py-1">Lifestyle Brands</li>
        <li className="py-1">Beverage Brands</li>
        <li className="py-1">Supplement Brands</li>
        <li className="py-1">Personal Care Brands</li>
        <li className="py-1">Sexual Wellness Brands</li>
      </ul>
    </div>
  ),
};

const navLinks = ["Tools", "Brands", "Agencies", "Deals", "Breakdowns", "Reviews", "Menu"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-2 shadow-md bg-yellow-50">
      <div className="flex items-center justify-between">
        {/* Logo Left */}
        <a href="/" className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/60009eef85482eb18e856cb5/655b68c854dd034d835c307a_1800D2C%20logo.avif"
            alt="1800d2c logo"
            className="h-auto w-28"
          />
        </a>

        {/* Search Box Center */}
        <div className="flex justify-center flex-1 mx-4">
          <div className="w-full max-w-sm">
            <input
              type="text"
              placeholder="Search for a new tool..."
              className="w-full px-5 py-1 bg-yellow-200 border border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>
        
        {/* Desktop Menu Right */}
        <ul className="items-center hidden gap-6 text-sm font-medium text-black md:flex">
          {navLinks.map((item) => (
            <li key={item} className="relative cursor-pointer group">
              {item}
              {menuContents[item] && (
                <div className="absolute z-20 hidden mt-2 -translate-x-1/2 group-hover:block left-1/2">
                  {menuContents[item]}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center px-2 py-1 text-black md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          <span className="text-2xl font-bold">&#9776;</span>
        </button>
      </div>

      {/* Mobile & Tablet Menu Drawer */}
      <div className={`${isOpen ? "fixed" : "hidden"} top-0 right-0 w-72 h-full z-50 bg-white shadow-lg pt-4 px-6 md:hidden`}>
        <button
          className="float-right mb-5 text-3xl font-bold text-gray-500"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        {/* Mobile Search */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Search for a new tool..."
            className="w-full px-5 py-1 bg-yellow-200 border border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <ul className="flex flex-col gap-5 pt-6 text-sm font-medium text-black">
          {navLinks.map((item) => (
            <li key={item} className="py-1 border-b cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;