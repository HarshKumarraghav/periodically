import React, { createContext, useContext, useEffect, useState } from "react";
import { IElement } from "../interfaces/IElement";
export const tableContext = createContext<TableContextValue>([[], true, () => {}]);

type TableContextValue = [IElement[], boolean, React.Dispatch<React.SetStateAction<IElement[]>>];
type TableProviderProps = {
  children: React.ReactNode;
};

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const [tableData, setTableData] = useState<IElement[]>([]);
  const [loadingTable, setLoadingTable] = useState(true);
  const periodictableData = async () => {
    await fetch("https://periodically-go-servers.onrender.com/", {
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
  return <tableContext.Provider value={[tableData, loadingTable, setTableData]}>{children}</tableContext.Provider>;
};
export function usePeriodicTable(): TableContextValue {
  return useContext(tableContext);
}
