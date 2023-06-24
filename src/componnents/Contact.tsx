import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      form.current.name.value.trim() === "" ||
      form.current.email.value.trim() === "" ||
      form.current.message.value.trim() === ""
    ) {
      toast.error("Fields Cannot Be Empty");
      return
    }

    emailjs
      .sendForm(
        "service_uglm9qb",
        "template_pdh9td3",
        form.current,
        "MaBzrEgFDiRDKcvl6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("msg sent");
          e.target.reset();
          toast.success("Message Sent");
        },
        (error) => {
          console.log(error.text);
          toast.error("Some Error Occured");
        }
      );
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
                ref={form}
                onSubmit={sendEmail}
                className=" h-100 w-100  d-flex flex-column"
              >
                <h2>get in touch . . .</h2>
                <i className="fa-solid fa-user   icon1  text-white  "></i>
                <input name="name" type="text" placeholder="Your name" />
                <i className="fa-solid fa-envelope  text-white  icon2 fa-xl"></i>
                <input name="email" type="email" id="" placeholder="Email" />
                <textarea name="message" placeholder="message"></textarea>
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
