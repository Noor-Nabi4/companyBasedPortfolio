import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./css/style.css";
import "swiper/css";
import "./js/main";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Clients from "./pages/clients/Clients";
import About from "./pages/about/About";
import WhyUs from "./pages/whyUs/WhyUs";
import Skills from "./pages/skills/Skills";
import Services from "./pages/services/Services";
import CTA from "./pages/cTA/CTA";
import Portfolio from "./pages/portfolio/Portfolio";
import Team from "./pages/team/Team";
import Pricing from "./pages/pricing/Pricing";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [preloader, setPreLoader] = useState(true);
  setTimeout(() => {
    setPreLoader(false);
  }, 1000);
  return (
    <>
      <Header />
      <Home />
      <main className="main">
        <Clients />
        <About />
        <WhyUs />
        <Skills />
        <Services />
        {/* <CTA /> */}
        <Portfolio />
        <Team />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      {preloader && <div id="preloader"></div>}
      {
        <Link
          to="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </Link>
      }
    </>
  );
}

export default App;
