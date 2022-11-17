import React from "react";
import "./footer.css";
import Logo from "../Logo/logo";
import footericon from "../../Assets/main-assets/footer-icon.png";
import Phone from "@iconscout/react-unicons/icons/uil-phone-times";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Email from "@iconscout/react-unicons/icons/uil-envelope-edit";
import Location from "@iconscout/react-unicons/icons/uil-location-point";

const Footer = () => {
  return (
    <>
      <footer className="container footer-container">
        <div className="footer-section container ">
          <Logo id="footer-logo" />

          <div className="footer">
            <div className="footer-heading">
              <img src={footericon} alt="" height="42px" />
              <h2>Company</h2>
            </div>
            <ul>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
            </ul>
          </div>

          <div className="footer">
            <div className="footer-heading">
              <img src={footericon} height="42px" />
              <h2>Privacy</h2>
            </div>
            <ul>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className="footer">
            <div className="footer-heading">
              <img src={footericon} height="42px" />
              <h2>Help</h2>
            </div>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">How it Works</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
            </ul>
          </div>

          <div className="footer">
            <div className="footer-heading">
              <img src={footericon} height="42px" />
              <h2>Download app</h2>
            </div>
            <ul>
              <li>
                <a href="">Andriod</a>
              </li>
              <li>
                <a href="">Ios</a>
              </li>
            </ul>

            <span>
              <b>Coming Soon!</b>
            </span>
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
                <p>premiummodelsng@gmail.com</p>
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
