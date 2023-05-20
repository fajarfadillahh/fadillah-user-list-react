import React from "react";

// import components
import NavbarContent from "./NavbarContent";

const NavbarMobile = () => {
  return (
    <nav className="md:hidden">
      <NavbarContent />
    </nav>
  );
};

export default NavbarMobile;
