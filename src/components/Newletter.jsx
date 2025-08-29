import React from "react";

function Newsletter() {
  return (
    <div className="flex flex-col items-center justify-start py-1">
      {/* Heading */}
      <h2 className="mb-6 text-2xl italic text-black">
        The newsletter for enterpreneurs
      </h2>

      {/* Email form */}
      <form className="flex flex-col items-center w-full max-w-sm">
        <label
          htmlFor="email"
          className="self-start mb-1 text-sm text-gray-700"
        >
          Email Address
          <span className="ml-1 text-red-500">*</span>
        </label>

        <input
          id="email"
          type="email"
          placeholder=""
          className="w-full px-4 py-3 rounded-lg bg-[#f7f1b8] outline-none mb-4"
        />

        <button
          type="submit"
          className="w-full py-3 text-lg font-semibold text-yellow-300 transition bg-black rounded-lg hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>

      {/* Dotted Line */}
      <div className="w-full max-w-6xl mt-20 border-b-8 border-black border-dashed"></div>
    </div>
  );
}

export default Newsletter;