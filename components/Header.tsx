import React, { useState, useEffect, MouseEvent } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Classes from "../components/Periodic_Table/AtomElement.module.css";
import { GitHub, HistoryEdu, Explore } from "@mui/icons-material";
import { useRouter } from "next/router";
import { usePeriodicTable } from "../context/userContext";
import { MyDebounce } from "../utils/Debounce";
import { colorMap } from "../utils/colorCode";
import { SortHeader } from "../utils/SortData";
import Element from "../interfaces/element";

const Header = () => {
  const router = useRouter();
  const [tableData] = usePeriodicTable();
  const [filterData, setFilterData] = useState<Element[]>([]);
  const [sortingData, setSortingData] = useState("number");
  useEffect(() => {
    setFilterData(tableData);
  }, [tableData]);

  const [searchInput, setSearchInput] = useState("");
  const [active, setActive] = useState(false);

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
  const handleClose = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    if (target.id === "handle") {
      setActive(false);
    }
  };
  const SetInputString = (value: string) => {
    setSearchInput(value);
  };
  /* `const DebouncedSetInputString = MyDebounce(SetInputString, 3000);` is creating a debounced version
of the `SetInputString` function using the `MyDebounce` utility function. This means that when
`DebouncedSetInputString` is called, it will wait for 3000 milliseconds (3 seconds) before actually
executing the `SetInputString` function. This is useful for handling user input in real-time without
overwhelming the system with too many requests. */
  const DebouncedSetInputString = MyDebounce(SetInputString, 300);
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-primary p-5 shadow-light-card md:px-10"
      id="handle"
      onClick={handleClose}
    >
      {/* left div */}
      <div
        onClick={() => router.push("/periodictable")}
        className="relative my-auto flex h-10 cursor-pointer sm:items-center sm:justify-start items-center"
      >
        <h2 className="font-head md:w-40 text-center bg-primary-color text-primary-white text-md  border-2 p-2 rounded-xl shadow-light-card">
          Periodically
        </h2>
      </div>
      {/*  middle div - search*/}
      <div
        className="hidden md:hidden lg:flex items-center rounded-xl py-2 text-sm text-primary-white placeholder-primary-white lg:border-2 lg:shadow-light-card "
        onClick={() => setActive(true)}
      >
        <input
          onChange={(e) => {
            DebouncedSetInputString(e.target.value);
          }}
          type="text"
          placeholder={"Search your element by name || symbol || number"}
          className=" flex-grow bg-transparent pl-5 outline-none text-primary-white"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-primary-color p-2 text-white md:mx-2 md:inline-flex active:scale-90 hover:scale-95" />
      </div>
      <div
        className="lg:hidden flex items-center md:w-40 justify-between bg-primary-color rounded-xl border-2 p-2  shadow-light-card active:scale-90 hover:scale-95"
        onClick={() => router.push("/explore")}
      >
        <button className="md:inline text-primary-white">Explore</button>
        <Explore className="h-6 cursor-pointer text-primary-white" />
      </div>
      {/* right div */}
      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <div
          className="hidden md:hidden lg:flex items-center justify-around  bg-primary-color rounded-xl lg:border-2 lg:p-2  ml-4 shadow-light-card active:scale-90 hover:scale-95"
          onClick={() => router.push("/explore")}
        >
          <button className=" md:inline text-primary-white">Explore</button>
          <Explore className="h-6 cursor-pointer text-primary-white" />
        </div>
        <div
          className="flex items-center rounded-xl border-2 p-2 shadow-light-card active:scale-90 hover:scale-95"
          onClick={() => router.push("/history")}
        >
          <HistoryEdu className="h-6 cursor-pointer text-primary-white" />
          <button className=" hidden md:inline text-primary-white">History</button>
        </div>
        <Link href={"https://github.com/HarshKumarraghav/periodically_golang_server"}>
          <a target="_blank">
            <div className=" flex items-center rounded-xl border-2 p-2 shadow-light-card active:scale-90 hover:scale-95">
              <GitHub className="h-6 cursor-pointer text-primary-white" />
              <p className="hidden md:inline md:text-primary-white">Api-docs</p>
            </div>
          </a>
        </Link>
      </div>
      {active && (
        <div className="hidden sticky col-span-3  mx-auto md:flex flex-col items-center h-[550px]">
          <div className="item-center m-4 flex">
            {SortHeader?.map((data) => (
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
          <div className="col-span-3 overflow-x-scroll scrollbar-hide">
            {(filterData ?? [])
              .filter((value) => {
                if (searchInput === "") {
                  return value;
                } else {
                  return (
                    value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                    value.symbol.toLowerCase().includes(searchInput.toLowerCase()) ||
                    value.number.toString().includes(searchInput)
                  );
                }
              })
              .map((item) => (
                <div
                  className="flex w-[450px] bg-primary-light h-20 gap-2 shadow-light-card m-4 items-center justify-between rounded-md active:scale-90 hover:scale-95 transition "
                  key={item.number}
                  onClick={() => {
                    router.push(`/elementdata/${item.number}`), setActive(false);
                  }}
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
                    <h1 className="text-sm font-bold" style={{ color: colorMap[item.category] }}>
                      {item.number}.{item.name}
                    </h1>
                    {/* custom "Discovered" attribute removed below (h1) - TypeScript threw an error */}
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
        </div>
      )}
    </header>
  );
};

export default Header;
