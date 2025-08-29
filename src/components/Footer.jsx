import React from "react";

const Footer = () => {
  const categories = {
    Brands: [
      { name: "All Brands" },
      { name: "Kids Brands" },
      { name: "Food Brands" },
      { name: "Home Brands" },
      { name: "Beauty Brands" },
      { name: "Lifestyle Brands" },
      { name: "Beverage Brands" },
      { name: "Supplement Brands" },
      { name: "Personal Care Brands" },
      { name: "Sexual Wellness Brands" },
    ],
    Tools: [
      { name: "All Tools" },
      { name: "Finance Tools" },
      { name: "Analytics Tools" },
      { name: "Retention Tools" },
      { name: "Marketing Tools" },
      { name: "Operations Tools" },
      { name: "Subscription Tools" },
      { name: "Optimization Tools" },
      { name: "Landing Page Tools" },
      { name: "Shoppable Video Tools" },
    ],
    Content: [
      { name: "About Us" },
      { name: "Tool Discounts" },
      { name: "Tool Breakdowns" },
      { name: "Best Shopify Apps" },
      { name: "Best Shopify Brands" },
      { name: "Brand Founder Stories" },
      { name: "Best Ecommerce Agencies" },
    ],
    "Get Listed": [
      { name: "Create Tool Profile" },
      { name: "Create Brand Profile" },
      { name: "Create Agency Profile" },
    ],
  };

  return (
    <footer className="mt-10 rounded-lg bg-gray-50">
         {/* Dotted Line */}
      <div className="w-full mt-20 border-b-8 border-black border-dashed max-w-1xl"></div>
      <div className="px-6 py-10 mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid items-start gap-8 mb-10 md:grid-cols-2">
          {/* Logo + text */}
          <div>
            <a href="/" className="flex items-center mb-4">
              <img
                src="https://cdn.prod.website-files.com/60009eef85482eb18e856cb5/655b68c854dd034d835c307a_1800D2C%20logo.avif"
                alt="1800d2c logo"
                className="w-32"
              />
            </a>
            <p className="max-w-md text-sm text-black">
              Everything you need to build a better D2C brand, business and tech stack.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 ">
          {Object.entries(categories).map(([section, links], idx) => (
            <div key={idx}>
              <h4 className="mb-3 font-semibold text-gray-900 underline">{section}</h4>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href || "#"}
                      className="text-sm text-black transition hover:text-gray-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between space-y-3 text-sm text-black md:flex-row md:space-y-0">
          <p>Copyright ©2024 1800D2C.COM All Rights Reserved</p>
          <div className="flex space-x-4">
            <a className="" href="#">
              Sitemap
            </a>
            <a target="_blank" rel="noreferrer" className="" href="#">
              Privacy Policy
            </a>
            <a className="" href="#">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;