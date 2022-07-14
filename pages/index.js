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
      <div className="relative w-screen h-screen text-primary-white bg-primary">
        <div className=" absolute w-full h-screen flex flex-col items-center justify-center">
          <div>
            <h2 className="font-head text-primary-color sm:text-4xl md:text-6xl ext-4xl font-bold text-center p-2 rounded-xl ">
              🧬Periodically
            </h2>
        <p className="text-lg italic text-center">"The place where you can anything and everything about elements by which our world is made of."</p>
          </div>
          <div className="mt-8 bg-primary-light shadow-light-card p-4 rounded-md  md:max-w-6xl" >
            <div className="mt-2">
              <h2 className="font-gara text-primary-color text-2xl" >Thought of the moment</h2>
              <p className="italic text-xl">"{data.content}"</p>
              <p className="text-right">~{data.author}</p>
            </div>
          </div>
          <div className="mt-8 flex justify-around items-center bg-primary-color w-40 p-2 h-button  shadow-light-card hover:scale-90 active:scale-190 rounded-md cursor-pointer" onClick={explore}>
            <button className="text-primary-white font-gara text-xl">Explore!</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
