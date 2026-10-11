
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./SpecialisationDetails.css";

const details = {
  "clinical-psychology": {
    title: "Clinical Psychology",
    description:
      "Clinical psychology focuses on understanding, assessing and supporting people experiencing mental health difficulties.",
    areas: [
      "Depression and anxiety disorders",
      "Stress management",
      "Trauma and post-traumatic stress",
      "Mood and behavioural problems",
      "Psychological assessment",
      "Grief and major life changes",
      "Emotional well-being",
    ],
  },

  "counselling-psychology": {
    title: "Counselling Psychology",
    description:
      "Counselling psychology supports people experiencing personal, emotional and relationship difficulties.",
    areas: [
      "Personal difficulties",
      "Relationship problems",
      "Low self-esteem",
      "Work and academic stress",
      "Grief and loneliness",
      "Personal development",
      "Life changes",
    ],
  },

  "child-psychology": {
    title: "Child Psychology",
    description:
      "Child psychology focuses on children's emotional, social, behavioural and developmental needs.",
    areas: [
      "Behavioural problems",
      "Fear and anxiety",
      "Developmental difficulties",
      "Learning and attention problems",
      "Communication difficulties",
      "Family changes",
      "School and friendship problems",
    ],
  },

  "adolescent-psychology": {
    title: "Adolescent Psychology",
    description:
      "Adolescent psychology focuses on teenagers' emotional and psychological development.",
    areas: [
      "Examination stress",
      "Peer pressure and bullying",
      "Identity and self-esteem",
      "Emotional changes",
      "Family conflicts",
      "Social media pressure",
      "Adjustment difficulties",
    ],
  },

  "educational-psychology": {
    title: "Educational Psychology",
    description:
      "Educational psychology explores learning, motivation and academic development.",
    areas: [
      "Learning difficulties",
      "Concentration and memory",
      "Examination anxiety",
      "Study habits",
      "Classroom behaviour",
      "Individual learning needs",
      "Learning strategies",
    ],
  },

  neuropsychology: {
    title: "Neuropsychology",
    description:
      "Neuropsychology explores the relationship between brain functioning, cognition and behaviour.",
    areas: [
      "Memory difficulties",
      "Attention problems",
      "Brain injury effects",
      "Cognitive changes after stroke",
      "Reasoning difficulties",
      "Cognitive assessment",
      "Neurological support",
    ],
  },

  "forensic-psychology": {
    title: "Forensic Psychology",
    description:
      "Forensic psychology applies psychological knowledge to legal and justice-related settings.",
    areas: [
      "Psychological assessment in legal cases",
      "Criminal behaviour",
      "Psychological functioning",
      "Offender rehabilitation",
      "Victim-related assessments",
      "Risk assessment",
      "Expert psychological opinions",
    ],
  },

  "health-psychology": {
    title: "Health Psychology",
    description:
      "Health psychology examines how psychological and behavioural factors relate to physical health.",
    areas: [
      "Stress related to illness",
      "Long-term medical conditions",
      "Healthy lifestyle changes",
      "Health-related anxiety",
      "Treatment adherence",
      "Adjustment after diagnosis",
      "Healthy daily habits",
    ],
  },

  "sports-psychology": {
    title: "Sports Psychology",
    description:
      "Sports psychology focuses on mental skills that influence athletic performance.",
    areas: [
      "Performance anxiety",
      "Concentration and focus",
      "Confidence and motivation",
      "Managing competition emotions",
      "Coping with setbacks",
      "Mental preparation",
      "Adjustment after sports injuries",
    ],
  },

  "industrial-organisational-psychology": {
    title: "Industrial and Organisational Psychology",
    description:
      "This field studies employee behaviour and psychological well-being in workplaces.",
    areas: [
      "Workplace stress",
      "Employee motivation",
      "Recruitment and selection",
      "Leadership development",
      "Team communication",
      "Workplace conflict",
      "Employee performance",
    ],
  },

  "rehabilitation-psychology": {
    title: "Rehabilitation Psychology",
    description:
      "Rehabilitation psychology supports people adjusting to injuries, disabilities and chronic illness.",
    areas: [
      "Adjustment to disability",
      "Serious injuries and illness",
      "Recovery after accidents",
      "Frustration and anxiety",
      "Rehabilitation motivation",
      "Daily activity changes",
      "Independence and social participation",
    ],
  },

  geropsychology: {
    title: "Geropsychology",
    description:
      "Geropsychology focuses on the mental health and emotional well-being of older adults.",
    areas: [
      "Loneliness",
      "Grief and bereavement",
      "Depression and anxiety",
      "Retirement adjustment",
      "Memory difficulties",
      "Age-related emotional challenges",
      "Caregiver support",
    ],
  },

  "family-psychology": {
    title: "Family Psychology",
    description:
      "Family psychology focuses on family relationships, communication and conflict resolution.",
    areas: [
      "Family conflicts",
      "Parent-child relationships",
      "Parenting challenges",
      "Communication problems",
      "Separation and divorce adjustment",
      "Family stress",
      "Emotional support during illness or grief",
    ],
  },

  "addiction-psychology": {
    title: "Addiction Psychology",
    description:
      "Addiction psychology explores behavioural patterns associated with addiction and recovery.",
    areas: [
      "Alcohol and substance use",
      "Tobacco dependence",
      "Gambling-related problems",
      "Harmful compulsive behaviours",
      "Cravings and triggers",
      "Relapse prevention",
      "Family difficulties related to addiction",
    ],
  },

  "community-psychology": {
    title: "Community Psychology",
    description:
      "Community psychology promotes mental health and well-being within communities.",
    areas: [
      "Mental health awareness",
      "Psychological difficulty prevention",
      "Reducing stigma",
      "Supporting vulnerable communities",
      "Social isolation",
      "Community support programmes",
      "Access to psychological services",
    ],
  },
};

/*
  Sample review content for layout demonstration.
  Replace these entries with genuine, permission-approved
  feedback before publishing them as patient experiences.
*/
const patientExperiences = [
  {
    rating: 5,
    review:
      "The counselling sessions helped me understand my emotions and manage daily stress more effectively.",
    name: "A Visitor",
  },
  {
    rating: 5,
    review:
      "The guidance helped our family improve communication and better understand our child's needs.",
    name: "A Parent",
  },
  {
    rating: 4,
    review:
      "I learned practical ways to manage anxiety and approach challenging situations with more confidence.",
    name: "A Visitor",
  },
  {
    rating: 5,
    review:
      "The sessions provided a supportive space to discuss concerns and work towards positive changes.",
    name: "A Visitor",
  },
  {
    rating: 5,
    review:
      "The guidance helped us understand emotional and behavioural challenges more clearly.",
    name: "A Parent",
  },
];

function PatientExperiences() {
  return (
    <section className="patient-experiences">
      <div className="patient-experiences-inner">
        <h2>Patient Experiences</h2>

        {patientExperiences.map((experience, index) => (
          <article className="experience-card" key={index}>
            <div
              className="experience-stars"
              role="img"
              aria-label={`${experience.rating} out of 5 stars`}
            >
              {"★".repeat(experience.rating)}
            </div>

            <p className="experience-review">
              "{experience.review}"
            </p>

            <p className="experience-name">
              — {experience.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MoreInformation() {
  return (
    <section className="more-information-section">
      <div className="more-information-card">
        <div
          className="more-information-icon"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5Z" />
            <path d="M8 11h8M8 14h5" />
          </svg>
        </div>

        <div className="more-information-content">
          <p className="more-information-label">
            WE ARE HERE TO HELP
          </p>

          <h2>Would you like to know more?</h2>

          <p className="more-information-description">
            Contact Man Ki Baat to learn about our services
            and find appropriate psychological support for
            your needs.
          </p>

          <Link
            to="/contact"
            className="more-information-button"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function SpecialisationDetails() {
  const { slug } = useParams();
  const item = details[slug];

  if (!item) {
    return (
      <main className="detail-page detail-not-found">
        <h1>Specialisation Not Found</h1>

        <p>
          The requested specialisation could not be found.
        </p>

        <Link to="/specialisations" className="detail-back">
          Back to All Specialisations
        </Link>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <Link to="/specialisations" className="detail-back">
          ← Back
        </Link>

        <p>MAN KI BAAT · AREAS OF CARE</p>

        <h1>{item.title}</h1>

        <span>{item.description}</span>
      </section>

      <section className="detail-content">
        <p className="detail-label">AREAS OF CARE</p>

        <h2>How this specialisation can help</h2>

        <div className="detail-grid">
          {item.areas.map((area) => (
            <div className="detail-card" key={area}>
              <span aria-hidden="true">✓</span>
              <p>{area}</p>
            </div>
          ))}
        </div>

        <Link
          to="/specialisations"
          className="detail-bottom-link"
        >
          ← Back to all specialisations
        </Link>
      </section>

      {/* Reviews appear before the contact card */}
      <PatientExperiences />

      {/* Contact card appears directly after all reviews */}
      <MoreInformation />
    </main>
  );
}

export default SpecialisationDetails;
