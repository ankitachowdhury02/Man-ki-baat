
import React from "react";
import {
  Sparkles,
  Users,
  Brain,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import logo from "../assets/logo.jpeg";
import "./About.css";

const highlights = [
  {
    icon: Sparkles,
    title: "18+ Years of Counselling",
    description: "Experience in child and adult counselling.",
  },
  {
    icon: Users,
    title: "22+ Years of Teaching",
    description: "Experience in primary school education.",
  },
  {
    icon: Brain,
    title: "CBT-Based Guidance",
    description:
      "A structured approach to understanding thoughts and behaviour.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Support",
    description: "Guidance shaped around individual needs.",
  },
  {
    icon: GraduationCap,
    title: "Psychology Education",
    description: "Academic background in psychology.",
  },
  {
    icon: ShieldCheck,
    title: "Respect & Confidentiality",
    description: "A respectful and supportive environment.",
  },
];

const credentials = [
  "BA (Hons.) in Psychology",
  "MA in Psychology",
  "Diploma in Elementary Education",
  "CBT & Mind Training Certification",
  "Diploma in Hypnotherapy & Subconscious Mind Training",
  "18+ Years of Counselling Experience",
];

function About() {
  return (
    <main className="about-page">
      <section className="about-doctor-section">
        <div className="about-doctor-layout">
          {/* Left image */}
          <div className="about-doctor-visual">
            <img src={logo} alt="Man Ki Baat wellness society" />
          </div>

          {/* Right content */}
          <div className="about-doctor-information">
            <div className="about-eyebrow">
              <span />
              ABOUT THE COUNSELLOR
            </div>

            <h1>
              A compassionate approach to{" "}
              <span>emotional well-being</span>
            </h1>

            <p className="about-intro">
              Punam Kumari is associated with Man Ki Baat — Child Development
              & Mental Health Wellness Society. With over 18 years of
              counselling experience and over 22 years of primary school
              teaching experience, she aims to support individuals through
              empathy, understanding and personalised guidance.
            </p>

            {/* Six information cards */}
            <div className="about-highlight-grid">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="about-highlight-card"
                    key={item.title}
                  >
                    <div className="about-highlight-icon">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Qualifications and experience */}
            <div className="about-credentials">
              {credentials.map((credential) => (
                <div className="credential-item" key={credential}>
                  <ShieldCheck size={17} />
                  <span>{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
