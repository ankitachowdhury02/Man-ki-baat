
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Calendar,
  Menu,
  X,
} from "lucide-react";

import "./Header.css";
import logo from "../../assets/logo.jpeg";

function Header({ phoneNumber = "+91 8697404639" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", type: "page" },
    { name: "About Us", href: "/about", type: "page" },
    { name: "Our Services", href: "/services", type: "page" },
    { name: "Counsellor", href: "/counsellor", type: "page" },
    { name: "Contact", href: "/contact", type: "page" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isLinkActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    if (href === "/services") {
      return (
        location.pathname.startsWith("/services") ||
        location.pathname.startsWith("/specialisations")
      );
    }

    if (href === "/counsellor") {
      return location.pathname.startsWith("/counsellor");
    }

    return location.pathname === href;
  };

  const formattedPhone = phoneNumber.replace(/[^\d+]/g, "");
  const telephoneLink = `tel:${phoneNumber.replace(/\D/g, "")}`;

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo and Brand */}
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
            <span className="header-title">
              MAN KI BAAT
            </span>

            <span className="header-tagline">
              Child Development &amp; Mental Health
              <br />
              Wellness Society
            </span>
          </div>
        </Link>

        {/* Main Navigation */}
        <nav
          id="main-navigation"
          className={`header-navigation ${menuOpen ? "navigation-open" : ""
            }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`header-nav-link ${active ? "header-nav-link-active" : ""
                  }`}
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Actions */}
          <div className="mobile-header-actions">
            <a
              href={telephoneLink}
              className="header-call-btn"
              onClick={closeMenu}
            >
              <span className="call-icon-circle">
                <Phone size={15} strokeWidth={2.2} />
              </span>

              <span className="call-label">
                CALL US NOW
              </span>

              <span className="call-number">
                {formattedPhone}
              </span>
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

        {/* Desktop Actions */}
        <div className="header-desktop-actions">
          <a
            href={telephoneLink}
            className="header-call-btn"
            aria-label={`Call ${phoneNumber}`}
          >
            <span className="call-icon-circle">
              <Phone size={15} strokeWidth={2.2} />
            </span>

            <span className="call-label">
              CALL US NOW
            </span>

            <span className="call-number">
              {formattedPhone}
            </span>
          </a>

          <Link
            to="/contact"
            className="header-book-btn"
          >
            <Calendar size={16} strokeWidth={2.2} />
            <span>Book</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
