import React from "react";
// resource data
const resources = [
  {
    title: "How to Set Up a Gifting & Sampling Program for CX Wins",
    link: "/resources/how-to-set-up-gifting-sampling-program-for-cx-wins",
    image: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/68aca3eb49876cb08578051c_How%20To%20Create%20An%20Effective%20D2C%20Customer%20Sampling%20Experience.webp",
    alt: "iPhone with D2C e-commerce dashboard next to an open black box of product samples",
    time: "11 minutes",
    date: "August 21, 2025"
  },
  {
    title: "How To Boost E-Commerce Sales: A Multi-Faceted Approach for a Targeted Audience",
    link: "/resources/how-to-boost-e-commerce-sales-a-multi-channel-approach",
    image: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/68a89f35bb4ab52ab7c43fee_Boost%20E-Commerce%20Sales%20In%202025.webp",
    alt: "Graphic for Boost e-commerce sales in 2025",
    time: "9 minutes",
    date: "August 21, 2025"
  },
  {
    title: "How To Keep CX Strong for Your E-Commerce Website During the Holiday Season",
    link: "/resources/how-to-keep-cx-strong-during-high-volume-seasons",
    image: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/68ac8c91e87485603cdb8533_Influx%20of%20traffic%20headed%20to%20webpage%20fun%20illustration.webp",
    alt: "Illustration of colorful cars symbolizing online users",
    time: "10 minutes",
    date: "August 20, 2025"
  },
  {
    title: "The Top 4 DTC Brands Winning the Consumer Market in 2025",
    link: "/resources/top-four-dtc-d2c-brands-models-winning-growth-2025",
    image: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/68a4e3d4f820029c0c864e4e_Simple%20Stock%20Growth%20Of%20Warby%20Parker%2C%20Hims%2C%20Chewy%2C%20Ralph%20Lauren%20Graphic.webp",
    alt: "Stock growth graphic of Warby Parker, Hims, Chewy, Ralph Lauren",
    time: "8 minutes",
    date: "August 19, 2025"
  }
];

const FeaturedResources = () => {
  return (
    <section className="py-12 bg-yellow-100">
      <div className="px-6 mx-auto max-w-7xl lg:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-serif text-4xl italic text-gray-900 ">Featured Resources</h2>
          <p className="mt-3 text-gray-600">
            Welcome to your curated hub of resources to help you build, 
            scale, and stay ahead in the D2C space. 
            Whether you're just starting your business or looking to grow, we've got you covered.
          </p>
        </div>

        {/* Grid of Resources */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="block overflow-hidden transition bg-yellow-100 rounded-lg "
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.alt} 
                className="object-cover w-full h-66 hover:grayscale"
              />

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between mb-2 text-sm text-black bold">
                  <span>{item.time}</span>
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-black hover:text-gray-400">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
      {/* Dotted Line */}
      <div className="w-full mt-20 border-b-8 border-black border-dashed max-w-1xl"></div>
    </section>
  );
};

export default FeaturedResources;