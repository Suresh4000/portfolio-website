import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">

          {/* Logo */}
          <div className="logo">
            <img src="/logo3.svg" alt="Portfx Logo" className="logo-img" />
           
          </div>

          {/* Desktop & Tablet Menu */}
          <nav className="menu-desktop">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>

          {/* Right side buttons */}
          <div className="header-right">
            <button className="hire-btn">Hire Me</button>

            {/* Mobile Hamburger */}
            <button onClick={() => setOpen(!open)} className="hamburger">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <button className="hire-btn mobile-hire">Hire Me</button>
        </div>
      )}
    </header>
  );
}
