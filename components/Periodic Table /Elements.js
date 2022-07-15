import React, { useState, useEffect } from "react";
import Classes from "./Elements.module.css";
import { usePeriodicTable } from "../../context/userContext";
import ActiveCategory from "../../components/Periodic Table /FilterbyCategory";

const Elements = () => {
  const [tableData] = usePeriodicTable();
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    setFilter(tableData);
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
  return (
    <>
      <div className="w-full min-h-screen bg-primary text-primary-white p-4 ">
        <div className="w-full h-full flex items-center justify-center relative overflow-x-auto scroll whitespace-nowrap p-3 mt-16">
          <aside className={Classes.ptlegend}>
            <ActiveCategory filter={filter} setFilter={setFilter} />
          </aside>
          <div className={Classes.periodictable}>
            {filter.map((element) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Elements;
