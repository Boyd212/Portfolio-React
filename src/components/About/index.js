import image from "../../assets/images/Matt.jpg";
import "./about.css";
import MainTitle from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import Particles from "../Particles/particles";

const About = () => {
  return (
    <>
      <div className="about-me">
        <section className="about-section">
          <h1 className="hero-heading">Matthew Boyd</h1>
          <h2>Full Stack Developer</h2>
          <div>
            <img src={image} alt="Matthew Boyd" />
          </div>
          <p className="content">
            Current student at Rice University's Full Stack Developed Bootcamp and UX/UI enthusiast
            based in Houston, TX.  With passion for learning new things, I am seeking to change careers and learn and grow as a full-time Web Developer.
          </p>
          <a
            href="mailto:matthewfive.30@gmail.com"
            alt="email matthew boyd"
            title="email me at matthewfive.30@gmail.com"
            className="btn"
          >
            Get In Touch
          </a>
          <div className="hidden d-flex justify-content-center social-media-icons">
            <div className="hide">
              <a href="https://github.com/Boyd212">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/matthewboyd/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="mailto:matthewfive.30@gmail.com"
                alt="email matthew boyd"
                title="email me at matthewfive.30@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
