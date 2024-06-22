import React from "react";
import { Nav } from "./component/Navbar/Nav.jsx";
import { Footer } from "./component/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
