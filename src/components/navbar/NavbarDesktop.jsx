import React from "react";

// import components
import NavbarContent from "./NavbarContent";

const NavbarDesktop = () => {
  return (
    <div className="hidden md:block">
      <NavbarContent />
    </div>
  );
};

export default NavbarDesktop;
