import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Comingsoon from '../assets/comingsoon.png';
import Head from "next/head";
import Timeline from "../components/Timeline";
// import styles from '../styles/timeline.module.css';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const history = () => {
  return (
    <>
      <Head>
        <title>Periodically-History</title>
        <link rel="icon" href="/periodically_favicon.png" />
      </Head>

      <div className="bg-primary">
        <Header />
        <div className="bg-primary">
          <h1 className="text-4xl text-white text-center mt-6">History of Periodic Table <HistoryEduIcon className="text-4xl"/> </h1>
          <Timeline />
        </div>
      </div>

    </>
  );
};

export default history;
