
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Calendar, Menu, X } from "lucide-react";
import "./Header.css";
import logo from "../../assets/logo.jpeg";

function Header({ phoneNumber = "+91 8697404639" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", type: "page" },
    { name: "About Us", href: "/about", type: "page" },
    { name: "Our Services", href: "/services", type: "page" },
    { name: "Contact", href: "/contact", type: "page" },
  ];

  const closeMenu = () => setMenuOpen(false);

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
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href) ||
                  (link.href === "/services" &&
                    location.pathname.startsWith("/specialisations"));

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`header-nav-link ${
                  isActive ? "header-nav-link-active" : ""
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            );
          })}

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
