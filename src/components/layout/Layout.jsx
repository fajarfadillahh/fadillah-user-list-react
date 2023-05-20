import React from "react";

// import components
import NavbarMobile from "../navbar/NavbarMobile";
import NavbarDesktop from "../navbar/NavbarDesktop";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarMobile />
      <NavbarDesktop />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
