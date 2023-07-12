import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import PeriodicDetail from "../../components/Periodic_Table/PeriodicDetail";
import Element from "../../interfaces/element";
import { GetServerSidePropsContext } from "next";

interface ElementDataProps {
  elementdata: string;
  elementDataDetail: Element;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
const elementdata = ({ elementDataDetail }: ElementDataProps) => {
  return (
    <div>
      <Header />
      <PeriodicDetail elementDataDetail={elementDataDetail} />
      <Footer />
    </div>
  );
};

export default elementdata;
