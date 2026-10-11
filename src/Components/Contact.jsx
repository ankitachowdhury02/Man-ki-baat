
import React, { useState } from "react";
import {
  Clock3,
  MapPin,
  Phone,
  Mail,
  Globe,
  CalendarDays,
  MessageCircle,
  Asterisk,
} from "lucide-react";
import "./Contact.css";

// Existing Man Ki Baat WhatsApp number
const WHATSAPP_NUMBER = "918697404639";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  concern: "",
  country: "India",
  preferredDate: "",
  preferredTime: "",
  consultationType: "Online consultation",
  message: "",
};

// Local date in YYYY-MM-DD format
const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [notice, setNotice] = useState("");

  const today = getToday();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setNotice("");
  };

  const RequiredLabel = ({ htmlFor, children }) => (
    <div className="contact-label-row">
      <label htmlFor={htmlFor}>{children}</label>
      <Asterisk
        className="required-icon"
        size={14}
        aria-hidden="true"
      />
    </div>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice("");

    // Validate phone number
    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      setNotice("Please enter a valid phone number.");
      return;
    }

    // Validate preferred date
    if (!formData.preferredDate || formData.preferredDate < today) {
      setNotice("Please choose today or a future date.");
      return;
    }

    // Prepare all appointment details for WhatsApp
    const message = [
      "NEW APPOINTMENT REQUEST",
      "Man Ki Baat - Child Development & Mental Health Wellness Society",
      "",
      `Full Name: ${formData.fullName.trim()}`,
      `Phone Number: +91 ${formData.phone.trim()}`,
      `Email Address: ${formData.email.trim()}`,
      `Service / Area of Concern: ${formData.concern}`,
      `Country / Region: ${formData.country}`,
      `Preferred Date: ${formData.preferredDate}`,
      `Preferred Time: ${formData.preferredTime}`,
      `Consultation Type: ${formData.consultationType}`,
      `Additional Information: ${
        formData.message.trim() || "Not provided"
      }`,
      "",
      "Please contact me regarding this appointment request.",
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the prepared message
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setNotice(
      "WhatsApp has been opened with your appointment details. Please review the message and tap Send to submit your request."
    );
  };

  return (
    <main className="contact-page">
      <section className="contact-layout">
        {/* Left side: Contact information */}
        <div className="contact-intro">
          <div className="contact-eyebrow">
            <span className="contact-eyebrow-line"></span>
            <span>BOOK AN APPOINTMENT</span>
          </div>

          <h1>
            Begin your journey to
            <br className="desktop-break" /> better mental well-being.
          </h1>

          <p className="contact-description">
            Share a few details about yourself and your concerns.
            Our team can guide you towards suitable psychological
            support and discuss the next steps for an appointment.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Clock3 size={21} strokeWidth={1.8} />
              </div>
              <div>
                <h3>Appointment Hours</h3>
                <p>Contact us to check available time slots.</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={21} strokeWidth={1.8} />
              </div>
              <div>
                <h3>Visit Us</h3>
                <p>Kolkata, West Bengal, India</p>
                <p>
                  Exact appointment location can be confirmed
                  with our team.
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Phone size={21} strokeWidth={1.8} />
              </div>
              <div>
                <h3>Call Us</h3>
                <a href="tel:+918697404639">
                  +91 86974 04639
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={21} strokeWidth={1.8} />
              </div>
              <div>
                <h3>Email Us</h3>
                <a href="mailto:punamkri.kol@gmail.com">
                  punamkri.kol@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Globe size={21} strokeWidth={1.8} />
              </div>
              <div>
                <h3>Our Approach</h3>
                <p>
                  Child development, counselling and mental
                  well-being support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Appointment form */}
        <div className="contact-form-card">
          <div className="contact-form-heading">
            <span>YOUR APPOINTMENT</span>
            <h2>Tell us how we can help</h2>
            <p>
              Complete the form to prepare your appointment details.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <RequiredLabel htmlFor="fullName">
                  Full Name
                </RequiredLabel>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <RequiredLabel htmlFor="phone">
                  Phone Number
                </RequiredLabel>
                <div className="contact-phone-input">
                  <span>IN +91</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel-national"
                    inputMode="numeric"
                    maxLength={15}
                    required
                  />
                </div>
              </div>

              <div className="contact-field contact-field-full">
                <RequiredLabel htmlFor="email">
                  Email Address
                </RequiredLabel>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-field contact-field-full">
                <RequiredLabel htmlFor="concern">
                  Service / Area of Concern
                </RequiredLabel>
                <select
                  id="concern"
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Child Psychology">
                    Child Psychology
                  </option>
                  <option value="Adolescent Psychology">
                    Adolescent Psychology
                  </option>
                  <option value="Clinical Psychology">
                    Clinical Psychology
                  </option>
                  <option value="Counselling Psychology">
                    Counselling Psychology
                  </option>
                  <option value="Educational Psychology">
                    Educational Psychology
                  </option>
                  <option value="Family Psychology">
                    Family Psychology
                  </option>
                  <option value="Health Psychology">
                    Health Psychology
                  </option>
                  <option value="Addiction Psychology">
                    Addiction Psychology
                  </option>
                  <option value="Other">
                    Other / Not sure yet
                  </option>
                </select>
              </div>

              <div className="contact-field contact-field-full">
                <RequiredLabel htmlFor="country">
                  Country / Region
                </RequiredLabel>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="India">India</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-field">
                <RequiredLabel htmlFor="preferredDate">
                  Preferred Date
                </RequiredLabel>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  min={today}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <RequiredLabel htmlFor="preferredTime">
                  Preferred Time
                </RequiredLabel>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a time slot</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

              <div className="contact-field contact-field-full">
                <RequiredLabel htmlFor="consultationType">
                  Consultation Type
                </RequiredLabel>
                <select
                  id="consultationType"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  required
                >
                  <option value="Online consultation">
                    Online Consultation
                  </option>
                  <option value="In-person consultation">
                    In-person Consultation
                  </option>
                  <option value="Need guidance">
                    Need Guidance
                  </option>
                </select>
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="message">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Briefly describe what support you are looking for..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            {notice && (
              <div
                className="contact-form-notice"
                role="status"
                aria-live="polite"
              >
                {notice}
              </div>
            )}

            <button
              className="contact-submit-button"
              type="submit"
            >
              <MessageCircle size={18} />
              <span>Request an Appointment</span>
            </button>

            <p className="contact-form-disclaimer">
              Submitting this form does not confirm an appointment.
              Please avoid sharing sensitive medical details here.
            </p>
          </form>
        </div>
      </section>

      <a
        className="contact-floating-call"
        href="tel:+918697404639"
        aria-label="Call Man Ki Baat"
      >
        <Phone size={22} />
      </a>
    </main>
  );
}

export default Contact;
