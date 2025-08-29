import React from "react";

const tools = [
  {
    category: "Platform",
    title: "Snapchat Ads",
    desc: "The Snapchat Ads platform connects businesses with a vast and diverse audience, reaching 900 million monthly...",
    textColor: "text-black",
    img: "https://images.ctfassets.net/inb32lme5009/7bkohgfO4vjHwS8AGNpb0S/fa32477e3880f95625b6a3403d37dc95/Snapchat_Ghost_OG-Image.jpg", 
  },
  {
    category: "Marketing",
    title: "Checkmate",
    desc: "Checkmate is leveraging AI to solve two of the biggest challenges facing brands today: Identifying high-intent...",
    textColor: "text-white",

    img:"https://cdn.prod.website-files.com/60009eef85482eb18e856cb5/684b128443f87e615bbd1c4e_1de4e5a574902738ae7a77f625dc841b_Group%2010%20%282%29.webp"
  },
  {
    category: "Site Experience",
    title: "Depict",
    desc: "Depict is a Shopify-native collection page customization tool. With Depict, brands can add editorial images/videos...",
    textColor: "text-white",
    img:"https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/67f555d2c66f3b67f3a61324_3evUGdklQaemeyxbJXl0oCzd0UGvT662EgL0fixPwE0.svg"
  },
  {
    category: "Analytics",
    title: "Lifetimely",
    desc: "Lifetimely is a robust analytics tool designed for direct-to-consumer (D2C) brands using Shopify. It provides detailed...",
    bgColor: "bg-blue-900",
    textColor: "text-white",
    logo: "Lifetimely",
  },
];

const App = () => {
  return (
    <div className="p-6 bg-yellow-100 ">
      {/* Heading */}
      <h1 className="mb-6 font-serif text-4xl italic text-center">
        Trending Tools and Apps
      </h1>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {[
          "Hot Tools 🔥",
          "Content & Creative",
          "CX & Support",
          "Reviews",
          "Subscription",
          "Analytics",
        ].map((btn, i) => (
          <button
            key={i}
            className="px-4 py-2 bg-yellow-200 rounded-md hover:bg-yellow-300"
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="relative flex flex-col justify-between shadow-md rounded-xl"
          >
            {/* Card Header */}
            <div
              className={`${tool.bgColor} ${tool.textColor} flex items-center justify-center h-56 rounded-t-xl text-3xl font-bold`}
            >
              {tool.img ? (
                <img
                  src={tool.img}
                  alt={tool.title}
                  className="object-contain max-w-full max-h-full"
                />
              ) : (
                <span>{tool.logo}</span>
              )}
            </div>

            {/* Category */}
            <span className="absolute px-2 py-1 text-xs bg-yellow-300 rounded-md top-2 left-2">
              {tool.category}
            </span>

            {/* Content */}
            <div className="flex-grow px-4 py-3">
              <h2 className="text-lg font-semibold">{tool.title}</h2>
              <p className="mt-1 text-sm text-gray-600">{tool.desc}</p>
            </div>

            {/*  Button */}
            <div className="px-4 pb-4">
              <button className="w-full py-2 mt-2 bg-yellow-300 rounded-md hover:bg-black hover:text-white">
                View Tool Profile
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Dotted Line */}
      <div className="w-full mt-20 border-b-8 border-black border-dashed max-w-1xl"></div>
    </div>
  );
};

export default App;