import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { portfolio } from "../data/portfolio";

const categories = [
  {
    key: "languages",
    title: "Languages",
    icon: Code2
  },
  {
    key: "backend",
    title: "Backend",
    icon: Server
  },
  {
    key: "databases",
    title: "Databases",
    icon: Database
  },
  {
    key: "tools",
    title: "Tools",
    icon: Wrench
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">02 — SKILLS</p>
          <h2>What I work with</h2>
        </div>

        <div className="skills-grid">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                className="skill-card"
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="skill-icon">
                  <Icon size={22} />
                </div>

                <h3>{category.title}</h3>

                <div className="skill-list">
                  {portfolio.skills[category.key].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}