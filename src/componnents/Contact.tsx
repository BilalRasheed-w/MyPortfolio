import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";

import "./css/Contact.css";
import "react-toastify/dist/ReactToastify.css";
import Mailsent from "../assets/send mail.png";

const animations = {
  initial: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 2, type: "spring", bounce: 0.5 },
  },
  buttonHover: { scale: 1.1 },
  buttonTap: { scale: 0.95 },
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, message);

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      toast.error("Pls fill all the fields");
      return;
    }

    const maildata = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_uglm9qb",
        "template_pdh9td3",
        maildata,
        "MaBzrEgFDiRDKcvl6"
      )
      .then((result) => {
        console.log(result);
        toast.success("Message Sent");
      })
      .catch((error) => {
        console.log("error occured", error);
        toast.error("some error occured");
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <ToastContainer autoClose={4000} closeOnClick theme="colored" />
      <section id="contact" className="mt-5  ">
        <h1 className="display-2 text-center ps-md-5 text-md-start text-lg-start ">
          Contact
        </h1>
        {/* <button onClick={notify}>Notify!</button> */}
        <div className="container contact  rounded-5 ">
          <div className="row ">
            <div className="left text-center col-md-6 ">
              <motion.img
                variants={animations}
                initial="initial"
                whileInView="visible"
                src={Mailsent}
                alt="Sendmail.jpg"
                // the image is downloaded from freepik
                className="img-fluid rounded-5 "
              />
            </div>
            {/* form  */}
            <div className="col-md-6 contact-right   ">
              <form
                onSubmit={sendEmail}
                className=" h-100 w-100  d-flex flex-column"
              >
                <h2>get in touch . . .</h2>
                <i className="fa-solid fa-user   icon1  text-white  "></i>
                <input
                  value={name}
                  name="name"
                  type="text"
                  placeholder="Your name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <i className="fa-solid fa-envelope  text-white  icon2 fa-xl"></i>
                <input
                  value={email}
                  name="email"
                  type="email"
                  id=""
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <textarea
                  value={message}
                  name="message"
                  placeholder="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
                <motion.button
                  variants={animations}
                  whileHover="buttonHover"
                  whileTap="buttonTap"
                  type="submit"
                  className="btn btn-warning"
                >
                  Hire me
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
