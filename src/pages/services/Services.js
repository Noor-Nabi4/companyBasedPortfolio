import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
const Services = () => {
  let aosDely = 100;
  const services = [
    {
      name: "Web development",
      logo: "",
      describe:
        "With careful design and amazing software engineering skills, we exploit these recent technological developments to create customized solutions for any industry.",
      link: "",
    },
    {
      name: "Mobile Development",
      logo: "",
      describe:
        "Our experts in Mobile Application Development have considerable cross-platform and native app experience. Tired of searching for the finest solutions for mobile app development that offer value and quality? Let's create fantastic mobile apps together!",
      link: "",
    },
    {
      name: "UX/UI Design",
      logo: "",
      describe:
        "Ready to make your user interface better? We are here to help you out. A user experience is determined by the user interface. To help them get their UI/UX concept right, we partner with companies from around the globe.",
      link: "",
    },
    {
      name: "DevOps",
      logo: "",
      describe:
        "We assure you the highest quality agile development process which will not only shorten the systems development life cycle but also provide continuous delivery with high software quality.",
      link: "",
    },
    {
      name: "Digital Marketing",
      logo: "",
      describe:
        "We have assisted firms ranging from startups to mid-level corporations in achieving their positioning objectives. Our digital marketing approach is one-of-a-kind, and it will help you develop massively and sustainably.",
      link: "",
    },
    {
      name: "CyberSecurity",
      logo: "",
      describe:
        "Our CyberSecurity team is glorious, this team provides you with all cybersecurity services, and we have many experts in this field. We Provide network security, Cloud security, and internet of thing (IoT) security.",
      link: "",
    },
    {
      name: "AI/ML",
      logo: "",
      describe:
        "Our AI/ML include individuals with expertise in areas such as data science, software engineering, and machine learning. They work together to collect and analyze large amounts of data, design and implement algorithms, and train and deploy models.",
      link: "",
    },
  ];
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          {/* <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p> */}
        </div>

        <div className="row">
          {services.map((service) => (
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch custom mb-2"
              data-aos="zoom-in"
              data-aos-delay={(aosDely += 100)}
              key={service.name}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4 className="text-center">
                  <img src={service.logo} alt="" />
                </h4>

                <h4 className="text-center">{service.name}</h4>
                <p>{service.describe}</p>
                <br />
                <h4 className=""
                    style={{
                      position: "fixed",
                      bottom: "30px",
                      left:0,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}>
                  <Link
                    to=""
                  >
                    Lern More
                  </Link>
                </h4>
              </div>
            </div>
          ))}

          {/* <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4>
                <Link to="">Sed ut perspici</Link>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4>
                <Link to="">Magni Dolores</Link>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-layer"></i>
              </div>
              <h4>
                <Link to="">Nemo Enim</Link>
              </h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
