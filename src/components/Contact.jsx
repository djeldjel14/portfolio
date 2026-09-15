import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="contact-inner"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <p className="small-label">
            LET'S CONNECT
          </p>

          <h2>
            Have a project or
            <br />
            an opportunity <em>in mind?</em>
          </h2>

          <p>
            Have an opportunity, idea or project
            you'd like to discuss? I'd love to hear
            from you.
          </p>

          <a
            href={`mailto:${portfolio.email}`}
            className="contact-button"
          >
            <Mail size={18} />
            Get in touch
            <ArrowUpRight size={18} />
          </a>

          <p className="contact-email">
            {portfolio.email}
          </p>
        </motion.div>
      </div>
    </section>
  );
}