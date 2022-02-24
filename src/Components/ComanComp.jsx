import React from "react";
import { NavLink } from "react-router-dom";
import "./ComanComp.css";

function ComanComp(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1>
                    {" "}
                    {props.title}
                    <strong className="brand"> {props.brand} </strong>
                  </h1>
                  <h4 id="main_text" className="my-32">
                    {props.subTitle}{" "}
                  </h4>
                  <div className="btn">
                    <NavLink to="/contact" className="btn_start">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    id="main_img"
                    src={props.img}
                    alt="home img"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ComanComp;
