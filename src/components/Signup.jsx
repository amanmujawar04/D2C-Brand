import React, { useState } from "react";

export const bgImageUrl =
  "https://cdn.prod.website-files.com/60009eef85482eb18e856cb5/66f4819dfcfda1f5a8a6dc0b_6644a3a2c8540e0ea6702f67_join-today.avif";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <section className="bg-[#FFFBCB] py-10 px-2">
      <div
        className="relative max-w-6xl mx-auto rounded-[20px] overflow-hidden bg-cover bg-center "
        style={{
          backgroundImage: `url(${bgImageUrl})`,
        }}
      >
        <div className="p-8 text-white sm:p-12 md:p-16">
          {/* Tag */}
          <span className="inline-block px-4 py-1 mb-6 text-xs font-semibold text-black bg-yellow-300 rounded-full">
            LOVED BY 15,000+ BRANDS
          </span>

          {/* Heading */}
          <h1 className="mb-4 font-serif text-3xl italic font-medium text-white md:text-4xl">
            Sign Up Today, Learn Forever
          </h1>

          {/* Subheading */}
          <p className="mb-2 font-bold text-white">
            Everything happening in D2C — in one email.
          </p>

          {/* Terms text */}
          <p className="mb-6 text-white">
            By subscribing, you agree to our{" "}
            <a
              href="#"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service.
            </a>
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 text-black rounded-md outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-8 py-3 font-bold text-black transition bg-yellow-300 rounded-md hover:bg-yellow-400"
            >
              Subscribe
            </button>
          </form>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
      </div>
      {/* Dotted Line */}
      <div className="w-full mt-20 border-b-8 border-black border-dashed max-w-1xl"></div>
    </section>
  );
};

export default Signup;