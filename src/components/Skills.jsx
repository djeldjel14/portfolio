import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaCode
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiTailwindcss
} from "react-icons/si";

import { portfolio } from "../data/portfolio";

const icons = {
  java: {
    icon: FaJava,
    color: "#ED8B00",
  },

  react: {
    icon: FaReact,
    color: "#61DAFB",
  },

  spring: {
    icon: SiSpringboot,
    color: "#6DB33F",
  },

  javascript: {
    icon: FaJsSquare,
    color: "#F7DF1E",
  },

  postgresql: {
    icon: SiPostgresql,
    color: "#4169E1",
  },

  mysql: {
    icon: SiMysql,
    color: "#4479A1",
  },

  git: {
    icon: FaGitAlt,
    color: "#F05032",
  },

  github: {
    icon: FaGithub,
    color: "#F0F0F0",
  },

  html: {
    icon: FaHtml5,
    color: "#E34F26",
  },

  css: {
    icon: FaCss3Alt,
    color: "#1572B6",
  },

  tailwind: {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  c: {
    icon: FaCode,
    color: "#A8B9CC",
  },

  ocaml: {
    icon: FaCode,
    color: "#EC6813",
  },

  sql: {
    icon: FaCode,
    color: "#8B5CF6",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
          <div className="skills-heading">
             <p className="small-label">
               TECHNOLOGIES I WORK WITH
             </p>

             <h2>
             Tools & <em>technologies.</em>
             </h2>
          </div>

        <div className="tech-grid">
          {portfolio.technologies.map(
            (technology, index) => {
             const { icon: Icon, color } =
                icons[technology.icon];

              return (
                <motion.div
                  key={technology.name}
                  className="tech-card"
                  initial={{
                    opacity: 0,
                    y: 25
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.04
                  }}
                  whileHover={{
                    y: -7
                  }}
                >
                  <div className="tech-card-icon">
                    <Icon
                       style={{
                        color: color,
                       }}
                    />
                  </div>

                  <div>
                    <h3>{technology.name}</h3>
                    <span>
                      {technology.category}
                    </span>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}