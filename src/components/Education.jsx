import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="section education-section"
    >
      <div className="container">

        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <p className="small-label">
            EDUCATION
          </p>

          <h2>
            My academic <em>journey.</em>
          </h2>
        </motion.div>

        <div className="education-list">
          {portfolio.education.map((item, index) => (
            <motion.article
              className="education-item"
              key={item.degree}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="education-icon">
                <GraduationCap size={21} />
              </div>

              <div className="education-info">
                <span>{item.period}</span>

                <h3>
                  {item.degree}
                </h3>

                <p>
                  {item.institution}
                </p>
              </div>

              <div className="education-index">
                {String(index + 1).padStart(2, "0")}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}