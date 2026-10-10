
import { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    eyebrow: "CHILD DEVELOPMENT & MENTAL HEALTH WELLNESS SOCIETY",
    title: "Man Ki Baat",
    subtitle: "by Punam Kumari",
    headline: (
      <>
        Understanding Minds. <span>Supporting Growth.</span>
        <br />
        Building Emotional Wellness.
      </>
    ),
    shortText: "A supportive space for mental wellness and personal growth.",
    description:
      "Discover compassionate counselling and guidance for children, adolescents and families. We aim to create a safe, understanding environment where every individual feels heard, respected and supported.",
    image: "/images/hero-mental-health.jpg",
  },
  {
    eyebrow: "CHILD & ADOLESCENT WELLNESS",
    title: "Growing Together",
    subtitle: "Care at Every Stage",
    headline: (
      <>
        Every Child Deserves <span>Understanding.</span>
        <br />
        Every Journey Deserves Care.
      </>
    ),
    shortText: "Supporting children, adolescents and their families.",
    description:
      "Explore a supportive approach to child development, emotional well-being and family guidance, with a focus on listening, understanding and individual needs.",
    image: "/images/hero-child-counselling.jpg",
  },
  {
    eyebrow: "YOUR MENTAL WELLNESS MATTERS",
    title: "A Space to Be Heard",
    subtitle: "Your Well-being Comes First",
    headline: (
      <>
        Make Time for <span>Yourself.</span>
        <br />
        Take a Step Towards Wellness.
      </>
    ),
    shortText: "Your feelings matter. Your story matters.",
    description:
      "Find space to express your concerns, explore your feelings and learn about counselling options in a respectful and supportive environment.",
    image: "/images/hero-wellness.jpg",
  },
  {
    eyebrow: "MAN KI BAAT COUNSELLING SERVICES",
    title: "A New Beginning",
    subtitle: "One Conversation at a Time",
    headline: (
      <>
        Listen to Your Mind. <span>Trust Your Journey.</span>
        <br />
        Move Forward with Care.
      </>
    ),
    shortText: "Guidance and support for individuals and families.",
    description:
      "Connect with Man Ki Baat to learn more about personal counselling, relationship guidance, stress management and other wellness services.",
    image: "/images/hero-counselling.jpg",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  const slide = slides[activeSlide];

  return (
    <section
      className="hero-slider"
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`hero-slide ${
            activeSlide === index ? "active" : ""
          }`}
          style={{ backgroundImage: `url("${item.image}")` }}
          aria-hidden="true"
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content-wrap" key={activeSlide}>
        <p className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          {slide.eyebrow}
        </p>

        <h1 className="hero-title">{slide.title}</h1>

        <p className="hero-subtitle">{slide.subtitle}</p>

        <h2 className="hero-headline">{slide.headline}</h2>

        <p className="hero-short-text">{slide.shortText}</p>

        <p className="hero-description">{slide.description}</p>
      </div>

      <div className="hero-dots">
        {slides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            className={`hero-dot ${
              activeSlide === index ? "active-dot" : ""
            }`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-contact-buttons">
        <a
          href="https://wa.me/918697404639"
          target="_blank"
          rel="noreferrer"
          className="hero-whatsapp"
          aria-label="WhatsApp Man Ki Baat"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 11.5a8.3 8.3 0 0 1-12.2 7.3L4 20l1.3-4.1A8.3 8.3 0 1 1 20 11.5Z" />
            <path d="M8.7 8.2c.5 2.5 2.5 4.5 5 5l1.3-1.2 2 1c-.2 1.3-1 2-2.3 2-3.5-.4-6.4-3.3-6.8-6.8 0-1.3.7-2.1 2-2.3l1 2Z" />
          </svg>
        </a>

        <a
          href="tel:+918697404639"
          className="hero-phone"
          aria-label="Call Man Ki Baat"
          title="Call"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 3h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L16 13l5 2v3c0 1.1-.9 2-2 2C10 20 4 14 4 5c0-1.1.9-2 2-2Z" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;
