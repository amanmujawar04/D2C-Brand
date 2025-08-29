import React from "react";

const FreeMemberSignUp = () => {
  const features = [
    "Access To Brand Tech Stacks",
    "Access To Full Tool Profiles",
    "Access To Full Brand Profiles",
    "Access To Tool Usage Metrics & Brands",
    "Access To 200+ Best-in-Market Discounts",
    "Access 150+ Founder Interviews",
    "Access To 1-800-Breakdowns (coming soon)",
  ];

  const steps = [
    {
      icon: "https://cdn.prod.website-files.com/60009eef85482eb18e856cb5/66446dda28f92fffcbde868f_benefit-1.svg",
      title: "Full Brand and Tool Access",
      text: "Get full access to brand and tool tech stacks when you create your free account.",
    },
    {
      icon: "https://cdn.prod.website-files.com/60009eef85482eb18e856cb5/66446e4191e09f5c0686e91d_benefit-2.svg",
      title: "Friends Rate Access",
      text: "Get access to 200+ best-in-market discounts on the most popular tools in ecommerce and get personal introductions.",
    },
    {
      icon: "https://cdn.prod.website-files.com/60009eef85482eb18e856cb5/66446e55244caef9707e434a_benefit-4.svg",
      title: "Premium Content Access",
      text: "Get access to in-depth interviews from the best founders in ecommerce. Plus, access over 150+ existing interviews.",
    },
  ];

  return (
    <section className="w-full py-16 bg-yellow-100">
      {/* Section Heading */}
      <div className="flex justify-center mb-10">
        <h2 className="font-serif text-4xl italic text-gray-900 ">Free Member Sign Up</h2>
      </div>

      {/* Two Column */}
      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
        
        {/* Left Side:- Signup / Features */}
        <div className="flex flex-col items-center p-8 bg-gray-100 shadow-lg rounded-xl">
          <div className="mb-6 text-center">
            <span className="px-3 py-1 text-xs font-semibold text-white bg-black rounded-full ">
              FULL ACCESS
            </span>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              1-800-Member
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">Free</p>
          </div>

          {/* Features List */}
          <ul className="grid gap-4 mb-6 text-sm text-gray-700 sm:grid-cols-1">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12Z"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-full h-px my-6 bg-gray-200"></div>

          {/* Button */}
          <a
            href="/sign-up"
            className="px-6 py-3 font-semibold text-black transition bg-yellow-400 rounded-lg shadow hover:bg-yellow-500"
          >
            Sign Up For Free
          </a>
        </div>

        {/* Right Side:- Steps / Benefits */}
        <div className="grid gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 transition bg-gray-100 rounded-lg shadow hover:shadow-md"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-12 h-12 mb-3"
                loading="lazy"
              />
              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                {step.title}
              </h4>
              <p className="text-sm text-center text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeMemberSignUp;