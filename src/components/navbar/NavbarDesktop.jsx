import React from "react";

// import components
import NavbarContent from "./NavbarContent";

const NavbarDesktop = () => {
  return (
    <div className="hidden md:fixed md:inset-x-0 md:top-0 md:z-50 md:mx-auto md:block md:max-w-[1440px] md:bg-white md:shadow-md">
      <NavbarContent />
    </div>
  );
};

export default NavbarDesktop;
