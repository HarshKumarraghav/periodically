import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PeriodicDetail from "../../components/Periodic_Table/PeriodicDetail";
export async function getServerSideProps(context) {
  const { elementdata } = context.query;
  const response = await fetch(
    `https://periodically-go-servers.onrender.com/number/${elementdata}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return {
    props: {
      elementdata,
      elementDataDetail: data,
    },
  };
}
const elementdata = ({ elementDataDetail }) => {
  return (
    <div>
      <Header />
      <PeriodicDetail elementDataDetail={elementDataDetail} />
      <Footer />
    </div>
  );
};

export default elementdata;
