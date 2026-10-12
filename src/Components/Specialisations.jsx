
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Specialisations.css";

const assetImages = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const resolveImageUrl = (fileName) => {
  const imagePath = `../assets/${fileName}`.toLowerCase();

  const matchedPath = Object.keys(assetImages).find(
    (path) => path.toLowerCase() === imagePath
  );

  return matchedPath ? assetImages[matchedPath] : null;
};

const specialisations = [
  {
    title: "Clinical Psychology",
    slug: "clinical-psychology",
    description:
      "Mental health concerns, depression, anxiety, and stress.",
    image: "Clinical.jpg",
  },
  {
    title: "Counselling Psychology",
    slug: "counselling-psychology",
    description:
      "Emotional difficulties, relationship issues, and personal growth.",
    image: "Counselling.jpg",
  },
  {
    title: "Child Psychology",
    slug: "child-psychology",
    description:
      "Children's emotional, behavioural, and developmental concerns.",
    image: "child.jpg",
  },
  {
    title: "Adolescent Psychology",
    slug: "adolescent-psychology",
    description:
      "Teenage mental health, peer pressure, and identity concerns.",
    image: "Adolescent.jpg",
  },
  {
    title: "Educational Psychology",
    slug: "educational-psychology",
    description:
      "Learning difficulties, academic stress, and study challenges.",
    image: "Educational.jpg",
  },
  {
    title: "Neuropsychology",
    slug: "neuropsychology",
    description:
      "Brain-related conditions affecting memory, attention, and behaviour.",
    image: "Neuropsychology.jpg",
  },
  {
    title: "Forensic Psychology",
    slug: "forensic-psychology",
    description:
      "Psychological assessments related to legal settings.",
    image: "Forensic.jpg",
  },
  {
    title: "Health Psychology",
    slug: "health-psychology",
    description:
      "The relationship between psychological well-being and physical health.",
    image: "Health.jpg",
  },
  {
    title: "Sports Psychology",
    slug: "sports-psychology",
    description:
      "Motivation, concentration, confidence, and performance-related stress.",
    image: "Sports.jpg",
  },
  {
    title: "Industrial & Organisational Psychology",
    slug: "industrial-organisational-psychology",
    description:
      "Workplace stress, employee behaviour, and job satisfaction.",
    image: "Industrial.jpg",
  },
  {
    title: "Rehabilitation Psychology",
    slug: "rehabilitation-psychology",
    description:
      "Psychological support during recovery, disability, and rehabilitation.",
    image: "Rehabilitation.jpg",
  },
  {
    title: "Geropsychology",
    slug: "geropsychology",
    description:
      "Mental health and emotional well-being of older adults.",
    image: "Geropsychology.jpg",
  },
  {
    title: "Family Psychology",
    slug: "family-psychology",
    description:
      "Family relationships, communication, and conflict resolution.",
    image: "family.jpg",
  },
  {
    title: "Addiction Psychology",
    slug: "addiction-psychology",
    description:
      "Psychological support for substance use and behavioural addictions.",
    image: "Addiction.jpg",
  },
  {
    title: "Community Psychology",
    slug: "community-psychology",
    description:
      "Mental health awareness and psychological support within communities.",
    image: "Community.jpg",
  },
];

function Specialisations() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="specialisations"
      className={`specialisations-section ${
        isVisible ? "specialisations-visible" : ""
      }`}
    >
      <div className="specialisations-container">
        {/* Section Heading */}
        <header className="specialisations-heading">
          <div className="specialisations-eyebrow">
            <span className="eyebrow-line" />
            OUR AREAS OF SUPPORT
            <span className="eyebrow-line" />
          </div>

          <h2>
            Specialisations of Psychologists
            <span className="heading-highlight">Areas of Care</span>
          </h2>

          <p>
            Explore different areas of psychology and discover the
            support available for various emotional, behavioural,
            developmental, and mental health concerns.
          </p>
        </header>

        {/* Specialisation Cards */}
        <div className="specialisations-grid">
          {specialisations.map((item, index) => {
            const imageUrl = resolveImageUrl(item.image);

            return (
              <article
                className="specialisation-card"
                key={item.slug}
                style={
                  imageUrl
                    ? {
                        "--card-index": index,
                        "--card-image": `url("${imageUrl}")`,
                      }
                    : {
                        "--card-index": index,
                      }
                }
              >
                <div className="specialisation-image" />

                <div className="specialisation-overlay" />

                {!imageUrl && (
                  <div className="specialisation-image-fallback">
                    <span>{item.title}</span>
                  </div>
                )}

                <div className="specialisation-content">
                  <span className="card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link
                    to={`/specialisations/${item.slug}`}
                    className="specialisation-explore"
                    aria-label={`Explore ${item.title}`}
                  >
                    <span>EXPLORE MORE</span>
                    <span className="specialisation-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Specialisations;
