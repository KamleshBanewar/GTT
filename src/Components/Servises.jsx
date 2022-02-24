import React from "react";
import Scard from "./Card";
import Sdata from "./Sdata";

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="tab-center text-center ">Our Services</h1>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {Sdata.map((val, ind) => {
                return <Scard key={ind} img={val.imgsr} head={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
