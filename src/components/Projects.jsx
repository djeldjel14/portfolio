import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolio } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <div className="projects-intro">
          <div>
            <p className="small-label">
              SELECTED WORK
            </p>

            <h2>
              Things I've <em>built.</em>
            </h2>
          </div>

          <p>
            A selection of projects where I've
            applied programming, databases and
            software engineering concepts to
            practical problems.
          </p>
        </div>

        <div className="projects-list">
          {portfolio.projects.map((project, index) => (
            <motion.article
              className="project"
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live Demo"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}