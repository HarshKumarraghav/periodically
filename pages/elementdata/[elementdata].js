import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PeriodicDetail from "../../components/Periodic Table /PeriodicDetail";
const elementdata = () => {
  const [elementDataDetail, setElementDataDetail] = useState([]);
  const router = useRouter();
  const { elementdata } = router.query;
  const fetchElementDetails = async () => {
    await fetch(
      `https://periodically-servers.herokuapp.com/name/${elementdata}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setElementDataDetail(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchElementDetails();
  }, []);
  console.log(elementDataDetail);
  return (
    <div>
      <Header />
      <PeriodicDetail elementDataDetail={elementDataDetail} />
      <Footer />
    </div>
  );
};

export default elementdata;
