import React, { useState, useEffect } from "react";
import Classes from "./Elements.module.css";
const Elements = () => {
  const [data, setData] = useState([]);
  const periodictableData = async () => {
    await fetch("https://periodically-servers.herokuapp.com/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    periodictableData();
  }, []);
  console.log(data);

  // color Map
  const colorMap = {
    "noble gas": "#3AB0FF",
    "polyatomic nonmetal": "#F00699",
    "alkaline earth metal": "#01708F",
    "diatomic nonmetal": "#590696",
    "alkali metal": "#3330E4",
    "transition metal": "#BF1A2F",
    "post-transition metal": "#1363DF",
    "lanthanide": "#FF5F00",
    "actinide": "#FF8C32",
    "metalloid": "#3EC70B",
  };
  return (
    <>
      <div className="w-full h-screen bg-primary text-primary-white p-4">
        <div className="w-full h-full flex items-center justify-center relative overflow-x-auto overflow-y-scroll scroll whitespace-nowrap ">
          <div className={Classes.periodictable}>
            {data.map((element) => (
              <div
                className={Classes.element}
                key={element.name}
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
