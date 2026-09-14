import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">04 — EDUCATION</p>
          <h2>My academic journey</h2>
        </div>

        <div className="timeline">
          {portfolio.education.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="timeline-icon">
                <GraduationCap size={20} />
              </div>

              <div className="timeline-content">
                <span className="timeline-period">
                  {item.period}
                </span>

                <h3>{item.degree}</h3>

                <h4>{item.institution}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}