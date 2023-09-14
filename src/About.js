import React from "react";
import HeroSection from "./components/HeroSection";
import { UseProviders } from "./context/ProductContext";
const About = () => {
  const {myName} = UseProviders();
  const data = {
    name: "Mrk Ecommerce",
  };

  return (
  <>
    {myName}
    <HeroSection myData={data} />
  </>
  );
};

export default About;
