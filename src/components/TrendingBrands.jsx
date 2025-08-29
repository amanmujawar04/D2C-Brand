import React from "react";

const brands = [
  {
    name: "Ruffwear",
    slug: "ruffwear",
    category: "Pet",
    categoryIcon:
      "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49ed5c5439f63c5a9a9_20230924T0832-4072b5ab-4930-49b3-a137-749c2c83ac68.webp",
    image:
      "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/683a1ac083901fa39f2eacfd_81xjFYUoxYL.jpg",
    description:
      "Ruffwear creates performance dog gear designed for outdoor adventures and active lifestyles. From harnesses and leashes to dog boots and packs, each product is built for durability, comfort, and safety.",
    tools: ["Reamaze", "Webflow", "Attentive", "Shopify"],
    toolCount: 14,
  },
  {
    name: "ANDI",
    slug: "andi",
    category: "Apparel",
    categoryIcon:
      "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49eff8e25afe271f098_20230924T0832-0355e977-23ff-462d-a784-78d8a9e541c1.webp",
    image:
      "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6841f56b8b3024945683cfcb_DSC00444-3_1024x1024.webp",
    description:
      "ANDI is a New York-based accessories brand creating versatile, eco-conscious bags designed for life on the go.",
    tools: ["Zendesk", "Alia", "Reamaze", "Shopify"],
    toolCount: 8,
  },
  {
    name: "OMSOM",
    slug: "omsom",
    category: "Food",
    categoryIcon:
      "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49c5a7ab7df7f35f53e_20230924T0832-b65ebed3-740d-4a61-bf12-75a6182ec952.webp",
    image:
      "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6729f6fe3abc92c53f2721e2_20240715T1034-3ecb7aa9-5ba6-4a2b-98e2-7429bc689f9a.avif",
    description:
      "Omsom is here to bring proud, loud Asian flavors to your fingertips any day of the week.",
    tools: ["Canal", "Tolstoy", "Shopify", "Unbounce"],
    toolCount: 11,
  },
];

const TrendingBrands = () => {
  return (
    <section className="py-12 bg-yellow-100">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-10 font-serif text-4xl italic text-center">
          Trending D2C Brands
        </h2>

        {/* Grid of Brands */}
        <div className="grid gap-8 md:grid-cols-1">
          {brands.map((brand) => (
            <div
              key={brand.slug}
              className="flex overflow-hidden transition bg-yellow-200 rounded-lg shadow-md hover:shadow-xl"
            >
              {/* Left Side Image */}
              <a href={`/brand/${brand.slug}`} className="relative flex-shrink-0 block w-40">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="object-cover w-full h-full"
                />
                {/* Tool Count */}
                <div className="absolute px-1 py-0 text-xs text-white bg-black rounded top-1 left-1">
                  {brand.toolCount} TOOLS
                </div>
              </a>

              {/* Right Side Content */}
              <div className="flex flex-col justify-between p-4 text-left">
                <div>
                  <a
                    href={`/brand/${brand.slug}`}
                    className="text-lg font-semibold hover:text-gray-100"
                  >
                    {brand.name}
                  </a>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {brand.description}
                  </p>
                </div>

                {/* Category */}
                <div className="flex items-center gap-2 mt-3 ">
                  <img
                    src={brand.categoryIcon}
                    alt={brand.category}
                    className="h-7 w-7"
                  />
                  <span className="text-black text-md hover:text-gray-100">
                    {brand.category}
                  </span>
                </div>

                {/* Tools List */}
                <div className="mt-4">
                  <h4 className="mb-1 text-xs font-bold text-gray-400 uppercase">
                    KEY TOOLS USED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-gray-100 border rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dotted Line */}
      <div className="w-full mt-20 border-b-8 border-black border-dashed max-w-1xl"></div>
    </section>
  );
};

export default TrendingBrands;