import React from "react";
import Footer from "../components/Footer";
import Headers from "../components/Header";
import Head from "next/head";
import Elements from "../components/Periodic Table /Elements";
const periodictable = () => {
  return (
    <>
      <Head>
        <title>Periodically-The periodic table</title>
        <link rel="icon" href="/periodically_favicon.png" />
      </Head>
      <Headers />
      <div className="grid place-items-center overflow-auto  overflow-y-auto">
        <Elements />
      </div>
      <Footer />
    </>
  );
};

export default periodictable;
