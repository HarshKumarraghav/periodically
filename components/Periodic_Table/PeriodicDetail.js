import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Classes from "./AtomElement.module.css";
import {
  ArrowBack,
  Book,
  ContentPasteSearch,
  Analytics,
  Biotech,
  ArrowForward,
} from "@mui/icons-material";
import Wiki from "../../assets/wikipedia.png";
import notAvail from "../../assets/notAvail.jpeg";
import Link from "next/link";

const PeriodicDetail = ({ elementDataDetail }) => {
  const [elementData, setElementData] = useState([]);
  const router = useRouter();
  /* The above code is defining a JavaScript object called `colorMap` which maps different types of
 chemical elements to specific colors. Each chemical element type is represented as a key in the
 object, and its corresponding color is represented as the value associated with that key. */
  const colorMap = {
    "noble gas": "#3AB0FF",
    "polyatomic nonmetal": "#F00699",
    "alkaline earth metal": "#01708F",
    "diatomic nonmetal": "#FF5F00",
    "alkali metal": "#3E00FF",
    "transition metal": "#BF1A2F",
    "post-transition metal": "#890596",
    lanthanide: "#7868E6",
    actinide: "#FF8C32",
    metalloid: "#3EC70B",
  };
  /* The above code is using the `useEffect` hook in React to update the state of `elementData` whenever
`elementDataDetail` changes. It creates an empty array `Data`, pushes the value of
`elementDataDetail` into it, and then sets the state of `elementData` to `Data`. */
  useEffect(() => {
    const Data = [];
    Data.push(elementDataDetail);
    setElementData(Data);
  }, [elementDataDetail]);

  return (
    <>
      {elementData?.map((element, i) => (
        <div key={i}>
          <Head>
            <title>
              {element.number}. || {element.name}
            </title>
            <link rel="icon" href="/periodically_favicon.png" />
          </Head>
          {/* nav seaction */}
          {/* The above code is a JSX code snippet written in React. It is
          rendering a header component with a background color of "primary",
          containing an arrow back icon, a category label with the element
          number, and a link to the element's source page. The category label's
          background color is determined by a color map based on the element's
          category. The component is also using React Router to navigate to the
          periodic table page when the arrow back icon is clicked. */}
          <div className="w-full bg-primary h-16">
            <div className="flex items-center justify-between">
              <div onClick={() => router.push("/periodictable")}>
                <ArrowBack className="ml-8 active:scale-90 hover:scale-95 transition text-primary-white  w-8 h-7 rounded-md shadow-light-card m-2" />
              </div>
              <div
                className="w-44 p-1 border-2 text-primary-white font-bold rounded-md shadow-light-card text-center text-[10px] font-custom active:scale-90 hover:scale-95 transition"
                style={{ backgroundColor: colorMap[element.category] }}
              >
                <span className="mr-3 border-spacing-2">{element.number}.</span>
                {element.category.toUpperCase()}
              </div>

              <Link href={element.source} target="_blank">
                <a target="_blank">
                  <div className="m-2 mr-8 active:scale-90 hover:scale-95 transition">
                    <Image src={Wiki} width={"32px"} height={"32px"} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* header seaction */}
          <div className="w-full bg-primary flex justify-center items-center">
            <div className=" md:w-3/4 mb-8 flex flex-col bg-primary-light p-4 rounded-xl mt-2">
              <div className="w-full relative flex flex-col items-center justify-center md:justify-start bg-primary">
                <div className="md:flex items-center justify-between w-full bg-primary shadow-light-card h-10 hidden mt-4">
                  {element.number === 1 ? (
                    <div className="flex w-full h-full bg-primary-light  rounded-md mr-4 ml-2 border-2 shadow-light-card active:scale-90 transition justify-center item-center p-2 text-sm text-gara , text-primary-white">
                      No element exists
                    </div>
                  ) : (
                    <div
                      className="flex w-full h-full bg-primary-light rounded-md mr-4 ml-2 border-2 shadow-light-card active:scale-90 transition justify-between item-center p-2  text-gara , text-primary-white"
                      onClick={() =>
                        router.push(`/elementdata/${element.number - 1}`)
                      }
                    >
                      <ArrowBack className="text-[20px]" />
                      <h1 className="text-[15px]">
                        Atomic Number-{element.number - 1}
                      </h1>
                    </div>
                  )}
                  {element.number === 119 ? (
                    <div className="flex w-full h-full bg-primary-light  rounded-md mr-4 ml-2 border-2 shadow-light-card active:scale-90 transition justify-center item-center p-2 text-sm text-gara , text-primary-white">
                      No element exists
                    </div>
                  ) : (
                    <div
                      className="flex w-full h-full bg-primary-light rounded-md mr-4 ml-2 border-2 shadow-light-card active:scale-90 transition justify-between item-center p-2  text-gara , text-primary-white"
                      onClick={() =>
                        router.push(`/elementdata/${element.number + 1}`)
                      }
                    >
                      <h1 className="text-[15px]">
                        Atomic Number-{element.number + 1}
                      </h1>
                      <ArrowForward className="text-[20px]" />
                    </div>
                  )}
                </div>
                <div className="w-full flex mt-8 mr-4 ml-4 items-center md:items-start flex-col md:flex-row">
                  <div
                    className={`hover:scale-95 md:ml-4 md:mt-6 transition border-2 ${Classes.elementDetail}`}
                    key={element.number}
                    style={{
                      backgroundColor: colorMap[element.category],
                    }}
                  >
                    <div className="flex items-center justify-between flex-col text-primary-white">
                      <div
                        className={`text-2xl absolute ${Classes.numberDetail}`}
                      >
                        {element.number}
                      </div>
                      <div className={`text-4xl ${Classes.symbolDetail}`}>
                        {element.symbol}
                      </div>
                      <div className={`text-2xl  ${Classes.nameDetail}`}>
                        {element.name}
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex md:ml-4 md:mt-0 flex-col">
                    <div className="flex items-center md:hidden justify-between w-full text-primary mb-4 mt-4 rounded-md h-10 ">
                      {element.number === 1 ? (
                        <div className="flex w-full h-full bg-primary-light  rounded-md mr-4 ml-2 border-2 shadow-light-card active:scale-90 transition text-center item-center p-2 text-sm text-gara , text-primary-white">
                          No element exists
                        </div>
                      ) : (
                        <div
                          className="flex w-full h-full bg-primary-light rounded-md mr-4 ml-2 border-2 shadow-light-card active:scale-90 transition justify-between item-center p-2  text-gara , text-primary-white"
                          onClick={() =>
                            router.push(`/elementdata/${element.number - 1}`)
                          }
                        >
                          <ArrowBack className="text-[15px]" />
                          <h1 className="text-[10px]">
                            Atomic Number-{element.number - 1}
                          </h1>
                        </div>
                      )}
                      {element.number === 119 ? (
                        <div className="flex w-full h-full bg-primary-light  rounded-md mr-4 ml-2 border-2 shadow-light-card active:scale-90 transition text-center item-center p-2 text-sm text-gara , text-primary-white">
                          No element exists
                        </div>
                      ) : (
                        <div
                          className="flex w-full h-full bg-primary-light rounded-md mr-4 ml-2 border-2 shadow-light-card active:scale-90 transition justify-between item-center p-2  text-gara , text-primary-white"
                          onClick={() =>
                            router.push(`/elementdata/${element.number + 1}`)
                          }
                        >
                          <h1 className="text-[10px]">
                            Atomic Number-{element.number + 1}
                          </h1>
                          <ArrowForward className="text-[15px]" />
                        </div>
                      )}
                    </div>
                    <div className="flex w-full bg-primary-light rounded-md shadow-light-card">
                      <Book className="active:scale-90 hover:scale-95 transition text-primary-white rounded-md m-2" />
                      <h2 className="active:scale-90 hover:scale-95 transition text-primary-white rounded-md m-2 ">
                        Overview
                      </h2>
                    </div>
                    <div className="flex text-[20px] flex-col mt-2 mr-4 ml-4">
                      <h1
                        className="text-[15px] font-gara"
                        style={{ color: colorMap[element.category] }}
                      >
                        Atomic Number:
                      </h1>
                      <h2 className="text-xl  text-primary-white mt-1 font-gara">
                        {element.number}
                      </h2>
                    </div>
                    <div className="mt-2 mr-4 ml-4 border-b border-primary-light"></div>
                    <div className="flex text-[20px] flex-col mt-2 mr-4 ml-4">
                      <h1
                        className="text-[15px] font-gara"
                        style={{ color: colorMap[element.category] }}
                      >
                        Name:
                      </h1>
                      <h2 className="text-2xl text-primary-white mt-1 font-gara">
                        {element.name}
                      </h2>
                    </div>
                    <div className="mt-2 border-b mr-4 ml-4 border-primary-light"></div>
                  </div>
                </div>
              </div>
              <div className=" bg-primary">
                <div className="mr-4 ml-4">
                  <div className="flex flex-col text-2xl">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Summary:
                    </h1>
                    <h2 className="text-sm text-primary-white mt-1 font-custom">
                      {element.summary}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>

                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Discovered By:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.discovered_by || "Unknown"}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>

                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Named By:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.named_by || "Unknown"}{" "}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Appearance:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.appearance || "Unknown"}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Color:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.color || "Unknown"}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                  <div className="flex w-full bg-primary-light rounded-md shadow-light-card">
                    <ContentPasteSearch className="active:scale-90 hover:scale-95 transition text-primary-white rounded-md m-2" />
                    <h2 className="active:scale-90 hover:scale-95 transition text-primary-white rounded-md m-2">
                      Properties
                    </h2>
                  </div>
                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Atomic Mass:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {Math.round(element.atomic_mass) || "Unknown"}g/mol
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Density:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {Math.round(element.density) || "Unknown"}g/cm³
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Phase
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.phase || "Unknown"}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>

                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Electron Shells
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.shells.map((data, i) => (
                        <span key={i}>{`${data}, `}</span>
                      ))}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>

                  <div className="flex justify-around shadow-light-card  md:mr-20 md:ml-20 bg-primary-light p-2 rounded-md text-2xl mt-2 text-center">
                    <div className="flex flex-col">
                      <h1
                        className="text-[20px]  text-gray-400 font-gara"
                        style={{ color: colorMap[element.category] }}
                      >
                        Electron
                      </h1>
                      <p className="text-[18px] text-primary-white mt-1 font-custom">
                        {element.number}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h1
                        className="text-[20px]  text-gray-400 font-gara"
                        style={{ color: colorMap[element.category] }}
                      >
                        Protron
                      </h1>
                      <p className="text-[18px] text-primary-white mt-1 font-custom">
                        {element.number}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h1
                        className="text-[20px]  text-gray-400 font-gara"
                        style={{ color: colorMap[element.category] }}
                      >
                        Neutron
                      </h1>
                      <p className="text-[18px] text-primary-white mt-1 font-custom">
                        {Math.round(element.atomic_mass - element.number)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                  <div className="flex w-full bg-primary-light rounded-md shadow-light-card">
                    <Analytics className="active:scale-90 hover:scale-95 transition text-primary-white rounded-md m-2" />
                    <h2 className="active:scale-90 hover:scale-95 transition text-primary-white rounded-md m-2">
                      Physical Properties
                    </h2>
                  </div>
                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Period:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.period || "Unknown"}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Melting Point
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {Math.round(element.melt)}
                      <span className="text-red-600">°K</span> ={" "}
                      {Math.round(element.melt - 273.15)}
                      <span className="text-green-600">°C</span> ={" "}
                      {Math.round((element.melt - 273.15) * 1.8) + 32}
                      <span className="text-blue-600">°F</span>
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Boiling Point
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {Math.round(element.boil)}
                      <span className="text-red-600">°K</span> =
                      {Math.round(element.boil - 273.15)}
                      <span className="text-green-600">°C</span> =
                      {Math.round((element.boil - 273.15) * 1.8) + 32}
                      <span className="text-blue-600">°F</span>
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Molar Heat:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {Math.round(element.molar_heat) || "Unknown"} J/mol·K
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                  <div className="flex flex-col justify-around shadow-light-card  md:mr-20 md:ml-20 bg-primary-light p-2 rounded-md text-2xl mt-2 text-center">
                    <h1
                      className="text-[15px] text-left font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Spectrals Line:
                    </h1>
                    <div className=" w-full flex flex-col">
                      <Image
                        src={element.spectral_img || notAvail}
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                  </div>
                  <div className="flex w-full bg-primary-light rounded-md shadow-light-card mt-2">
                    <Biotech className="active:scale-90 hover:scale-95 transition text-primary-white rounded-md m-2" />
                    <h2 className="active:scale-90 hover:scale-95 transition text-primary-white rounded-md m-2">
                      Atomic Properties
                    </h2>
                  </div>
                  <div className="flex flex-col text-2xl">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Electronic Configuration:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.electron_configuration}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light mb-4"></div>
                  <div className="flex flex-col text-2xl">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Electronic Configuration Semantic:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.electron_configuration_semantic}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light mb-4"></div>
                  <div className="flex flex-col text-2xl">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Electronic Affenity:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.electron_affinity} kJ/mol
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light mb-4"></div>
                  <div className="flex flex-col text-2xl">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Electronegativity Paulingy:
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element.electronegativity_pauling}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light mb-4"></div>
                  <div className="flex flex-col text-2xl mt-2">
                    <h1
                      className="text-[15px]  text-gray-400 font-gara"
                      style={{ color: colorMap[element.category] }}
                    >
                      Ionization Energies
                    </h1>
                    <h2 className="text-[18px] text-primary-white mt-1 font-custom">
                      {element?.ionization_energies?.map((data, i) => (
                        <span key={i}>{`${data}, `}</span>
                      ))}
                    </h2>
                  </div>
                  <div className="mt-2 border-b border-primary-light"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default PeriodicDetail;
