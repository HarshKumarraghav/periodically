import React, { createContext, useContext, useEffect, useState } from "react";
export const tableContext = createContext();

export const TableProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  const periodictableData = async () => {
    await fetch("https://periodically-servers.herokuapp.com/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setTableData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    periodictableData();
  }, []);
  return (
    <tableContext.Provider value={[tableData, setTableData]}>
      {children}
    </tableContext.Provider>
  );
};
export function usePeriodicTable() {
  return useContext(tableContext);
}
