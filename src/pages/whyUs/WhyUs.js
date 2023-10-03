import React from "react";
// import { Link } from "react-router-dom";
import "./WhyUs.css";
import whyUs from "../../img/why-us.png";
const WhyUs = () => {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
            <div className="content">
              <h3>
                Why <strong>US</strong>
              </h3>
              <p>
                With years of industry experience and a proven track record of
                delivering successful projects, we have the expertise to turn
                your ideas into reality. Our process starts with understanding
                your business needs and goals, and then we work with you to
                design and develop a custom software solution that meets those
                needs.
              </p>
            </div>

            {/* <div className="accordion-list">
              <ul>
                <li>
                  <Link
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span> Non consectetur a erat nam at lectus urna
                    duis? <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    id="accordion-list-1"
                    className="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </li>

                <li>
                  <Link
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    className="collapsed"
                  >
                    <span>02</span> Feugiat scelerisque varius morbi enim nunc?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    id="accordion-list-2"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>

                <li>
                  <Link
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    className="collapsed"
                  >
                    <span>03</span> Dolor sit amet consectetur adipiscing elit?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </Link>
                  <div
                    id="accordion-list-3"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>

          <div
            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            style={{ backgroundImage: `url(${whyUs})` }}
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
