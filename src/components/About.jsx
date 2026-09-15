import { motion } from "framer-motion";
import { UserRound, GraduationCap, Database } from "lucide-react";
import { portfolio } from "../data/portfolio";

const facts = [
  {
    icon: UserRound,
    title: "Developer",
    text: "Building practical software solutions",
  },
  {
    icon: GraduationCap,
    title: "Master's Student",
    text: "Software Engineering",
  },
  {
    icon: Database,
    title: "Database Enthusiast",
    text: "Working with SQL and databases",
  },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-layout">
          <motion.div
            className="about-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="small-label">A LITTLE ABOUT ME</p>

            <h2>
              Turning ideas
              <br />
              into <em>software.</em>
            </h2>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="about-text">
              {portfolio.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="about-facts">
              {facts.map(({ icon: Icon, title, text }, index) => (
                <motion.div
                  className="about-fact"
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="about-fact-icon">
                    <Icon size={20} />
                  </div>

                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}