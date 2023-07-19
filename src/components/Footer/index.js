import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../Footer/footer.css";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer">
      <div className="d-flex justify-content-center social-media-icons-white">
        <a href="https://github.com/Boyd212">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/matthewboyd/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:matthewfive.30a@gmail.com"
          alt="email matthew boyd"
          title="email me at matthewfive.30@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <p className="footer-text">
        <strong>© Matthew Boyd™</strong>Full-Stack Portfolio.All Rights Reserved.
      </p>
    </div>
  );
}
export default Footer;
