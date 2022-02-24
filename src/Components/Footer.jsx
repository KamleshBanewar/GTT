import React from "react";

function Footer() {
  let yar = new Date().getFullYear();
  // console.log(yar);

  return (
    <>
      <footer className="bg-light text-center mt-5">
        <p>© {yar} Gain The Top. All Rights Reserved | Terms And Conditions</p>
        <p>Developed By Kamlesh Banewar</p>
      </footer>
    </>
  );
}

export default Footer;
