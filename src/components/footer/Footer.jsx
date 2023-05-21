import React from "react";

const Footer = () => {
  return (
    <footer className="container border-t border-gray-300 py-6 text-center">
      <h1 className="font-semibold text-gray-900">
        &copy; {new Date().getFullYear()} - Develop by Fajar Fadillah A ❤️
      </h1>
    </footer>
  );
};

export default Footer;
