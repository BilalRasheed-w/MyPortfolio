import { motion } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";

import "./css/Hero.css";
import heroImg from "../assets/sysadmin_03.jpg";

const animation = {
  initial: { scale: 0.8, opacity: 0 },
  final: {
    scale: 1,
    opacity: 1,
    ease: "easeIn",
    transition: { duration: 2, type: "spring", bounce: 0.55, delay: 0.5 },
  },
  buttonHover: { scale: 1.1 },
  buttonTap: { scale: 0.95 },
};

export default function Hero() {
  return (
    <>
      <div className="container hero   ">
        <div className="row">
          <div className="hero-left text-center mt-sm-5 text-sm-center mt-md-5 text-md-center  col-md-6 text-lg-start  col-lg-6 text-xl-start col-xl-6  ">
            <h2 className="fw-semibold text-white mt-md-3 mt-lg-3 mb-lg-4 text-capitalize  ">
              hi , i'm
              <span className="ms-2 ms-md-3 ms-lg-3" style={{ color: "gold" }}>
                <Typewriter
                  words={["Rasheed", " Mern Stack Developer"]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </h2>
            <p className="lead mb-lg-4 heroPara text-capitalize ">
              This is my Offical Portfolio website and this website contains all
              info about the technologies i use when building WebApps
            </p>
            <a href="#contact">
              <motion.button
                variants={animation}
                whileHover="buttonHover"
                whileTap="buttonTap"
                type="submit"
                className=" btn btn-warning"
              >
                Contact
              </motion.button>
            </a>
          </div>
          <div className=" d-none d-sm-none d-md-block d-lg-block  col-md-6 mt-md-5  right text-center">
            <motion.img
              variants={animation}
              initial="initial"
              animate="final"
              drag
              dragConstraints={{ top: -1, right: -1, bottom: -1, left: -1 }}
              dragElastic={0.1}
              src={heroImg}
              // the above image is downloaded from freepik
              alt="codingImg"
              className="img-fluid  rounded-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
