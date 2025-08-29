import React from "react";

// categories data 
const categories = [
  {
    title: "Marketing",
    href: "/tool-category/channel-marketing",
    icon: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49d2dc034ac034408cb_1-800-D2C_ConversionOptimization.webp",
    count: 94,
  },
  {
    title: "Optimization",
    href: "/tool-category/conversion-optimization",
    icon: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49cc7c2ea6d40de9560_608b0fab070324385d529b4b_1-800-D2C_CX%252526Retention.avif",
    count: 82,
  },
  {
    title: "Operations",
    href: "/tool-category/operations",
    icon: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49d41d5ea9c34986b8a_1-800-D2C_Operations.avif",
    count: 72,
  },
  {
    title: "Email & SMS",
    href: "/tool-category/email-sms",
    icon: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49d5d82d394871cddc7_1-800-D2C_CustomerSupport.avif",
    count: 49,
  },
  {
    title: "Upsell",
    href: "/tool-category/upsell",
    icon: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49cad4102367bb5cf1e_online-shopping.avif",
    count: 44,
  },
  {
    title: "Analytics",
    href: "/tool-category/analytics",
    icon: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49d776b2745c248d35d_1-800-D2C_Analytics.avif",
    count: 43,
  },
  {
    title: "CX & Support",
    href: "/tool-category/customer-support",
    icon: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49d99cedf1828e89abd_1-800-D2C_ChannelMarketing.webp",
    count: 41,
  },
  {
    title: "Content & Creative",
    href: "/tool-category/advertising",
    icon: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/6695b49d12a52ccc0116aa44_1-800-D2C_Advertising.avif",
    count: 37,
  },
];

const CategoriesSection = () => {
  return (
    <section className="px-6 py-12 bg-yellow-100">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="font-serif text-4xl italic text-gray-900">
          Explore 419 Tools By Category
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.href}
            className="relative flex flex-col items-center p-0 transition-all bg-yellow-200 rounded-xl"
          >
            {/* Image */}
            <img
              src={category.icon}
              alt={category.title}
              className="justify-start object-contain w-6 h-6 mb-2"
            />

            {/* Title */}
            <h3 className="mb-2 font-semibold text-gray-800 text-md">
              {category.title}
            </h3>

            {/* Count */}
            <div className="text-sm font-bold text-black">{category.count}</div>
          </a>
        ))}
      </div>
      {/* Dotted Line */}
      <div className="w-full mt-20 border-b-8 border-black border-dashed max-w-1xl"></div>
    </section>
  );
};

export default CategoriesSection;