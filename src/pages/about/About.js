import React from "react";
import incomingSoftwareTechnologies from "../../img/about/Incoming-Software-Technologies.jpg";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p className="text-grey">
              Welcome to our software agency! We are a team of skilled software
              developers, designers, and project managers who are passionate
              about building high-quality software solutions for our clients.
              With years of industry experience and a proven track record of
              delivering successful projects, we have the expertise to turn your
              ideas into reality. Our process starts with understanding your
              business needs and goals, and then we work with you to design and
              develop a custom software solution that meets those needs. We
              pride ourselves on our ability to understand our clients' needs
              and provide them with the best possible solution. We are committed
              to building long-lasting relationships with our clients and
              helping them achieve success through the use of technology. Thank
              you for considering us for your software development needs. We
              look forward to working with you!
            </p>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <img src={incomingSoftwareTechnologies} alt="Futures" className="w-100" />
            <Link to="#" className="btn-learn-more">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
