import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-100 py-6 px-6 text-center">
      <div className="flex justify-center gap-4 mb-3">
        <a href="https://github.com/adeolaquadri" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
          GitHub
        </a>
        <a href="https://linkedin.com/in/adeola-quadri" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
          LinkedIn
        </a>
        <a href="mailto:adeolaakorede27@gmail.com" className="hover:text-indigo-400">
          Email
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Adeola Quadri. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
