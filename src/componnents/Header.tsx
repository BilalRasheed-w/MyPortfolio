import "./css/Header.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div>
      <section id="header">
        <Navbar />
        <Hero />
        {/* Github icon */}
        <a
          href="https://github.com/BilalRasheed-w?tab=repositories"
          target="blank"
        >
          <motion.i
            initial={{ x: "-100vw", y: "100vh" }}
            animate={{
              x: 0,
              y: 0,
              transition: { duration: 2, type: "spring", delay: 0.5 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="fa-brands fa-github mainicon1 d-none d-sm-none d-md-none d-lg-block "
          ></motion.i>
        </a>
        {/* maill icon */}
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"
         target="blank"
        >
          <motion.i
            initial={{ y: -150 }}
            animate={{
              y: 0,
              transition: { duration: 2, type: "spring", delay: 0.5 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="fa-solid fa-envelope mainicon2 d-none d-sm-none d-md-none d-lg-block "
          ></motion.i>
        </a>
        {/* shape divider */}

        <div className="custom-shape-divider-bottom-1687438453">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}
