import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PeriodicDetail from "../../components/Periodic_Table/PeriodicDetail";

const ElementDataPage = ({ elementDataDetail }) => {
  return (
    <div>
      <Header />
      <PeriodicDetail elementDataDetail={elementDataDetail} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const { elementdata } = context.query;
    const response = await fetch(
      `https://periodically-go-servers.onrender.com/number/${elementdata}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return {
      props: {
        elementDataDetail: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        elementDataDetail: null,
        error: "Error fetching data",
      },
    };
  }
}

export default ElementDataPage;
