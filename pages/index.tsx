import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Explore } from "@mui/icons-material";
import ReactLoading from "react-loading";
import Quote from "../interfaces/quote";

const Home = () => {
  const [data, setData] = useState<Quote>();
  const [loading, setLoading] = useState(true);
  const randomQuote = async () => {
    await fetch("https://api.quotable.io/random", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
    setLoading(false);
  };
  useEffect(() => {    
    randomQuote();
  }, []);
  const router = useRouter();
  const explore = () => {
    router.push("/periodictable");
  };
  return (
    <div className="font-gara">
      <Head>
        <title>Periodically</title>
        <link rel="icon" href="/periodically_favicon.png" />
      </Head>
      <div className="relative w-screen h-screen text-primary-white bg-primary">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div>
            <h2 className="font-head text-primary-color text-4xl font-bold text-center p-2 rounded-xl ">
              Periodically
            </h2>
            <p className="text-lg italic text-center">
              "The place where you can learn anything and everything about elements."
            </p>
          </div>
          <div className="mt-8 w-80 md:w-[600px] bg-primary-light shadow-light-card p-4 rounded-md flex justify-center item-center">
            {loading ? (
              <ReactLoading type={"bars"} color={"D82148"} height={35} width={35} />
            ) : (
              <div className="mt-2">
                <h2 className="font-gara text-primary-color text-2xl">Thought of the moment</h2>
                <p className="italic text-xl">"{data ? data.content : "Never interrupt your enemy when he is making a mistake."}"</p>
                <p className="text-right">~{data ? data.author : "Napoleon"}</p>
              </div>
            )}
          </div>
          <div
            className="flex mt-4 w-36 items-center justify-between pr-4 pl-4  bg-primary-color rounded-xl border-2 p-2  ml-4 shadow-light-card font-custom active:scale-90 hover:scale-95"
            onClick={explore}
          >
            <button className="inline text-primary-white">Enter</button>
            <Explore className="h-6 cursor-pointer text-primary-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
