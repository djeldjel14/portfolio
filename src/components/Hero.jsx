import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { portfolio } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">
            SOFTWARE ENGINEERING · BACKEND DEVELOPMENT
          </p>

          <h1>
            Hi, I'm{" "}
            <span className="gradient-text">
              Khaled.
            </span>
            <br />
            I build software
            <br />
            that matters.
          </h1>

          <p className="hero-description">
            {portfolio.description}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button primary">
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="button secondary">
              Get In Touch
            </a>
          </div>

          <div className="social-links">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span>developer.java</span>
            </div>

            <div className="code-content">
              <div>
                <span className="code-number">01</span>
                <span className="code-keyword">public class</span>{" "}
                <span className="code-class">Developer</span>{" "}
                {"{"}
              </div>

              <div>
                <span className="code-number">02</span>
                {"  "}
                <span className="code-keyword">private</span>{" "}
                <span className="code-type">String</span>{" "}
                name = <span className="code-string">"Khaled"</span>;
              </div>

              <div>
                <span className="code-number">03</span>
                {"  "}
                <span className="code-keyword">private</span>{" "}
                <span className="code-type">String</span>{" "}
                focus = <span className="code-string">"Backend"</span>;
              </div>

              <div>
                <span className="code-number">04</span>
                {"  "}
                <span className="code-keyword">private</span>{" "}
                <span className="code-type">boolean</span>{" "}
                learning = <span className="code-value">true</span>;
              </div>

              <div>
                <span className="code-number">05</span>
              </div>

              <div>
                <span className="code-number">06</span>
                {"  "}
                <span className="code-keyword">public void</span>{" "}
                <span className="code-method">build</span>() {"{"}
              </div>

              <div>
                <span className="code-number">07</span>
                {"    "}
                <span className="code-method">solveProblems</span>();
              </div>

              <div>
                <span className="code-number">08</span>
                {"    "}
                <span className="code-method">keepLearning</span>();
              </div>

              <div>
                <span className="code-number">09</span>
                {"  "}
                {"}"}
              </div>

              <div>
                <span className="code-number">10</span>
                {"}"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}