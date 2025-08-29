import React from "react";

// FeaturedReviews Data 
const featuredReviews = [
  {
    id: 1,
    title:
      "My Honest Review of the UltraHuman Ring Air: Sleep, Recovery, and More (2025)",
    href: "/reviews/my-honest-review-of-the-ultrahuman-ring-air-sleep-recovery-and-more-2025",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/686c6a97faf6f5ef1fc8a2ea_ultrahuman.png",
    time: "8 Minutes",
    date: "Jul 7, 2025",
  },
  {
    id: 2,
    title:
      "Loop Earplugs Review 2025: Are Switch 2, Quiet 2, and Experience 2 Worth It?",
    href: "/reviews/loop-earplugs-review-2025",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/683f813ef638846d387c964f_loop%20earplugs.avif",
    time: "8 Minutes",
    date: "Jun 3, 2025",
  },
  {
    id: 3,
    title: "ClassPass Review: A Smarter Way to Sweat in 2025",
    href: "/reviews/classpass-review-a-smarter-way-to-sweat",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/681a3f1bf21fbf61022e4f08_classpass%20header.jpeg",
    time: "5 Minutes",
    date: "May 6, 2025",  
  },
  {
    id: 4,
    title: "Best Subscription Gift Boxes for Men: Our Review of Bespoke Post",
    href: "/reviews/best-subscription-gift-boxes-for-men-our-review-of-bespoke-post",
    img: "https://cdn.prod.website-files.com/600ece313e616e6fe12df5d3/680917cd810960d60c129472_bespoke%20post%20image.avif",
    time: "6 Minutes",
    date: "Apr 23, 2025",
  },
];

const FeaturedProductReviews = () => {
  return (
    <section className="py-12">
      {/* Section Heading */}
      <div className="mb-8 text-center">
        <h2 className="font-serif text-4xl italic">Featured Product Reviews</h2>
        <div className="w-20 mx-auto mt-5 "></div>
      </div>

      {/* Grid of Cards */}
      <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {featuredReviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col overflow-hidden transition bg-yellow-100 rounded-lg "
          >
            <a href={review.href}>
              <img
                src={review.img}
                alt={review.title}
                className="object-cover w-full h-70 hover:grayscale"
                loading="lazy"
              />
            </a>
            <div className="flex flex-col flex-grow p-4">
              <div className="flex items-center mb-2 text-sm text-Black">
                <span>{review.time}</span>
                <span className="mx-2">•</span>
                <span>{review.date}</span>
              </div>
              <a href={review.href}>
                <h3 className="text-lg font-semibold transition hover:text-gray-400">
                  {review.title}
                </h3>
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

export default FeaturedProductReviews;
