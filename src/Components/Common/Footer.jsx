
import "./Footer.css";
import logo from "../../assets/logo.jpeg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo-link">
            <img
              src={logo}
              alt="Man Ki Baat Logo"
              className="footer-logo"
            />
            <span className="footer-brand-name">MAN KI BAAT</span>
          </a>

          <p className="footer-description">
            Child Development &amp; Mental Health Wellness Society.
            We are committed to supporting children, adolescents,
            individuals and families through counselling and
            mental wellness services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#counsellor">Counsellor</a>
          <a href="#contact">Contact Us</a>
        </div>

        {/* Our Services */}
        <div className="footer-links">
          <h3>Our Services</h3>
          <a href="#services">Personal Counselling</a>
          <a href="#services">Relationship Guidance</a>
          <a href="#services">Stress &amp; Anxiety Management</a>
          <a href="#services">Child &amp; Adolescent Counselling</a>
          <a href="#services">Cognitive Behaviour Therapy</a>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <p>
            <strong>Address</strong>
            <span>
              32/5, Gariahat Road, Salimpur,
              Kolkata, West Bengal
            </span>
          </p>

          <p>
            <strong>Phone</strong>
            <a href="tel:+918697404639">
              +91 8697404639
            </a>
          </p>

          <p>
            <strong>Email</strong>
            <a href="mailto:punamkri.kol@gmail.com">
              punamkri.kol@gmail.com
            </a>
          </p>

          <a href="#contact" className="footer-contact-button">
            Book an Appointment
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {currentYear} Man Ki Baat. All rights reserved.
        </p>

        <a href="#home" className="footer-back-top">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
