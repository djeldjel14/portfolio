import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="logo">
          KD<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}