import Head from "next/head";
import React,{useState , useEffect} from "react";
import { useRouter } from "next/router";
const Home = () => {

const [data, setData] = useState([]);
const randomQuote = async () => { await fetch("https://api.quotable.io/random" , {method: "GET"})
.then(res => res.json())
.then(data => setData(data))
.catch(err => console.log(err))}
useEffect(() => {
  randomQuote();
}
, [])
const router = useRouter();
const explore = () => {
  router.push("/periodictable");
}
  return (
    <div className="font-gara">
      <Head>
        <title>Periodically</title>
        <link rel="icon" href="/favicon192.png" />
      </Head>
      <div className="relative w-screen h-screen text-primary-white bg-black">
        <div className=" absolute w-full h-screen flex flex-col items-center justify-center">
          <div className="text-4xl font-bold">
            <h2 className="font-head text-primary-color sm:text-4xl md:text-6xl">
              Periodically
            </h2>
        
          </div>
          <div className="mt-20 bg-primary-light shadow-md p-4 rounded-md " >
            <div className="mt-2">
              <p className="italic text-xl">"{data.content}"</p>
              <p className="text-right">~{data.author}</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-primary-color w-button h-button shadow-md shadow-white hover:scale-90 active:scale-190 rounded-md" onClick={explore}>explore  	&nbsp; 	&nbsp; <span className="text-right"> &gt; </span> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
