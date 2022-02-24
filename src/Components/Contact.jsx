import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullName: "",
    address: "",
    email: "",
    phoneNo: "",
    massage: "",
  });

  const OnChange = (eva) => {
    const { name, value } = eva.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const submit = () => {
    alert(`
        Full Name: ${data.fullName}
        Address: ${data.address}
        Email: ${data.email}
        Phone No: ${data.phoneNo}
        Massage: ${data.massage}
        `);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={OnChange}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="address"
                  value={data.address}
                  onChange={OnChange}
                  placeholder=" Full Address"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={OnChange}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone No.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phoneNo"
                  value={data.phoneNo}
                  onChange={OnChange}
                  placeholder="Phone No"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Massage
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="massage"
                  value={data.massage}
                  onChange={OnChange}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary mb-5" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
