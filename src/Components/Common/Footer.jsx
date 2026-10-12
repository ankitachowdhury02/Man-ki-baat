import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.jpeg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo-link">
            <img src={logo} alt="Man Ki Baat Logo" className="footer-logo" />
            <span className="footer-brand-name">MAN KI BAAT</span>
          </a>

          <p className="footer-description">
            Child Development &amp; Mental Health Wellness Society. We are
            committed to supporting children, adolescents, individuals and
            families through counselling and mental wellness services.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/counsellor">Counsellor</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          <a href="#services">Personal Counselling</a>
          <a href="#services">Relationship Guidance</a>
          <a href="#services">Stress &amp; Anxiety Management</a>
          <a href="#services">Child &amp; Adolescent Counselling</a>
          <a href="#services">Cognitive Behaviour Therapy</a>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <p>
            <strong>Address</strong>
            <span>32/5, Gariahat Road, Salimpur, Kolkata, West Bengal</span>
          </p>

          <div className="footer-directions-actions">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Mental+Health+%26+Wellness+Centre+%28Counselor%29%2C+32%2F5%2C+Goriahat+Road%2C+Kolkata%2C+West+Bengal%2C+700033&destination_place_id=ChIJu5o2lDNxAjoRUFT6AR_MVQE"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-directions-btn"
            >
              <svg
                className="footer-directions-icon"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2v20" />
                <path d="M12 5h7l2 3-2 3h-7" />
                <path d="M12 13H5l-2 3 2 3h7" />
              </svg>
              <span>Get directions</span>
            </a>

            <a
              href="https://www.google.com/maps/place/Mental+Health+%26+Wellness+Centre+(Counselor)/@22.505176,88.3674077,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02713394369abb:0x155cc1f01fa5450!8m2!3d22.505176!4d88.3674077!16s%2Fg%2F11yvpwrfcc?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-view-map-btn"
            >
              View map
            </a>
          </div>

          <p>
            <strong>Phone</strong>
            <a href="tel:+918697404639">+91 8697404639</a>
          </p>

          <p>
            <strong>Email</strong>
            <a href="mailto:punamkri.kol@gmail.com">punamkri.kol@gmail.com</a>
          </p>

          <Link to="/contact" className="footer-contact-button">
            Book an Appointment
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Man Ki Baat. All rights reserved &amp; design and
          developed by{" "}
          <a
            href="https://webappssoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-wass-link"
          >
            WASS
          </a>
        </p>

        <a href="#home" className="footer-back-top">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
