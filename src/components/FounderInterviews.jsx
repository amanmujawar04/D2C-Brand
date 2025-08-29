import React from "react";
// founder data
const founderInterviews = [
  {
    title: "Under The Hood: Joseph From AnyAge Wear",
    link: "/reads/under-the-hood-joseph-from-anyage-wear",
    tag: "Under The Hood",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/68a60e47b86cef78a580426f_JM%20linkedin%20(1).jpg",
    author: "Marissa O'Halloran",
    date: "August 20, 2025",
  },
  {
    title: "Behind The Tool: Christian From ShipAccel powered by Pitney Bowes",
    link: "/reads/behind-the-tool-christian-from-shipaccel-powered-by-pitney-bowes",
    tag: "Behind The Tool",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/689a7210f5644de79e87bfa1_Mac%20Headshot%20(2).jpg",
    author: "Marissa O'Halloran",
    date: "August 11, 2025",
  },
  {
    title: "Behind The Tool: Ahmed From GoAudience",
    link: "/reads/behind-the-tool-ahmed-from-goaudience",
    tag: "Behind The Tool",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/689108c0e3dd50dc007fe1a6_1747987092526.jpeg",
    author: "Marissa O'Halloran",
    date: "August 1, 2025",
  },
  {
    title: "Behind The Tool: Marc-Andre From Flyweight",
    link: "/reads/behind-the-tool-marc-andre-from-flyweight",
    tag: "Behind The Tool",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6887ee16b614b024b96cd733_D0356756-4B5B-402E-8E0B-2895AFCF4759_1_105_c.jpeg",
    author: "Marissa O'Halloran",
    date: "July 28, 2025",
  },
];

const FounderInterviews = () => {
  return (
    <section className="py-12 bg-yellow-100">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="w-10 h-[2px] mx-auto mb-4"></div>
        <h2 className="font-serif text-4xl italic text-gray-900 ">
       Latest Founder Interviews
        </h2>
      </div>

      {/* Grid  interviews img & title */}
      <div className="grid max-w-6xl gap-6 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {founderInterviews.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden transition bg-yellow-100 rounded-lg "
          >
            <a href={item.link} title={item.title}>
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full rounded-lg h-120 hover:grayscale"
                />
                <div className="absolute px-2 py-1 text-xs text-black bg-yellow-300 rounded top-2 left-2 ">
                  {item.tag}
                </div>
              </div>
            </a>

            <div className="p-4">
              <div className="flex items-center mb-2 text-sm text-black">
                <span>{item.author}</span>
                <span className="mx-2">•</span>
                <span>{item.date}</span>
              </div>
              <a
                href={item.link}
                className="text-lg font-semibold text-gray-800 transition hover:text-gray-400"
              >
                {item.title}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Dotted Line */}
      <div className="w-full mt-20 border-b-8 border-black border-dashed max-w-1xl"></div>
    </section>
  );
};

export default FounderInterviews;