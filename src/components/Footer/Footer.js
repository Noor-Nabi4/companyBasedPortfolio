import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form>
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Noor</h3>
              <p>
                Ghulshan Iqbal Town <br />
                Okara, 56300
                <br />
                Pakistan <br />
                <br />
                <strong>Phone:</strong> +923056466676
                <br />
                <strong>Email:</strong> gcnoor6@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link to="#">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link to="#">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link to="#">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Terms of service</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Privacy policy</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link to="#">Web Design</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Web Development</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Product Management</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link to="#">Marketing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="#">Graphic Design</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-links mt-3">
                <Link to="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </Link>
                <Link to="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </Link>
                <Link to="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </Link>
                <Link to="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </Link>
                <Link to="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Hawkscenter </span>
          </strong>
          All Rights Reserved
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. --> */}
          {/* <!-- You can delete the links only if you purchased the pro version. --> */}
          {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
          {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ --> */}
          Designed by <Link to="https://hawkscenter.co/">hawkscenter</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
