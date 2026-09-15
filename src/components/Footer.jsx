import { ArrowUp } from "lucide-react";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a href="#" className="footer-logo">
            KD<span>.</span>
          </a>

          <p>
            © {new Date().getFullYear()}{" "}
            {portfolio.name}
          </p>
        </div>

        <div className="footer-links">
          <a
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="#" className="back-top">
            <ArrowUp size={16} />
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}