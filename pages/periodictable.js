import React from "react";
import Footer from "../components/Footer";
import Headers from "../components/Header";
import Elements from "../components/Periodic Table /Elements";
const periodictable = () => {
  
  return (
    <>

        <Headers />

        <div className="grid place-items-center overflow-auto  overflow-y-auto">
          <Elements />
        </div>
        <Footer/>
    </>
  );
};

export default periodictable;
