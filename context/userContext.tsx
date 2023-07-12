import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Element from "../interfaces/element";

export type TableData = Element[];

type TableContextValue = [TableData, boolean, React.Dispatch<React.SetStateAction<TableData>>];

const tableContext = createContext<TableContextValue | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const TableProvider = ({ children }: Props): JSX.Element => {
  const [tableData, setTableData] = useState<TableData>([]);
  const [loadingTable, setLoadingTable] = useState<boolean>(true);

  const periodictableData = async (): Promise<void> => {
    try {
      const response = await fetch("https://periodically-go-servers.onrender.com/", {
        method: "GET",
      });
      const data = await response.json();
      setTableData(data);
      setLoadingTable(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    periodictableData();
  }, []);

  const values: TableContextValue = [tableData, loadingTable, setTableData];

  return <tableContext.Provider value={values}>{children}</tableContext.Provider>;
};

export function usePeriodicTable(): TableContextValue {
  const context = useContext(tableContext);
  if (!context) {
    throw new Error("usePeriodicTable must be used within a TableProvider");
  }
  return context;
}
