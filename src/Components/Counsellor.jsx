
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Brain,
    Baby,
    HeartHandshake,
    Users,
    GraduationCap,
    HeartPulse,
    MessageCircleHeart,
    ShieldCheck,
    HandHeart,
    Sparkles,
    CalendarDays,
    CheckCircle2,
    Clock3,
} from "lucide-react";

import "./Counsellor.css";

const services = [
    {
        icon: Baby,
        number: "01",
        title: "Child & Adolescent Counselling",
        description:
            "Emotional, behavioural, developmental, and teenage-related concerns in a supportive environment.",
    },
    {
        icon: Brain,
        number: "02",
        title: "CBT",
        subtitle: "Cognitive Behavioural Therapy",
        description:
            "Structured psychological support to understand unhelpful thought patterns and develop healthier coping skills.",
    },
    {
        icon: MessageCircleHeart,
        number: "03",
        title: "Individual Counselling",
        description:
            "A confidential, supportive space to explore personal challenges, emotions, and life difficulties.",
    },
    {
        icon: HeartHandshake,
        number: "04",
        title: "Couples & Marital Counselling",
        description:
            "Support for communication difficulties, relationship conflicts, trust, and mutual understanding.",
    },
    {
        icon: Users,
        number: "05",
        title: "Family Counselling",
        description:
            "Guidance to improve family communication, manage disagreements, and strengthen relationships.",
    },
    {
        icon: GraduationCap,
        number: "06",
        title: "Career & Academic Counselling",
        description:
            "Support with academic pressure, career decisions, motivation, and study-related challenges.",
    },
    {
        icon: HeartPulse,
        number: "07",
        title: "Stress, Anxiety & Depression Counselling",
        description:
            "Psychological support for emotional distress, stress management, anxious feelings, and low mood.",
    },
    {
        icon: ShieldCheck,
        number: "08",
        title: "Behaviour & Anger Management",
        description:
            "Develop healthier emotional regulation, behavioural awareness, and constructive coping strategies.",
    },
    {
        icon: HandHeart,
        number: "09",
        title: "Parenting Counselling",
        description:
            "Guidance to understand children's needs, improve parenting approaches, and navigate family challenges.",
    },
];

const benefits = [
    "Supportive and empathetic environment",
    "Individualised counselling approach",
    "Focus on emotional well-being",
    "Guidance tailored to your concerns",
];

function Counsellor() {
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
            { threshold: 0.08 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <main
            ref={sectionRef}
            className={`counsellor-page ${isVisible ? "counsellor-visible" : ""
                }`}
        >
            {/* HERO SECTION */}
            <section className="counsellor-hero">
                <div className="counsellor-hero-decoration counsellor-decoration-one" />
                <div className="counsellor-hero-decoration counsellor-decoration-two" />

                <div className="counsellor-container counsellor-hero-grid">
                    <div className="counsellor-hero-content">
                        <div className="counsellor-eyebrow">
                            <Sparkles size={16} />
                            MENTAL HEALTH & WELLNESS CENTRE
                        </div>

                        <h1>
                            Your Mental Health
                            <span>Deserves Care.</span>
                        </h1>

                        <p className="counsellor-hero-description">
                            A supportive space to understand your emotions, navigate
                            life's challenges, strengthen relationships, and work
                            towards better emotional well-being.
                        </p>

                        <div className="counsellor-experience">
                            <div className="counsellor-experience-icon">
                                <Clock3 size={25} />
                            </div>

                            <div>
                                <strong>18+ Years of Experience</strong>
                                <span>
                                    Mental health and counselling support
                                </span>
                            </div>
                        </div>

                        <div className="counsellor-hero-actions">
                            <Link
                                to="/contact"
                                className="counsellor-button counsellor-button-primary"
                            >
                                <CalendarDays size={18} />
                                Book an Appointment
                                <ArrowRight size={18} />
                            </Link>

                            <a
                                href="#counselling-services"
                                className="counsellor-button counsellor-button-secondary"
                            >
                                Explore Services
                            </a>
                        </div>

                        <div className="counsellor-trust-note">
                            <CheckCircle2 size={17} />
                            <span>
                                Compassionate support for individuals and families
                            </span>
                        </div>
                    </div>

                    {/* HERO VISUAL */}
                    <div className="counsellor-hero-visual">
                        <div className="counsellor-visual-orbit orbit-one" />
                        <div className="counsellor-visual-orbit orbit-two" />

                        <div className="counsellor-visual-card">
                            <div className="counsellor-brain-illustration">
                                <Brain size={100} strokeWidth={1.2} />
                                <span className="brain-sparkle sparkle-one">
                                    <Sparkles size={20} />
                                </span>
                                <span className="brain-sparkle sparkle-two">
                                    <HeartPulse size={23} />
                                </span>
                            </div>

                            <div className="counsellor-visual-caption">
                                <span className="counsellor-caption-dot" />
                                Your journey matters
                            </div>

                            <h2>
                                Listen. Understand.
                                <span>Grow together.</span>
                            </h2>

                            <p>
                                Every step towards emotional well-being counts.
                            </p>
                        </div>

                        <div className="counsellor-floating-card floating-top">
                            <HeartHandshake size={23} />
                            <div>
                                <strong>Emotional Support</strong>
                                <span>You are heard</span>
                            </div>
                        </div>

                        <div className="counsellor-floating-card floating-bottom">
                            <ShieldCheck size={23} />
                            <div>
                                <strong>Your Well-being</strong>
                                <span>Matters every day</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION STRIP */}
            <section className="counsellor-intro">
                <div className="counsellor-container counsellor-intro-grid">
                    <div className="counsellor-intro-heading">
                        <span>COUNSELLING SERVICES</span>
                        <h2>
                            Support for different
                            <span>stages of life.</span>
                        </h2>
                    </div>

                    <p>
                        From childhood and academic challenges to relationships,
                        parenting, and emotional well-being, explore counselling
                        services suited to different concerns and life situations.
                    </p>
                </div>
            </section>

            {/* COUNSELLING SERVICES */}
            <section
                className="counsellor-services"
                id="counselling-services"
            >
                <div className="counsellor-container">
                    <div className="counsellor-section-heading">
                        <div className="counsellor-section-eyebrow">
                            <span />
                            HOW WE CAN HELP
                            <span />
                        </div>

                        <h2>
                            Our Counselling
                            <span>Services</span>
                        </h2>

                        <p>
                            Explore our counselling areas and find the support
                            relevant to your needs.
                        </p>
                    </div>

                    <div className="counsellor-services-grid">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    className="counsellor-service-card"
                                    key={service.number}
                                    style={{ "--service-index": index }}
                                >
                                    <div className="counsellor-service-top">
                                        <div className="counsellor-service-icon">
                                            <Icon size={27} strokeWidth={1.8} />
                                        </div>

                                        <span className="counsellor-service-number">
                                            {service.number}
                                        </span>
                                    </div>

                                    <h3>{service.title}</h3>

                                    {service.subtitle && (
                                        <span className="counsellor-service-subtitle">
                                            {service.subtitle}
                                        </span>
                                    )}

                                    <p>{service.description}</p>

                                    <Link
                                        to="/contact"
                                        className="counsellor-service-link"
                                        aria-label={`Enquire about ${service.title}`}
                                    >
                                        Enquire Now
                                        <ArrowRight size={17} />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* APPROACH SECTION */}
            <section className="counsellor-approach">
                <div className="counsellor-container counsellor-approach-grid">
                    <div className="counsellor-approach-visual">
                        <div className="counsellor-approach-circle">
                            <div className="approach-inner-circle">
                                <HeartHandshake size={70} strokeWidth={1.4} />
                                <span>Care with understanding</span>
                            </div>
                        </div>

                        <div className="approach-mini-card">
                            <Sparkles size={20} />
                            A space to grow
                        </div>
                    </div>

                    <div className="counsellor-approach-content">
                        <div className="counsellor-approach-eyebrow">
                            <span />
                            OUR APPROACH
                        </div>

                        <h2>
                            Every person deserves
                            <span>to be understood.</span>
                        </h2>

                        <p>
                            Seeking counselling can be an important step towards
                            understanding yourself and managing life's challenges.
                            Our approach focuses on listening, understanding your
                            concerns, and exploring appropriate ways forward.
                        </p>

                        <div className="counsellor-benefits">
                            {benefits.map((benefit) => (
                                <div className="counsellor-benefit" key={benefit}>
                                    <CheckCircle2 size={19} />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className="counsellor-button counsellor-button-primary"
                        >
                            Connect With Us
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="counsellor-cta">
                <div className="counsellor-container">
                    <div className="counsellor-cta-card">
                        <div className="counsellor-cta-icon">
                            <HeartHandshake size={34} />
                        </div>

                        <div className="counsellor-cta-content">
                            <span>TAKE THE FIRST STEP</span>
                            <h2>
                                Ready to talk about what matters to you?
                            </h2>
                            <p>
                                Get in touch to enquire about our counselling services
                                and appointment options.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="counsellor-button counsellor-cta-button"
                        >
                            <CalendarDays size={18} />
                            Book an Appointment
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Counsellor;
