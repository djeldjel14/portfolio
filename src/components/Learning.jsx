import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Learning() {
  return (
    <section className="section learning-section">
      <div className="container">
        <motion.div
          className="learning-card"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="section-label">CURRENTLY LEARNING</p>

            <h2>
              Always improving.
              <br />
              Always building.
            </h2>

            <p className="learning-description">
              Technology changes quickly, so I'm continuously
              expanding my skills and working on practical projects.
            </p>
          </div>

          <div className="learning-list">
            {portfolio.learning.map((item, index) => (
              <div className="learning-item" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}