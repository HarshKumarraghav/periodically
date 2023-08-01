import React, { useState, useEffect } from "react";
import Link from "next/link";
import Classes from "../components/Periodic_Table/AtomElement.module.css";
import { ArrowBack, GitHub } from "@mui/icons-material";
import { useRouter } from "next/router";
import { SortExplore } from "../utils/SortData";
import IColorMap from "../interfaces/IColorMap";
import { IElement } from "../interfaces/IElement";

type Props = {
  filterData: IElement[];
  tableData: IElement[];
  setFilterData: React.Dispatch<React.SetStateAction<IElement[]>>;
  handleClick: (e: { preventDefault: () => void }) => void;
};

const ExploreData = ({ filterData, tableData, setFilterData, handleClick }: Props) => {
  const router = useRouter();
  const [sortingData, setSortingData] = useState("number");
  const colorMap: IColorMap = {
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
  // sorting  by name
  useEffect(() => {
    if (sortingData === "") {
      setFilterData(tableData);
    } else if (sortingData === "name") {
      const sortedData = [...tableData].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
      setFilterData(sortedData);
    }
  }, [sortingData, tableData]);

  // sorting by symbol
  useEffect(() => {
    if (sortingData === "") {
      setFilterData(tableData);
    } else if (sortingData === "symbol") {
      const sortedData = [...tableData].sort((a, b) => (a.symbol.toLowerCase() < b.symbol.toLowerCase() ? -1 : 1));
      setFilterData(sortedData);
    }
  }, [sortingData, tableData]);

  // sorting by atomic number
  useEffect(() => {
    if (sortingData === "") {
      setFilterData(tableData);
    } else if (sortingData === "number") {
      const sortedData = [...tableData].sort((a, b) => (a.number < b.number ? -1 : 1));
      setFilterData(sortedData);
    }
  }, [sortingData, tableData]);
  // sorting by category
  useEffect(() => {
    if (sortingData === "") {
      setFilterData(tableData);
    } else if (sortingData === "category") {
      const sortedData = [...tableData].sort((a, b) => (a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1));
      setFilterData(sortedData);
    }
  }, [sortingData, tableData]);
  // sorting by Appearence
  useEffect(() => {
    if (sortingData === "") {
      setFilterData(tableData);
    } else if (sortingData === "appearance") {
      const sortedData = [...tableData].sort((a, b) => (a.phase.toLowerCase() < b.phase.toLowerCase() ? -1 : 1));
      setFilterData(sortedData);
    }
  }, [sortingData, tableData]);
  return (
    <div className="w-screen h-screen bg-primary">
      <div className="w-full bg-primary h-14">
        <div className="flex items-center justify-between">
          <div onClick={() => router.push("/periodictable")}>
            <ArrowBack className="ml-8 active:scale-90 hover:scale-95 transition text-primary-white  w-10 h-10 rounded-md shadow-light-card m-2" />
          </div>

          <Link href={"https://github.com/HarshKumarraghav/"}>
            <a target="_blank">
              <div>
                <GitHub className="mr-8 active:scale-90 hover:scale-95 transition text-primary-white  w-10 h-10 rounded-md shadow-light-card m-2" />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-screen h-[400px] md:h-[750px] sticky col-span-3 mx-auto md:flex flex-col items-center bg-primary">
        <div className="w-full h-2"></div>
        <div className="text-primary-white p-4 rounded-md fond-custom">
          <h1 className="text-2xl text-primary-color ">Sort the element on the basis of: </h1>
          <ul>
            <li>- Atomic Number</li>
            <li>- Name</li>
            <li>- Symbol</li>
            <li>- Category(Alkali metal, Alkaline earth metal, Nobel gas ...)</li>
            <li>- Phase (Gas Liquid , Solid)</li>
          </ul>
        </div>
        <div className="w-full h-4"></div>

        <div className="item-center bg-primary p-3 flex">
          {SortExplore?.map((data) => (
            <button
              key={data.key + data.id}
              onClick={() => setSortingData(data.key)}
              className={
                sortingData === data.key
                  ? "w-40 h-8 font-bold p-1 bg-primary-color rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300"
                  : "w-40 h-8 font-bold p-1 rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300"
              }
            >
              {data.title}
            </button>
          ))}
        </div>
        <div className="overflow-y-scroll bg-gray-900 mb-4 h-[335px] md:h-full overflow-hidden scrollbar-hide">
          {filterData.map((item) => (
            <div
              className="flex md:w-[600px] bg-primary-light h-20 gap-2 shadow-light-card m-4 items-center justify-between rounded-md active:scale-90 hover:scale-95 transition"
              key={item.number}
              onClick={() => {
                router.push(`/elementdata/${item.number}`);
              }}
            >
              <div className="w-16 md:w-20 h-full">
                <div
                  className="relative w-16 md:w-20 h-full flex items-center flex-col rounded-md text-primary-white"
                  style={{ backgroundColor: colorMap[item.category] }}
                >
                  <div className={Classes.number}>{item.number}</div>
                  <div className={Classes.symbol}>{item.symbol}</div>
                  <div className={Classes.name}>{item.name}</div>
                </div>
              </div>
              <div className="flex justify-center text-left flex-col w-30 h-full  text-primary-white">
                <h1 className="text-sm font-bold" style={{ color: colorMap[item.category] }}>
                  {item.number}.{item.name}
                </h1>
                <h1 className="text-[12px] italic">Discovered by:{item.discovered_by}</h1>
              </div>
              <div className="flex text-left justify-center flex-col w-30 h-full text-primary-white mr-5">
                <h1 className="text-[11px] font-bold">Nature:{item.category.toUpperCase()}</h1>
                <div className="flex p-1 gap-2 justify-center">
                  <div className="text-[12px]">
                    <h2>Electron</h2>
                    <p className="text-center">{item.number}</p>
                  </div>
                  <div className="text-[12px]">
                    <h2>Proton</h2>
                    <p className="text-center">{item.number}</p>
                  </div>
                  <div className="text-[12px]">
                    <h2>Neutron</h2>
                    <p className="text-center">{Math.round(item.atomic_mass - item.number)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between flex-col mt-8">
          <div onClick={() => router.push("/periodictable")}>
            <h1 className="text-primary-color text-xl md:text-md text-gara font-bold">Explore the random Element:</h1>
          </div>

          <div onClick={handleClick}>
            <button className="mr-8 active:scale-90 hover:scale-95 text-primary-white bg-primary-color transition w-44 h-12 rounded-md shadow-light-card m-2">
              Spin Element!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreData;
