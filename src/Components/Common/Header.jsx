
import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar, Menu, X } from "lucide-react";
import "./Header.css";
import logo from "../../assets/logo.jpeg";

function Header({ phoneNumber = "+91 8697404639" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", type: "page" },
    { name: "About Us", href: "/about", type: "page" },
    { name: "Our Services", href: "/#services", type: "section" },
    { name: "Counsellor", href: "/#counsellor", type: "section" },
    { name: "Contact", href: "/contact", type: "page" },
  ];

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (link) => {
    closeMenu();

    // Scroll to a section on the home page.
    if (link.type === "section" && window.location.pathname === "/") {
      const sectionId = link.href.split("#")[1];

      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo and brand */}
        <Link
          to="/"
          className="header-brand"
          onClick={closeMenu}
          aria-label="Man Ki Baat Home"
        >
          <img
            src={logo}
            alt="Man Ki Baat Logo"
            className="header-logo"
          />

          <div className="header-brand-text">
            <span className="header-title">MAN KI BAAT</span>

            <span className="header-tagline">
              Child Development &amp; Mental Health
              <br />
              Wellness Society
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav
          className={`header-navigation ${
            menuOpen ? "navigation-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="header-nav-link"
              onClick={() => handleNavClick(link)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile actions */}
          <div className="mobile-header-actions">
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="header-call-btn"
              onClick={closeMenu}
            >
              <span className="call-icon-circle">
                <Phone size={15} strokeWidth={2.2} />
              </span>

              <span className="call-label">CALL US NOW</span>
              <span className="call-number">{phoneNumber}</span>
            </a>

            <Link
              to="/contact"
              className="header-book-btn"
              onClick={closeMenu}
            >
              <Calendar size={16} strokeWidth={2.2} />
              <span>Book</span>
            </Link>
          </div>
        </nav>

        {/* Desktop actions */}
        <div className="header-desktop-actions">
          <a
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            className="header-call-btn"
          >
            <span className="call-icon-circle">
              <Phone size={15} strokeWidth={2.2} />
            </span>

            <span className="call-label">CALL US NOW</span>
            <span className="call-number">{phoneNumber}</span>
          </a>

          <Link to="/contact" className="header-book-btn">
            <Calendar size={16} strokeWidth={2.2} />
            <span>Book</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
