import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2 } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">01 — ABOUT ME</p>
          <h2>Who I am</h2>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-main"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {portfolio.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="detail-card">
              <MapPin size={22} />
              <div>
                <span>Based in</span>
                <strong>{portfolio.location}</strong>
              </div>
            </div>

            <div className="detail-card">
              <GraduationCap size={22} />
              <div>
                <span>Education</span>
                <strong>Software Engineering</strong>
              </div>
            </div>

            <div className="detail-card">
              <Code2 size={22} />
              <div>
                <span>Focus</span>
                <strong>Backend Development</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}