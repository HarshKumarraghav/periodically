import React from "react";
import Image from "next/image";
import Head from "next/head";
import error404 from "../assets/error404.png";
const Custom404 = () => {
  return (
    <>
      <Head>
        <title>ERROR-404</title>
        <link rel="icon" href="/periodically_favicon.png" />
      </Head>
      <div className="w-screen h-screen bg-primary overflow-hidden flex justify-center items-center">
        <div className="w-full md:w-1/2  h-full md:h-1/4  flex justify-center items-center">
          <Image src={error404} objectFit="fill" />
        </div>
      </div>
    </>
  );
};

export default Custom404;
