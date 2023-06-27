import React, { useState, useEffect } from "react";
import { usePeriodicTable } from "../../context/userContext";
import { color, motion } from "framer-motion";
import { buttonDataMap, colorMap } from "../../utils/colorCode";

const FilterbyCategory = ({
  setFilterData,
  activeCategory,
  setActiveCategory,
}) => {
  const [tableData] = usePeriodicTable();
  useEffect(() => {
    setFilterData(
      tableData.map((element) =>
        element.category === activeCategory
          ? { ...element, bgColor: colorMap[activeCategory] }
          : activeCategory === ""
          ? {
              ...element,
              bgColor: colorMap[element.category],
            }
          : {
              ...element,
              bgColor: "#ffffff26",
            }
      )
    );
  }, [activeCategory, tableData]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full flex flex-wrap items-center justify-center gap-2 z-10"
    >
      <div className="w-full text-center p-1 rounded-md text-primary-color z-10 mb-1 text-2xl font-bold font-gara">
        Filter the Elements
      </div>
      <motion.button
        onClick={() => setActiveCategory("")}
        className="w-40 h-8 font-bold p-1 rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ALL ELEMENTS
      </motion.button>
      {buttonDataMap?.map((buttonData) => (
        <motion.button
          className="w-40 h-8 p-1 font-bold rounded-md shadow-light-card text-[11px] font-custom active:scale-90 hover:scale-95 transition"
          key={buttonData.id}
          onClick={() => setActiveCategory(buttonData.name)}
          style={{ color: buttonData.color }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonData.name.toUpperCase()}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default FilterbyCategory;
