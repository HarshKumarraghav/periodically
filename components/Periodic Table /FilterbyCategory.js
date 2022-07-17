import React, { useState , useEffect} from "react";
import { usePeriodicTable } from "../../context/userContext";
const buttonDataMap = [
    { id:1, name: "noble gas", color: "#3AB0FF" },
    { id:2, name: "polyatomic nonmetal", color: "#F00699" },
    { id:3, name: "alkaline earth metal", color: "#01708F" },
    { id:4, name: "diatomic nonmetal", color: "#FF5F00" },
    { id:5, name: "alkali metal", color: "#3E00FF" },
    { id:6, name: "transition metal", color: "#BF1A2F" },
    { id:7, name: "post-transition metal", color: "#890596" },
    { id:8, name: "lanthanide", color: "#7868E6" },
    { id:9, name: "actinide", color: "#FF8C32" },
    { id:10, name: "metalloid", color: "#3EC70B" },
    ];
const FilterbyCategory = ({setFilterData}) => {
  const [tableData] = usePeriodicTable();
  const [activeCategory, setActiveCategory] = useState("");
useEffect(() => {
    setFilterData(tableData);
 if (activeCategory === "") {
  setFilterData(tableData);
 }
    else {
        setFilterData(
            tableData.filter((element) => element.category === activeCategory)
        );
        }
    }, [activeCategory, tableData]);

    

  return (
    <>
      <div className="w-full flex flex-wrap items-center justify-center gap-2 z-10">
      <div className={"w-full text-center p-1 rounded-md text-primary-color z-10 mb-1 text-2xl font-bold font-gara"}>Filter the Element</div>
        <button onClick={() => setActiveCategory("")} className="w-40 h-8 font-bold p-1 rounded-md shadow-light-card text-[10px] font-custom active:scale-90 hover:scale-95 transition text-gray-300 ">ALL ELEMENTS</button>
        {buttonDataMap.map((buttonData) => (
            <button
            className="w-40 h-8 p-1 font-bold rounded-md shadow-light-card text-[11px] font-custom active:scale-90 hover:scale-95 transition " 
                key={buttonData.id}
                onClick={() => {
                    setActiveCategory(buttonData.name);
                }
                }
                style={{ color: buttonData.color }}
            >
                {buttonData.name.toUpperCase()}
            </button>
        ))}
      </div>
    </>
  );
};

export default FilterbyCategory;
