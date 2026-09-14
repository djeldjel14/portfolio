import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolio } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading projects-heading">
          <div>
            <p className="section-label">03 — PROJECTS</p>
            <h2>Things I've built</h2>
          </div>

          <p>
            A selection of academic and personal projects
            demonstrating my approach to software development.
          </p>
        </div>

        <div className="projects-list">
          {portfolio.projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub`}
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} Demo`}
                >
                  <ArrowUpRight size={22} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}