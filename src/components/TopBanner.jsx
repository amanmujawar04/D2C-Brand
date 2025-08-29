import React from "react";

const TopBanner = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-black bg-yellow-200">
      <span>List Your Tool, Agency Or Brand</span>
      <div className="flex space-x-2">
        <button className="px-4 py-1 text-sm font-semibold text-black bg-white rounded ">Join Our Newsletter</button>
        <button className="px-4 py-1 text-sm font-semibold text-black bg-white rounded">Get Free Access</button>
      </div>
    </div>
  );
};

export default TopBanner;