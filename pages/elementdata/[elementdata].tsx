import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import PeriodicDetail from "../../components/Periodic_Table/PeriodicDetail";
import { IElement } from "../../interfaces/IElement";

type Props = {
  elementDataDetail: IElement;
};

export async function getServerSideProps(context: { query: { elementdata: string } }) {
  const { elementdata } = context.query;
  const response = await fetch(`https://periodically-go-servers.onrender.com/number/${elementdata}`, {
    method: "GET",
  });
  const data = await response.json();
  return {
    props: {
      elementdata,
      elementDataDetail: data,
    },
  };
}
const elementdata = ({ elementDataDetail }: Props) => {
  return (
    <div>
      <Header />
      <PeriodicDetail elementDataDetail={elementDataDetail} />
      <Footer />
    </div>
  );
};

export default elementdata;
