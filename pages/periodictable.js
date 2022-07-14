import React from "react";
import Headers from "../components/Header";
import Elements from "../components/Periodic Table /Elements";
const periodictable = () => {
  return (
    <div>
      <div className="static">
        <Headers />
      </div>

      <div className="max-w-[1440px] m-auto overflow-x-auto overflow-y-auto scroll">
        <div className="grid place-items-center overflow-auto relative">
          <Elements />
        </div>
      </div>
    </div>
  );
};

export default periodictable;
