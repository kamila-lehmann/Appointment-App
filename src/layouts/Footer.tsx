import { FunctionComponent } from "react";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";

const Footer: FunctionComponent = () => {
  return (
    <footer className="main-footer">
      <a href="#top" aria-label="Click for back to top">
        Back to top &#x2191;
      </a>
      <div className="footer-grid">
        <div className="contact-info">
          <span>Appointment App</span>
          <address>111 City Street</address>
          <address>00-000 City, Poland</address>
          <span>Tel: +48 123-456-789</span>
          <br />
          <span>E-mail: example@example.com</span>
        </div>
        <div className="social-media">
          <span>Follow Us!</span>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="blank">
              <img src={fb} alt="facebook" height="30" width="30" />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <img src={insta} alt="instagram" height="30" width="30" />
            </a>
          </div>
        </div>
      </div>
      <span className="copy">Appointment App - &copy;2022</span>
    </footer>
  );
};

export default Footer;
