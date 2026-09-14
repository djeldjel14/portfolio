import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">05 — CONTACT</p>

          <h2>
            Let's build something
            <br />
            <span className="gradient-text">together.</span>
          </h2>

          <p>
            I'm open to internships, junior developer
            opportunities, collaborations and interesting
            software projects.
          </p>

          <a
            href={`mailto:${portfolio.email}`}
            className="button primary contact-button"
          >
            <Mail size={18} />
            Send Me an Email
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}