import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a href="#" className="logo">
            KD<span>.</span>
          </a>

          <p>
            © {new Date().getFullYear()} {portfolio.name}. Built with React.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          <a href="#" className="back-top">
            <ArrowUp size={18} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}