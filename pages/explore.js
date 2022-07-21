import React, { useState, useEffect } from "react";
import ExploreData from "../components/ExploreData";
import Header from "../components/Header";
import RandomInfo from "../components/RandomInfo";
import { usePeriodicTable } from "../context/userContext";
import Footer from "../components/Footer";
const explore = () => {
  const [data, setData] = useState([]);
  const dataFetch = async () => {
    const response = await fetch("https://periodically-servers.herokuapp.com/random")
    const arr =[];
    const Data = await response.json();    
    arr.push(Data);
    setData(arr); 
    };
    
    console.log("data", data);
  useEffect(() => {
    dataFetch();
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    dataFetch();
  };
  const [tableData] = usePeriodicTable();
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    setFilterData(tableData);
  }, []);
  return (
    <>
      <Header />
      <ExploreData
        tableData={tableData}
        filterData={filterData}
        setFilterData={setFilterData}
        handleClick={handleClick}
      />
      <RandomInfo elementData={data} />
      <Footer />
    </>
  );
};

export default explore;
