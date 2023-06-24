import { motion } from "framer-motion";

import "./css/Footer.css";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="container  text-capitalize  text-white">
          <div className="row">
            <div className=" text-center text-sm-center text-md-start col-md-6  ">
              <h2 className="  footerrh2 ">useful links</h2>
              <ul className="list-unstyled ">
                <li>
                  <a className="text-white text-decoration-none" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <motion.a
                    className="text-white text-decoration-none"
                    href="#about"
                  >
                    About
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    className="text-white text-decoration-none"
                    href="#contact"
                  >
                    Contact
                  </motion.a>
                </li>
              </ul>
            </div>
            <div className=" text-center text-sm-center text-md-start col-md-6">
              <h2 className=" footerrh2">Contact Info</h2>
              <div className="d-flex  align-items-center justify-content-center justify-content-lg-start justify-content-md-start ">
                <a
                  href="https://github.com/BilalRasheed-w?tab=repositories"
                  target="blank"
                >
                  <motion.i
                    initial={{ scale: 0.5, opacity: 0.5 }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                      transition: { type: "spring", bounce: 0.5, duration: 1 },
                    }}
                    className="fa-brands fa-square-github footericon1 "
                  ></motion.i>
                </a>
                <span>BilalRaseed-w</span>
              </div>
              <div className=" d-flex  align-items-center justify-content-center  justify-content-lg-start justify-content-md-start ">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="blank"
                >
                  <motion.i
                    initial={{ scale: 0.5, opacity: 0.5 }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                      transition: { type: "spring", bounce: 0.5, duration: 1 },
                    }}
                    className="fa-solid fa-envelope footericon2 "
                  ></motion.i>
                </a>
                <span className="text-lowercase  ">
                  BilalRasheedw@gmail.com
                </span>
              </div>
            </div>
            <hr className="text-white mt-4 mb-2 mb-lg-0 pt-lg-2 " />
            <p className=" copyright text-center text-capitalize ">
              copyright &copy; 2023 -all rights reserverd || designed by : Bilal
              Rasheed
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
