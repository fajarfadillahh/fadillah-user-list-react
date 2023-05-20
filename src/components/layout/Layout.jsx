import React from "react";

// import components
import NavbarMobile from "../navbar/NavbarMobile";
import NavbarDesktop from "../navbar/NavbarDesktop";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarMobile />
      <NavbarDesktop />
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
