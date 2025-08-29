import React from "react";

const ToolOfTheMonth = () => {
  return (
    <section className="px-6 py-12 bg-yellow-100">
     {/* Header */}
<div className="flex flex-col max-w-4xl mx-auto md:flex-row md:items-center md:justify-between">
  {/* Left side - Title */}
  <h2 className="mb-4 font-serif text-4xl italic text-gray-900 md:mb-0">
    Tool Of The Month
  </h2>

  {/* Right side - Paragraph */}
  <p className="text-gray-600 md:max-w-md">
    Each month we select one tool to feature as our Tool of the Month.
    The tool is usually widely adopted by brands on our platform or
    newly trending in tech stacks.
  </p>
</div>
 {/* Tool Card */}
      <div className="grid items-center gap-4 p-4 mx-auto mt-10 bg-yellow-200 shadow-lg max-w-1xl md:grid-cols-2 rounded-xl">
        {/* Left Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 text-xs font-bold text-black bg-yellow-300 rounded-full">
              FEATURED PARTNER
            </span>
            <span className="px-3 py-1 text-xs font-semibold text-black bg-white rounded">
              14 Day Free Trial
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900">Checkmate</h3>
          <p className="mt-3 leading-relaxed text-black">
            Drive incremental revenue by reaching millions of shoppers with
            Checkmate. Checkmate's AI de-anonymizes, identifies, and matches
            high-intent customers so you can target smarter and reach more
            potential customers. Join ColourPop, Rebecca Minkoff, Manscaped,
            7 For All Mankind, Naadam, and hundreds more using Checkmate
            Targeting.
          </p>

          <div className="mt-6">
            <a
              href="https://joincheckmate.com/checkmate-for-brands"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-white transition bg-black rounded-lg hover:bg-yellow-400"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/60009eef85482eb18e856cb5/684b128443f87e615bbd1c4e_1de4e5a574902738ae7a77f625dc841b_Group%2010%20%282%29.webp"
            alt="Checkmate"
            className="shadow-md rounded-xl"
          />
        </div>
      </div>
       {/* Dotted Line */}
         <div className="w-full mt-20 border-b-8 border-black border-dashed max-w-1xl "></div>
    </section>
  );
};

export default ToolOfTheMonth;