import { useEffect } from "react";

import "./App.css";
import About from "./componnents/About";
import Contact from "./componnents/Contact";
import Footer from "./componnents/Footer";
import Header from "./componnents/Header";

export default function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
