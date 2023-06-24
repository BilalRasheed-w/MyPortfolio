import { motion } from "framer-motion";
import "./css/About.css";

import Reactimage from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import s3 from "../assets/s3.png";

const animations = {
  hidden: { x: -200 },
  visible: { x: 0, transition: { duration: 2, type: "spring" } },
  hover: { scale: 1.08, transition: { duration: 1, type: "spring" } },
  tap: { scale: 0.95, transition: { duranntion: 1 } },
};

export default function About() {
  return (
    <>
      <section id="about" className="pt-5">
        <div className="container about  pb-md-4 ">
          <h1 className="display-2 text-center text-sm-start text-md-start text-lg-start ">
            About
          </h1>
          <div className="row text-center mt-5 ">
            {/* 1  div    */}
            <div className="col-md-6 col-lg-3 ">
              <motion.div
                variants={animations}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                className="card pt-3 mx-auto mb-5 mb-sm-5 md  "
              >
                <img src={Reactimage} className="card-img-top  " alt="..." />
                <div className="card-body">
                  <h5 className="card-title">React JS</h5>
                  <p className="card-text">
                    react js is one of the most used frontend framework in the
                    world
                  </p>
                </div>
              </motion.div>
            </div>

            {/*   2 div */}
            <div className="col-md-6 col-lg-3">
              <motion.div
                variants={animations}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                className="card pt-2 pt-md-3  mx-auto mb-5 mb-sm-5    "
              >
                <img src={node} className="card-img-top  node " alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Node Js</h5>
                  <p className="card-text ">
                    Nodejs provides a ton of packages to work with like express
                    to write backend
                  </p>
                </div>
              </motion.div>
            </div>
            {/* 3 div    */}
            <div className="col-md-6 col-lg-3">
              <motion.div
                variants={animations}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                className="card   mx-auto mb-5 mb-sm-5  "
              >
                <img src={mongo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">MongoDB</h5>

                  <p className="card-text">
                    mongoDB is a No-sql database and i found it easy for
                    handling data
                  </p>
                </div>
              </motion.div>
            </div>
            {/*   4  div */}
            <div className="col-md-6 col-lg-3 ">
              <motion.div
                variants={animations}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                className="card  mx-auto mb-5 mb-sm-5  "
              >
                <img src={s3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Amazon S3</h5>
                  <p className="card-text">
                    Amazon AWS offers a wide variety of services,and S3 cloud is
                    one of them
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
