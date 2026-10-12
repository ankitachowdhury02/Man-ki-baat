import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Specialisations.css";

// Automatically load images from src/assets
const assetImages = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

// Find image using its filename
const resolveImageUrl = (fileName) => {
  const imagePath = `../assets/${fileName}`.toLowerCase();

  const matchedPath = Object.keys(assetImages).find(
    (path) => path.toLowerCase() === imagePath
  );

  return matchedPath ? assetImages[matchedPath] : null;
};

// All specialisations
const specialisations = [
  {
    title: "Clinical Psychology",
    slug: "clinical-psychology",
    description:
      "Mental health disorders, depression, anxiety, and stress.",
    image: "Clinical.jpg",
  },
  {
    title: "Counselling Psychology",
    slug: "counselling-psychology",
    description:
      "Emotional problems, relationship issues, and personal difficulties.",
    image: "Counselling.jpg",
  },
  {
    title: "Child Psychology",
    slug: "child-psychology",
    description:
      "Children's emotional, behavioural, and developmental problems.",
    image: "child.jpg",
  },
  {
    title: "Adolescent Psychology",
    slug: "adolescent-psychology",
    description:
      "Teenage mental health, peer pressure, and identity issues.",
    image: "Adolescent.jpg",
  },
  {
    title: "Educational Psychology",
    slug: "educational-psychology",
    description:
      "Learning difficulties, academic stress, and study problems.",
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
      "Psychological assessments related to legal cases and criminal behaviour.",
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
      "Motivation, concentration, and performance-related stress in athletes.",
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
      "Emotional and behavioural support for people with disabilities or injuries.",
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
      "Family conflicts, communication problems, and family relationships.",
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
      "Mental health promotion and psychological support within communities.",
    image: "Community.jpg",
  },
];

function Specialisations() {
  return (
    <section
      className="specialisations-section"
      id="specialisations"
    >
      <div id="services" className="specialisations-anchor" />
      <div className="specialisations-container">

        {/* Section heading */}
        <header className="specialisations-heading">
          <div className="specialisations-eyebrow">
            <span />
            OUR AREAS OF SUPPORT
          </div>

          <h2>
            Specialisations of Psychologists
            <span>Areas of Care</span>
          </h2>

          <p>
            Explore different areas of psychology and learn about
            the concerns each specialisation focuses on.
          </p>
        </header>

        {/* Specialisation cards */}
        <div className="specialisations-grid">
          {specialisations.map((item) => {
            const imageUrl = resolveImageUrl(item.image);

            return (
              <article
                className="specialisation-card"
                key={item.slug}
                style={
                  imageUrl
                    ? {
                        backgroundImage: `url("${imageUrl}")`,
                      }
                    : undefined
                }
              >
                <div className="specialisation-overlay" />

                {!imageUrl && (
                  <div className="specialisation-image-fallback">
                    <span>{item.title}</span>
                  </div>
                )}

                <div className="specialisation-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link
                    to={`/specialisations/${item.slug}`}
                    className="specialisation-explore"
                    aria-label={`Explore ${item.title}`}
                  >
                    EXPLORE <ArrowRight size={16} aria-hidden="true" />
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