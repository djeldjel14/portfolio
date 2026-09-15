import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const profileImage =
  "https://res.cloudinary.com/qwpmd4u0/image/upload/f_auto,q_auto/ChatGPT_Image_Sep_15_2026_at_11_08_32_AM";
import { portfolio } from "../data/portfolio";

const techIcons = {
  java: FaJava,
  react: FaReact,
  spring: SiSpringboot,
  javascript: FaJsSquare,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  git: FaGitAlt,
  github: FaGithub,
  html: FaHtml5,
  css: FaCss3Alt,
  tailwind: SiTailwindcss,
};

const floatingTech = [
  {
    name: "Java",
    icon: "java",
    className: "tech-java",
    color: "#ED8B00",
  },
  {
    name: "GitHub",
    icon: "github",
    className: "tech-github",
    color: "#F0F0F0",
  },
  {
    name: "React",
    icon: "react",
    className: "tech-react",
    color: "#61DAFB",
  },
  {
    name: "Spring Boot",
    icon: "spring",
    className: "tech-spring",
    color: "#6DB33F",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    className: "tech-js",
    color: "#F7DF1E",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    className: "tech-postgres",
    color: "#4169E1",
  },
  {
    name: "MySQL",
    icon: "mysql",
    className: "tech-mysql",
    color: "#4479A1",
  },
  {
    name: "Git",
    icon: "git",
    className: "tech-git",
    color: "#F05032",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="grid-background" />
      </div>

      <div className="hero-container">
        {/* LEFT SIDE */}
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="status">
            <span className="status-dot" />
            Available for opportunities
          </div>

          <p className="hero-label">
            SOFTWARE ENGINEERING · BACKEND DEVELOPMENT
          </p>

          <h1>
            Hi, I'm{" "}
            <span className="hero-name">
              Khaled.
            </span>

            <br />

            I build

            <br />

            <span className="outline-text">
              software.
            </span>
          </h1>

          <p className="hero-description">
            {portfolio.description}
          </p>

          <div className="hero-location">
            <MapPin size={15} />
            {portfolio.location}
          </div>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="hero-button primary"
            >
              Explore My Work
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#contact"
              className="hero-button secondary"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          {/* Large orbital rings */}
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          {/* Small orbit particles */}
          <span className="orbit-dot dot-one" />
          <span className="orbit-dot dot-two" />
          <span className="orbit-dot dot-three" />

          {/* Portrait */}
          <div className="profile-wrapper">
            <div className="profile-glow" />
            <div className="profile-ring" />

            <img
               src={profileImage}
               alt="Khaled Djeldjel"
               className="profile-image"
               draggable="false"
               onContextMenu={(e) => e.preventDefault()}
            />

            <div className="profile-shine" />
          </div>

          {/* Floating technologies */}
          <div className="tech-orbit">
            {floatingTech.map(
              (technology, index) => {
                const Icon =
                  techIcons[technology.icon];

                return (
                  <motion.div
                    key={technology.name}
                    className={`floating-tech ${technology.className}`}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration:
                        3 + index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.15,
                    }}
                  >
                    <Icon
                      style={{
                       color: technology.color,
                      }}
                    />

                    <span>
                      {technology.name}
                    </span>
                  </motion.div>
                );
              }
            )}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="scroll-down"
      >
        <span>Scroll</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}