import React, { useState, useEffect } from "react";
import Classes from "./AtomElement.module.css";
import { usePeriodicTable } from "../../context/userContext";
import FilterbyCategory from "../../components/Periodic Table/FilterbyCategory";
import Link from "next/link";
import { Rings } from "react-loader-spinner";
const Elements = () => {
  const [tableData] = usePeriodicTable();
  const [loadingTable] =usePeriodicTable();
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    setFilterData(tableData);
  }, [tableData]);
  // color Map
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
  // send data trought params

  return (
    <>
      {loadingTable == false ? (
        <div className="w-screen h-screen bg-primary flex items-center justify-center flex-col">
          <Rings
            height="300"
            width="300"
            radius="20"
            color="#D82148"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
          <p className="font-head text-2xl text-primary-color">Loading....</p>
        </div>
      ) : (
        <div className="w-full min-h-screen bg-primary text-primary-white p-4 ">
          <div className="w-full h-full flex items-center justify-center relative overflow-x-auto scroll whitespace-nowrap p-3 mt-16">
            <aside className={Classes.ptlegend}>
              <FilterbyCategory setFilterData={setFilterData} />
            </aside>
            <div
              className={Classes.periodictable}
              style={{ position: "relative" }}
            >
              {tableData.map((element) => (
                <Link
                  href="/elementdata/[elementdata]"
                  as={`/elementdata/${element.number}`}
                >
                  <div
                    className={Classes.element}
                    key={element.number}
                    style={{
                      gridRow: element.ypos,
                      gridColumn: element.xpos,
                    }}
                  >
                    <div className={Classes.number}>{element.number}</div>
                    <div className={Classes.symbol}>{element.symbol}</div>
                    <div className={Classes.name}>{element.name}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div
              className={Classes.periodictable}
              style={{ position: "absolute", top: 12 }}
            >
              {filterData.map((element) => (
                <Link
                  href="/elementdata/[elementdata]"
                  as={`/elementdata/${element.number}`}
                >
                  <div
                    className={Classes.element}
                    key={element.number}
                    style={{
                      gridRow: element.ypos,
                      gridColumn: element.xpos,
                      backgroundColor: colorMap[element.category],
                    }}
                  >
                    <div className={Classes.number}>{element.number}</div>
                    <div className={Classes.symbol}>{element.symbol}</div>
                    <div className={Classes.name}>{element.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Elements;