import { motion } from "framer-motion";
import "./css/Navbar.css";

const animation = {
  hoverBrand: { scale: 1.03, transition: { duration: 1, type: "spring" } },
  brandTap: { scale: 0.95 },
  hoverLinks: {
    scale: 1.1,
    y: "-1px",
  },
  linksTap: { scale: 0.95 },
};

export default function Navbar() {
  return (
    <>
      <div className="container ">
        <nav className="navbar navbar-expand-lg pt-3  ">
          <div className="container-fluid">
            <motion.a
              variants={animation}
              whileHover="hoverBrand"
              whileTap="brandTap"
              className="navbar-brand"
              href="#"
            >
              <span className=" brand display-6  ">Bilal Rasheed</span>
            </motion.a>
            <button
              className="navbar-toggler text-white  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-white">
                <i className=" fa-solid fa-bars text-white  nav-ico "></i>
              </span>
            </button>

            <div className="collapse navbar-collapse  " id="navbarNav">
              <ul className="navbar-nav text-center ">
                <li className="nav-item ">
                  <motion.a
                    variants={animation}
                    whileHover="hoverLinks"
                    whileTap="linksTap"
                    className="nav-link  me-4 fs-5"
                    href="#"
                  >
                    Home
                  </motion.a>
                </li>
                <li className="nav-item">
                  <motion.a
                    variants={animation}
                    whileHover="hoverLinks"
                    whileTap="linksTap"
                    className="nav-link me-4 fs-5"
                    href="#about"
                  >
                    About
                  </motion.a>
                </li>
                <li className="nav-item">
                  <motion.a
                    variants={animation}
                    whileHover="hoverLinks"
                    whileTap="linksTap"
                    className="nav-link me-4  fs-5 "
                    href="#contact"
                  >
                    Contact
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
