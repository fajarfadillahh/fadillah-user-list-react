import React from "react";

// import components
import NavbarContent from "./NavbarContent";

const NavbarMobile = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto max-w-[1440px] bg-white shadow-md md:hidden">
      <NavbarContent />
    </nav>
  );
};

export default NavbarMobile;
