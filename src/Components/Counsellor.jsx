import React from "react";

import { Link } from "react-router-dom";
import counsellorImage from "../assets/punam-kumari.jpg";

import {

    CalendarDays,


    CheckCircle2,

    ArrowRight,

    HeartHandshake,

    Brain,

    Users,

    GraduationCap,

    Heart,

    MessageCircle,

    ShieldCheck,

    Sparkles,

    UserRound,

    Phone,

} from "lucide-react";

import "./Counsellor.css";

/* Counselling services */

const services = [

    {

        icon: Brain,

        title: "Child & Adolescent Counselling",

        description:

            "Support for emotional, behavioural, developmental and teenage concerns.",

    },

    {

        icon: Sparkles,

        title: "CBT (Cognitive Behavioural Therapy)",

        description:

            "A structured approach to understanding thoughts, feelings and behaviour.",

    },

    {

        icon: UserRound,

        title: "Individual Counselling",

        description:

            "A supportive space to explore personal challenges and emotional well-being.",

    },

    {

        icon: HeartHandshake,

        title: "Couples & Marital Counselling",

        description:

            "Guidance to improve communication, understanding and relationship skills.",

    },

    {

        icon: Users,

        title: "Family Counselling",

        description:

            "Support for family communication, relationships and conflict resolution.",

    },

    {

        icon: GraduationCap,

        title: "Career & Academic Counselling",

        description:

            "Guidance for academic pressure, career choices and personal development.",

    },

    {

        icon: Heart,

        title: "Stress, Anxiety & Depression Counselling",

        description:

            "A supportive approach to emotional difficulties and everyday stressors.",

    },

    {

        icon: ShieldCheck,

        title: "Behaviour & Anger Management",

        description:

            "Explore emotional triggers and develop healthier coping strategies.",

    },

    {

        icon: MessageCircle,

        title: "Parenting Counselling",

        description:

            "Guidance for parents navigating children's emotional and behavioural needs.",

    },

];

/* Published Business Hours */

const businessHours = [

    { day: "Monday", hours: "11am-1pm", isAvailable: true },

    { day: "Tuesday", hours: "4pm-5pm", isAvailable: true },

    { day: "Wednesday", hours: "Not provided", isAvailable: false },

    { day: "Thursday", hours: "4pm-5pm", isAvailable: true },

    { day: "Friday", hours: "5pm-7pm", isAvailable: true },

    { day: "Saturday", hours: "Not provided", isAvailable: false },

    { day: "Sunday", hours: "Not provided", isAvailable: false },

];

function Counsellor() {

    return (

        <main className="counsellor-page">

            <section className="counsellor-hero">

                <div className="counsellor-hero-decoration counsellor-decoration-one" />

                <div className="counsellor-hero-decoration counsellor-decoration-two" />

                <div className="counsellor-container counsellor-hero-layout">

                    <div className="counsellor-hero-content">

                        <span className="counsellor-eyebrow">

                            <span className="counsellor-eyebrow-line" />

                            MENTAL HEALTH & WELLNESS CENTRE

                        </span>

                        <h1>

                            A Safe Space to

                            <span> Talk, Understand & Grow</span>

                        </h1>

                        <p className="counsellor-hero-subtitle">

                            Counselling support for children, adolescents, individuals

                            and families.

                        </p>

                        <p className="counsellor-hero-description">

                            Every person has a story worth listening to. Discover a

                            respectful and supportive environment where you can discuss

                            concerns, explore your feelings and learn about suitable

                            counselling options.

                        </p>

                        <div className="counsellor-hero-actions">

                            <a

                                href="#counsellor-booking"

                                className="counsellor-primary-btn"

                            >

                                <CalendarDays size={18} />

                                Book a Consultation

                            </a>

                            <a

                                href="#counsellor-services"

                                className="counsellor-secondary-btn"

                            >

                                Explore Services

                                <ArrowRight size={17} />

                            </a>

                        </div>

                        <div className="counsellor-experience-note">

                            <ShieldCheck size={18} />

                            <span>18+ years of counselling experience</span>

                        </div>

                    </div>

                    <div className="counsellor-hero-visual counsellor-profile-visual">
                        <div className="profile-orbit profile-orbit-one" />
                        <div className="profile-orbit profile-orbit-two" />

                        <div className="profile-image-ring">
                            <div className="profile-image-inner">
                                <img src={counsellorImage} alt="Counsellor at Man Ki Baat" />
                            </div>
                        </div>

                        <div className="profile-floating-symbol symbol-brain"><Brain size={23} /></div>
                        <div className="profile-floating-symbol symbol-heart"><Heart size={24} /></div>
                        <div className="profile-floating-symbol symbol-shield"><ShieldCheck size={22} /></div>

                        <div className="profile-message-card message-listening">
                            <div className="profile-message-icon green"><MessageCircle size={22} /></div>
                            <div className="profile-message-copy">
                                <strong>A Friendly Listening Ear</strong>
                                <span>Share your thoughts without judgement.</span>
                            </div>
                            <span className="profile-status-dot green-dot" />
                        </div>


                        {/*
    <div className="profile-message-card message-guidance">
        <div className="profile-message-icon blue"><Users size={22} /></div>
        <div className="profile-message-copy">
            <strong>Guidance for Every Stage</strong>
            <span>Support for children and families.</span>
        </div>
        <span className="profile-status-dot blue-dot" />
    </div>
*/}
                        <div className="profile-message-card message-personal">
                            <div className="profile-message-icon green"><Sparkles size={22} /></div>
                            <div className="profile-message-copy">
                                <strong>Personalised Care</strong>
                                <span>Every individual journey matters.</span>
                            </div>
                            <span className="profile-status-dot green-dot" />
                        </div>
                    </div>

                </div>

            </section>

            <section className="counsellor-intro-section">

                <div className="counsellor-container counsellor-intro-layout">

                    <div>

                        <span className="counsellor-section-label">

                            ABOUT OUR SUPPORT

                        </span>

                        <h2>

                            Your concerns deserve

                            <span> time, care and attention.</span>

                        </h2>

                    </div>

                    <div className="counsellor-intro-copy">

                        <p>

                            Mental and emotional well-being can influence our relationships,

                            learning, work and everyday life. Speaking with a counsellor

                            may help you better understand your concerns and explore

                            constructive ways forward.

                        </p>

                        <p>

                            Man Ki Baat offers counselling and guidance across different

                            stages of life, with an emphasis on listening, empathy,

                            individual needs and respectful communication.

                        </p>

                    </div>

                </div>

            </section>

            <section

                className="counsellor-services-section"

                id="counsellor-services"

            >

                <div className="counsellor-container">

                    <header className="counsellor-section-heading">

                        <span className="counsellor-section-label">

                            HOW WE CAN SUPPORT YOU

                        </span>

                        <h2>

                            Our Counselling

                            <span> Services</span>

                        </h2>

                        <p>

                            Explore the areas where counselling and guidance may help.

                        </p>

                    </header>

                    <div className="counsellor-services-grid">

                        {services.map((service, index) => {

                            const Icon = service.icon;

                            return (

                                <article

                                    className="counsellor-service-card"

                                    key={service.title}

                                    style={{ "--service-index": index }}

                                >

                                    <div className="counsellor-service-icon">

                                        <Icon size={25} strokeWidth={1.7} />

                                    </div>

                                    <span className="counsellor-service-number">

                                        {String(index + 1).padStart(2, "0")}

                                    </span>

                                    <h3>{service.title}</h3>

                                    <p>{service.description}</p>

                                    <a

                                        href="#counsellor-booking"

                                        className="counsellor-service-link"

                                    >

                                        Enquire about this service

                                        <ArrowRight size={16} />

                                    </a>

                                </article>

                            );

                        })}

                    </div>

                </div>

            </section>

            <section className="counsellor-approach">

                <div className="counsellor-container counsellor-approach-layout">

                    <div className="counsellor-approach-visual">

                        <div className="counsellor-approach-icon">

                            <HeartHandshake size={62} strokeWidth={1.3} />

                        </div>

                        <span>Every conversation starts with listening.</span>

                    </div>

                    <div className="counsellor-approach-content">

                        <span className="counsellor-section-label">

                            OUR APPROACH

                        </span>

                        <h2>

                            Understanding first.

                            <span> Support at every step.</span>

                        </h2>

                        <div className="counsellor-approach-point">

                            <CheckCircle2 size={21} />

                            <div>

                                <h3>Listen without judgement</h3>

                                <p>

                                    Share your concerns in a respectful and supportive

                                    conversation.

                                </p>

                            </div>

                        </div>

                        <div className="counsellor-approach-point">

                            <CheckCircle2 size={21} />

                            <div>

                                <h3>Understand individual needs</h3>

                                <p>

                                    Discuss the challenges and goals that matter to you.

                                </p>

                            </div>

                        </div>

                        <div className="counsellor-approach-point">

                            <CheckCircle2 size={21} />

                            <div>

                                <h3>Explore suitable next steps</h3>

                                <p>

                                    Learn about appropriate guidance and possible support

                                    options for your situation.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Calendar */}

            <section

                className="counsellor-booking-section"

                id="counsellor-booking"

            >

                <div className="counsellor-container counsellor-booking-layout">

                    <div className="counsellor-booking-intro">

                        <span className="counsellor-section-label">

                            TAKE THE FIRST STEP

                        </span>

                        <h2>

                            Let's find a time

                            <span> to talk.</span>

                        </h2>

                        <p>

                            Check our published counselling hours or reach out directly to

                            enquire about an initial consultation with Man Ki Baat.

                        </p>

                        <div className="counsellor-booking-benefit">

                            <CheckCircle2 size={19} />

                            <span>Published counselling hours for scheduled consultations</span>

                        </div>

                        <div className="counsellor-booking-benefit">

                            <CheckCircle2 size={19} />

                            <span>You can contact us anytime during the day with your query</span>

                        </div>

                    </div>

                    <div className="counsellor-hours-card">

                        <div className="counsellor-hours-header">

                            <h3 className="counsellor-hours-title">Business hours</h3>

                            <p className="counsellor-hours-subtitle">

                                Mental Health &amp; Wellness Centre (Counselor)

                            </p>

                        </div>

                        <div className="counsellor-hours-list">

                            {businessHours.map((item) => (

                                <div key={item.day} className="counsellor-hours-row">

                                    <span className="counsellor-hours-day">{item.day}</span>

                                    <span

                                        className={`counsellor-hours-time ${!item.isAvailable ? "counsellor-hours-empty" : ""

                                            }`}

                                    >

                                        {item.hours}

                                    </span>

                                </div>

                            ))}

                        </div>

                        <p className="counsellor-hours-footer">

                            You can{" "}

                            <Link to="/contact" className="counsellor-hours-contact-link">

                                contact us

                            </Link>{" "}

                            anytime during the day with your query.

                        </p>

                    </div>

                </div>

            </section>

            <section className="counsellor-final-cta">

                <div className="counsellor-container counsellor-final-cta-content">

                    <div>

                        <span>YOUR WELL-BEING MATTERS</span>

                        <h2>

                            You don't have to figure everything out alone.

                        </h2>

                        <p>

                            Reach out to learn more about counselling and available

                            support options.

                        </p>

                    </div>

                    <a

                        href="tel:+918697404639"

                        className="counsellor-cta-button"

                    >

                        <Phone size={18} />

                        Contact Us

                    </a>

                </div>

            </section>

        </main>

    );

}

export default Counsellor;
