import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Container } from "@material-ui/core";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="body">
          <div className="container">
            <div className="sec about-us">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                velit iusto ipsum perspiciatis eveniet tempore magni? Cupiditate
                quibusdam corporis consectetur!
            </p>
              <ul className="social-icon">
                <li>
                  <a href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <YouTubeIcon />{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="sec quick-links">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Our Teams</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
              </ul>
            </div>
            <div className=" sec quick-links">
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">License</a>
                </li>
              </ul>
            </div>
            <div className="sec contact-us">
              <h2>Contact us</h2>
              <ul className="info">
                <li>
                  <p>
                    San Francisco <br />
                  772 East Olive Ave.Flemington, SF 08822
                </p>
                </li>
                <li>
                  <p>
                    <a href="tel:+01234567890">+880 0144480782</a>
                  </p>
                  <p>
                    <a href="tel:+01234567890">+880 0144480782</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="bishuddhofol@gmail.com">Bishuddhofol@gmail.com</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-sec">
          <p>Copyright &copy; {new Date().getFullYear()} All Right Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
