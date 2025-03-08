import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close dropdown if clicked outside
  

  return (
    <nav className="navbar">
      <div className="logo">ZEN PDF</div>
      <div className="Fundraiser">
        <Link to="/Fundraiser" onClick={() => setMenuOpen(false)}>🧡Fundraiser🧡</Link>
      </div>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/extract-pages" onClick={() => setMenuOpen(false)}>ExtractPages</Link></li>
        <li><Link to="/merge" onClick={() => setMenuOpen(false)}>Merge PDF</Link></li>
        <li><Link to="/split" onClick={() => setMenuOpen(false)}>Split PDF</Link></li>
        <li><Link to="/compress" onClick={() => setMenuOpen(false)}>Compress PDF</Link></li>
        <li><Link to="/image-to-pdf" onClick={() => setMenuOpen(true)}>ImageToPDF</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
