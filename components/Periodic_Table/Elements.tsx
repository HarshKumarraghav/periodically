import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Classes from "./AtomElement.module.css";
import { usePeriodicTable } from "../../context/userContext";
import FilterbyCategory from "./FilterbyCategory";
import Link from "next/link";
import { Rings } from "react-loader-spinner";
import { colorMap } from "../../utils/colorCode";
import { IElement } from "../../interfaces/IElement";

const Elements = () => {
  const [tableData, loadingTable] = usePeriodicTable();
  const [filterData, setFilterData] = useState<IElement[]>([]);
  const [activeCategory, setActiveCategory] = useState("");
  useEffect(() => {
    setFilterData(tableData);
  }, [tableData]);

  return (
    <>
      {loadingTable == true ? (
        <div className="w-screen h-screen bg-primary flex items-center justify-center flex-col ">
          <Rings
            height="300"
            width="300"
            radius="20"
            color="#D82148"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <p className="font-head text-2xl text-primary-color">Loading....</p>
        </div>
      ) : (
        <div className="w-full min-h-screen bg-primary text-primary-white p-4">
          <div className="w-full h-full flex items-center justify-center relative overflow-x-auto scroll whitespace-nowrap p-3 mt-8">
            <aside className={Classes.ptlegend}>
              <FilterbyCategory
                setFilterData={setFilterData}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </aside>
            <div className={Classes.periodictable} style={{ position: "relative" }}>
              <AnimatePresence>
                {filterData?.map((element, i) => (
                  <Link href="/elementdata/[elementdata]" as={`/elementdata/${element.number}`} key={element.number}>
                    <motion.div
                      className={Classes.element}
                      style={{
                        gridRow: element.ypos,
                        gridColumn: element.xpos,
                        backgroundColor: activeCategory === "" ? colorMap[element.category] : (element as any)?.bgColor,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <div className={Classes.number}>{element.number}</div>
                      <div className={Classes.symbol}>{element.symbol}</div>
                      <div className={Classes.name}>{element.name}</div>
                    </motion.div>
                  </Link>
                ))}
              </AnimatePresence>
            </div>
            <div className={Classes.periodictable} style={{ position: "absolute", top: 12 }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Elements;
