import React, { createContext, useContext, useEffect, useState } from "react";
export const tableContext = createContext();

export const TableProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  const [loadingTable, setLoadingTable] = useState(true);
  const periodictableData = async () => {
    await fetch("https://periodicallyservers-production.up.railway.app/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
        setLoadingTable(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    periodictableData();
  }, []);
  return (
    <tableContext.Provider value={[tableData, loadingTable, setTableData]}>
      {children}
    </tableContext.Provider>
  );
};
export function usePeriodicTable() {
  return useContext(tableContext);
}
