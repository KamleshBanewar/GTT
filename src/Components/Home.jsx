import React from "react";
import ComanComp from "./ComanComp";
import Main from "../Images/Home_Main.png";

function Home() {
  return (
    <>
      <ComanComp
        title="Grow Your Business with"
        brand="Gain The Top"
        subTitle="We Are The Team Of Developers Making a Websites"
        btn="Get Start"
        img={Main}
      />
    </>
  );
}

export default Home;
