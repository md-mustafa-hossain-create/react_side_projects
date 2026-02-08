import React from "react";

function Navbar() {
  return (
    <div className=" flex justify-between py-8 px-18">
      <p className="bg-black text-white px-6 py-2 rounded-full uppercase">
        target audience
      </p>

      <button className="bg-gray-200 px-6 py-2 rounded-full uppercase text-sm tracking-widest">
        digital banking platform
      </button>
    </div>
  );
}

export default Navbar;
