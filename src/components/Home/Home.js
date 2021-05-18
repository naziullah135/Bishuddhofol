import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Shop from "./Shop/Shop";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Shop />
      <Footer />
    </div>
  );
};

export default Home;
