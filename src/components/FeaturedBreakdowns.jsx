import React from "react";

// FeaturedBreakdown data 
const featuredBreakdowns = [
  {
    id: 1,
    title: "Depict Breakdown",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6806bf4722d749e5931ce988_Depict%20Logo.jpeg",
    link: "/breakdowns/depict",
    date: "April 21, 2025",
  },
  {
    id: 2,
    title: "Kintsugi Breakdown",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/678ff6823b767eb78906ad48_kintsugi%20breakdown.png",
    link: "/breakdowns/kintsugi",
    date: "January 21, 2025",
    readTime: "8 Minutes",
  },
  {
    id: 3,
    title: "Replo Breakdown",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/674eeeb87a9f63c35acca08d_replo_app_logo.avif",
    link: "/breakdowns/replo",
    date: "December 2, 2024",
    readTime: "6 Minute Read",
  },
  {
    id: 4,
    title: "Foreplay Breakdown",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/674eeeb8c2bc5d9f01072123_foreplay_breakdown_logo.avif",
    link: "/breakdowns/foreplay",
    date: "November 13, 2024",
    readTime: "8 Minute Read",
  },
];

const FeaturedBreakdowns = () => {
  return (
    <section className="py-12 bg-yellow-100">
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <h2 className="font-serif text-4xl italic text-gray-900 ">Featured Breakdowns</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {featuredBreakdowns.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden transition duration-300 bg-yellow-100 rounded-lg"
          >
            {/* Card Image */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full p-4 rounded-lg h-66 hover:grayscale"
              />
            </a>

            {/* Card Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2 text-sm text-black">
                <span>{item.readTime}</span>
                <span>{item.date}</span>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-bold text-black hover:text-gray-400"
              >
                {item.title}
              </a>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
       {/* Dotted Line */}
      <div className="w-full mt-20 border-b-8 border-black border-dashed max-w-1xl"></div>
    </section>
  );
};

export default FeaturedBreakdowns;