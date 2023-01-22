import React, { useState, useEffect } from "react";
import ExploreData from "../components/ExploreData";
import Header from "../components/Header";
import Head from "next/head";
import RandomInfo from "../components/RandomInfo";
import { usePeriodicTable } from "../context/userContext";
import Footer from "../components/Footer";
const explore = () => {
  const [data, setData] = useState([]);
  const dataFetch = async () => {
    const response = await fetch(
      "https://periodically-servers.onrender.com/random"
    );
    const arr = [];
    const Data = await response.json();
    arr.push(Data);
    setData(arr);
  };
  useEffect(() => {
    dataFetch();
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    dataFetch();
  };
  const [tableData, randomData] = usePeriodicTable();
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    setFilterData(tableData);
  }, []);
  return (
    <>
      <Head>
        <title>Periodically-explore</title>
        <link rel="icon" href="/periodically_favicon.png" />
      </Head>
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
