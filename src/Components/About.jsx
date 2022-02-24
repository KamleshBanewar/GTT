import React from "react";
import ComanComp from "./ComanComp";
import Aimg from "../Images/About.png";

function About() {
  return (
    <ComanComp
      title="Wellcome To About Page"
      brand="Gain The Top"
      subTitle="We Are The Team Of Developers Making a Websites"
      btn="Contact US"
      img={Aimg}
    />
  );
}

export default About;
