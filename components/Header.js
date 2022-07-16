import React, { useState, useEffect } from "react";
import { SearchIcon, GlobeAltIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Classes from "../components/Periodic Table /Elements.module.css";
import { GitHub, HistoryEdu, Explore } from "@mui/icons-material";
import { useRouter } from "next/router";
import { usePeriodicTable } from "../context/userContext";
const Header = () => {
  const router = useRouter();
  const [tableData] = usePeriodicTable();
  const [filterData, setFilterData] = useState("");
  const [sortingData, setSortingData] = useState("number");
  useEffect(() => {
    setFilterData(tableData);
  }, [tableData]);
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
  const [searchInput, setSearchInput] = useState("");
  const [active, setActive] = useState(false);

  // sorting  by name
  useEffect(() => {
    if (sortingData === "") {
      setFilterData(tableData);
    } else if (sortingData === "name") {
      const sortedData = [...tableData].sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      );
      setFilterData(sortedData);
    }
  }, [sortingData, tableData]);

  // sorting by symbol
  useEffect(() => {
    if (sortingData === "") {
      setFilterData(tableData);
    } else if (sortingData === "symbol") {
      const sortedData = [...tableData].sort((a, b) =>
        a.symbol.toLowerCase() < b.symbol.toLowerCase() ? -1 : 1
      );
      setFilterData(sortedData);
    }
  }, [sortingData, tableData]);

  // sorting by atomic number
  useEffect(() => {
    if (sortingData === "") {
      setFilterData(tableData);
    } else if (sortingData === "number") {
      const sortedData = [...tableData].sort((a, b) =>
        a.number < b.number ? -1 : 1
      );
      setFilterData(sortedData);
    }
  }, [sortingData, tableData]);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-primary p-5 shadow-light-card md:px-10 ">
      {/* left div */}
      <div
        onClick={() => router.push("/periodictable")}
        className="relative my-auto flex h-10 cursor-pointer sm:items-center sm:justify-start items-center"
      >
        <h2 className="font-head text-primary-color text-md md:text-2xl lg:text-4xl border-2 p-2 rounded-xl shadow-light-card">
          <span className="hidden md:inline">🧬</span>Periodically
        </h2>
      </div>
      {/*  middle div - search*/}
      <div className="hidden md:hidden lg:flex items-center rounded-xl py-2 text-sm text-primary-white placeholder-primary-white lg:border-2 lg:shadow-light-card "  onClick={() => setActive(true)}>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={"search your element..."}
          className=" flex-grow bg-transparent pl-5 outline-none text-primary-white"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-primary-color p-2 text-white md:mx-2 md:inline-flex active:scale-90 hover:scale-95" />
      </div>
      <div className="lg:hidden flex items-center justify-around bg-primary-color rounded-xl border-2 p-2 shadow-light-card active:scale-90 hover:scale-95">
        <button className="md:inline text-primary-white">Expore</button>
        <Explore className="h-6 cursor-pointer text-primary-white" />
      </div>
      {/* right div */}
      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <div className="hidden md:hidden lg:flex items-center justify-around  bg-primary-color rounded-xl lg:border-2 lg:p-2  ml-4 shadow-light-card active:scale-90 hover:scale-95">
          <button className=" md:inline text-primary-white">Expore</button>
          <Explore className="h-6 cursor-pointer text-primary-white" />
        </div>
        <div className="flex items-center rounded-xl border-2 p-2 shadow-light-card active:scale-90 hover:scale-95">
          <HistoryEdu className="h-6 cursor-pointer text-primary-white" />
          <button className=" hidden md:inline text-primary-white">
            History
          </button>
        </div>
        <Link
          href={"https://github.com/HarshKumarraghav/periodically_servers"}
          target="_blank"
        >
          <div className=" flex items-center rounded-xl border-2 p-2 shadow-light-card active:scale-90 hover:scale-95">
            <GitHub className="h-6 cursor-pointer text-primary-white" />
            <p className="hidden md:inline md:text-primary-white">Api docs</p>
          </div>
        </Link>
      </div>
      {active && (
        <div className="hidden sticky col-span-3 mx-auto md:flex flex-col items-center h-[550px] ">
          <div className="item-center m-4 flex">
            <button
              onClick={() => setSortingData("number")}
              className={
                sortingData === "number"
                  ? "w-40 h-8 font-bold p-1 bg-primary-color rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300"
                  : "w-40 h-8 font-bold p-1 rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300"
              }
            >
              Atomic Number
            </button>
            <button
              onClick={() => setSortingData("name")}
              className={
                sortingData === "name"
                  ? "w-40 h-8 font-bold p-1 bg-primary-color rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300"
                  : "w-40 h-8 font-bold p-1 rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300"
              }
            >
              Name
            </button>
            <button
              onClick={() => setSortingData("symbol")}
              className={
                sortingData === "symbol"
                  ? "w-40 h-8 font-bold p-1 bg-primary-color rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300"
                  : "w-40 h-8 font-bold p-1 rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300"
              }
            >
              Symbol
            </button>
          </div>
          <div className="col-span-3 overflow-x-scroll">
            {filterData
              .filter((value) => {
                if (searchInput === "") {
                  return value;
                } else {
                  return (
                    value.name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()) ||
                    value.symbol
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  );
                }
              }).map((item) => (
                <div
                  className="flex w-[450px] bg-primary-light h-20 gap-2 shadow-light-card m-4 items-center justify-between rounded-md active:scale-90 hover:scale-95 transition"
                  key={item.number}
                >
                  <div className="w-20 h-full">
                    <div
                      className="relative w-20 h-full flex items-center flex-col rounded-md text-primary-white"
                      style={{ backgroundColor: colorMap[item.category] }}
                    >
                      <div className={Classes.number}>{item.number}</div>
                      <div className={Classes.symbol}>{item.symbol}</div>
                      <div className={Classes.name}>{item.name}</div>
                    </div>
                  </div>
                  <div className="flex justify-center text-left flex-col w-30 h-full mr-12 text-primary-white">
                    <h1
                      className="text-sm font-bold"
                      style={{ color: colorMap[item.category] }}
                    >
                      {item.number}.{item.name}
                    </h1>
                    <h1 Discovered className="text-[12px] italic">
                      Discovered by:{item.discovered_by}
                    </h1>
                  </div>
                  <div className="flex text-left justify-center flex-col w-30 h-full text-primary-white mr-5">
                    <h1 className="text-[11px] font-bold">
                      Nature:{item.category.toUpperCase()}
                    </h1>
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
                        <p className="text-center">
                          {Math.round(item.atomic_mass - item.number)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex mt-4 ">
            <button
              // onClick={search}
              className="mr-6 w-40 h-8 font-bold p-1 rounded-md shadow-light-card text-[10px] bg-primary-color font-custom active:scale-90 hover:scale-95 transition text-gray-300 "
            >
              Search
            </button>
            <button
              className="w-40 h-8 font-bold p-1 rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300 "
              onClick={() => setActive(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
