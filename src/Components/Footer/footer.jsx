import React from "react";
import "./footer.css";
import Logo from "../Logo/logo";
import footericon from "../../Assets/main-assets/footer-icon.png";
import Phone from "@iconscout/react-unicons/icons/uil-phone-times";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Email from "@iconscout/react-unicons/icons/uil-envelope-edit";
import Location from "@iconscout/react-unicons/icons/uil-location-point";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div class="container show-logo">
          <Logo id="footer-logo " className="show-on-mobile" />
        </div>
        <div className="container footer-section">
          <Logo id="footer-logo " className="hide-on-mobile" />
          <div id="footer">
            <div className="footer">
              <div className="footer-heading">
                <img src={footericon} alt="footericon" height="42px" />
                <h2>Company</h2>
              </div>
              <ul>
                <li>
                  <Link to="/about" as="li">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" as="li">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/community" as="li">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer">
              <div className="footer-heading">
                <img src={footericon} alt="footericon" height="42px" />
                <h2>Privacy</h2>
              </div>
              <ul>
                <li>
                  <Link to="/privacy" as="li">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" as="li">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer replaced-footer">
              <div className="footer-heading">
                <img src={footericon} alt="footericon" height="42px" />
                <h2>Help</h2>
              </div>
              <ul>
                <li>
                  <Link to="/contact" as="li">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/howitworks/model" as="li">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" as="li">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" as="li">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer replaced-footer">
              <div className="footer-heading">
                <img src={footericon} alt="footericon" />
                <h2>Download app</h2>
              </div>
              <ul>
                <li>
                  <Link to="/about" as="li">
                    Andriod
                  </Link>
                </li>
                <li>
                  <Link to="/comingsoon" as="li">
                    Ios
                  </Link>
                </li>
              </ul>

              <span class="coming-soon">
                <b>Coming Soon!</b>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}

        <div className="mobilefooter_container">
          <div className="footer mobile-footer">
            <div className="footer-heading">
              <img src={footericon} alt="footericon" height="42px" />
              <h2>Help</h2>
            </div>
            <ul>
              <li>Contact</li>
              <li>
                <Link to="/howitworks/model" as="li">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/faqs" as="li">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer mobile-footer">
            <div className="footer-heading">
              <img src={footericon} alt="footericon" height="42px" />
              <h2>Download</h2>
            </div>
            <ul>
              <li>
                <Link to="/contact" as="li">
                  Andriod
                </Link>
              </li>
              <li>
                <Link to="/howitworks/model" as="li">
                  IOS
                </Link>
              </li>

              <li>
                <Link to="/faqs" as="li">
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footercontact-info">
          <h2>Contact Info</h2>

          <div className="footercontact-text">
            <div className="box">
              <div className="icon">
                <Phone />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+2347062445649</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <Whatsapp />
              </div>
              <div className="text">
                <h3>Whatsapp</h3>
                <p>+2347062445649</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <Email />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>
                  premiummodelsng
                  <br />
                  @gmail.com
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <Location />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <small>Copyright &copy; 2022 PREMIUM MODEL</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
