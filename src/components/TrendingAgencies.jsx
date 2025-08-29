import React, { useState } from "react";

const categories = [
  "Hot Agencies 🔥",
  "Ad Creative",
  "Amazon",
  "Branding",
  "Conversion Rate Optimization",
  "Email & SMS",
  "Growth Strategy",
  "Hiring",
  "Paid Search",
  "Paid Social",
  "Performance Marketing",
];

// Agencies data
const agencies = [
  {
    name: "Quick Brown Fox",
    category: "Website Development",
    description:
      "Quick Brown Fox is a U.S.-based tech consultancy offering development, design, and fractional CTO services.",
    image:
      "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/684336d7d6d1fab8b5082537_66vOucY3mM0fc8WxQhad0AYTzwS8Tb3jvBEWVy6KS9Q.webp",
    link: "/agency/quick-brown-fox",
  },
  {
    name: "Grebban",
    category: "Website Design",
    description:
      "We design & build digital flagship stores, known for extraordinary e-commerce design.",
    image:
      "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/675c732402aff5d5db40745e_grebban.png",
    link: "/agency/grebban",
  },
  {
    name: "Dimond Connect",
    category: "Hiring",
    description:
      "Recruiting agency for DTC e-commerce brands. We find passive top-tier talent others miss.",
    image:
      "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/68956244c90420688eb29554_Dimond_Connect.webp",
    link: "/agency/dimond-connect",
  },
  {
    name: "Klay Media",
    category: "Paid Social",
    description:
      "Expert performance marketing team helping DTC brands grow with paid social and creative.",
    image:
      "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/67c1f91dd22ee57130d0b7cf_SKe31o_wCXfXj-ktOTqevKPponZ2aUvkT4X382EEN2Y.png",
    link: "/agency/klay-media",
  },
];

const TrendingAgencies = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hot Agencies 🔥");

  //  agencies  category
  const filteredAgencies =
    selectedCategory === "Hot Agencies 🔥"
      ? agencies
      : agencies.filter((agency) => agency.category === selectedCategory);

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      {/* Title */}
      <h2 className="mb-8 font-serif text-4xl italic text-center text-gray-900">
        Trending Agencies
      </h2>

      {/* Category */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition ${
              selectedCategory === category
                ? "bg-gray-100 text-black  hover:bg-yellow-200 "
                : "bg-yellow-200 text-black  hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Agency Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredAgencies.map((agency, idx) => (
          <div
            key={idx}
            className="transition bg-yellow-200 border rounded-lg shadow "
          >
            <a href={agency.link} className="block h-full">
              <img
                src={agency.image}
                alt={agency.name}
                className="object-cover bg-white rounded-t-lg h-65"
              />
              <div className="p-4">
                <p className="mb-1 text-xs font-medium text-gray-500 uppercase">
                  {agency.category}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {agency.name}
                </h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                  {agency.description}
                </p>
                <span className="inline-block px-4 py-2 text-sm font-medium text-black bg-yellow-400 rounded hover:bg-black hover:text-white">
                  View Profile
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
       {/* Dotted Line */}
      <div className="w-full mt-20 border-b-8 border-black border-dashed max-w-1xl"></div>
    </div>
  );
};

export default TrendingAgencies;