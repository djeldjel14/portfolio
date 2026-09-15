import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          K<span>D</span>.
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk
        </a>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}