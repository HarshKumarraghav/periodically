import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Comingsoon from '../assets/comingsoon.png';
import Head from "next/head";
const history = () => {
  return (
    <>
      <Head>
        <title>Periodically-History</title>
        <link rel="icon" href="/periodically_favicon.png" />
      </Head>
      <Header />
      <div className="w-screen h-screen bg-primary overflow-hidden flex justify-center items-center">
        <div className="w-full md:w-1/2  h-full md:h-1/4  flex justify-center items-center">
          <Image src={Comingsoon} objectFit="fill" />
        </div>
      </div>
    </>
  );
};

export default history;
