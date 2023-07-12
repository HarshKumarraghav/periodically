import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Comingsoon from "../assets/comingsoon.png";
import Head from "next/head";
const history = () => {
  return (
    <>
      <Head>
        <title>Periodically-History</title>
        <link rel="icon" href="/periodically_favicon.png" />
      </Head>

      <div className="w-screen h-screen bg-primary overflow-hidden">
        <Header />
        <div className="w-full  h-full  flex justify-center items-center">
          <Image src={Comingsoon} objectFit="fill" />
        </div>
      </div>
    </>
  );
};

export default history;
