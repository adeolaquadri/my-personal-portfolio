import React from "react";

const Navbar = () => (
  <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
    <h1 className="text-2xl font-bold text-indigo-600">Adeola Quadri</h1>
    <ul className="flex gap-4">
      {["About", "Projects", "Contact"].map((link) => (
        <li key={link}>
          <a href={`#${link.toLowerCase()}`} className="hover:text-indigo-600">{link}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
