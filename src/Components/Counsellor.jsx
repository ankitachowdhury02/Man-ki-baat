
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    CalendarDays,
    Clock3,
    ChevronLeft,
    ChevronRight,
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

/*
  Schedule uses JavaScript weekday numbers:
  Sunday = 0, Monday = 1, Tuesday = 2, etc.
*/
const weeklySchedule = {
    0: { label: "Sunday", slots: [] },

    1: {
        label: "Monday",
        slots: [
            "11:00 AM",
            "11:30 AM",
            "12:00 PM",
            "12:30 PM",
        ],
    },

    2: {
        label: "Tuesday",
        slots: [
            "4:00 PM",
            "4:15 PM",
            "4:30 PM",
            "4:45 PM",
        ],
    },

    3: { label: "Wednesday", slots: [] },

    4: {
        label: "Thursday",
        slots: [
            "4:00 PM",
            "4:15 PM",
            "4:30 PM",
            "4:45 PM",
        ],
    },

    5: {
        label: "Friday",
        slots: [
            "5:00 PM",
            "5:30 PM",
            "6:00 PM",
            "6:30 PM",
        ],
    },

    6: { label: "Saturday", slots: [] },
};

function Counsellor() {
    const navigate = useNavigate();

    const [dateOffset, setDateOffset] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");

    /* Generate three dates starting from today */
    const dates = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        today.setDate(today.getDate() + dateOffset);

        return Array.from({ length: 3 }, (_, index) => {
            const date = new Date(today);
            date.setDate(today.getDate() + index);

            return {
                date,
                weekday: date.toLocaleDateString("en-IN", {
                    weekday: "short",
                }),
                month: date.toLocaleDateString("en-IN", {
                    month: "short",
                }),
                day: date.getDate(),
            };
        });
    }, [dateOffset]);

    const handleSelectDate = (date) => {
        setSelectedDate(date);
        setSelectedTime("");
    };

    const handleContinueBooking = () => {
        if (!selectedDate || !selectedTime) return;

        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
        const day = String(selectedDate.getDate()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}`;

        navigate(
            `/contact?date=${encodeURIComponent(
                formattedDate
            )}&time=${encodeURIComponent(
                selectedTime
            )}&type=${encodeURIComponent("Initial consultation")}`
        );
    };

    return (
        <main className="counsellor-page">

            {/* ================= HERO ================= */}
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

                    <div className="counsellor-hero-visual">
                        <div className="counsellor-visual-circle">
                            <div className="counsellor-visual-inner">
                                <HeartHandshake size={76} strokeWidth={1.2} />
                                <span>Listen. Understand. Support.</span>
                            </div>
                        </div>

                        <div className="counsellor-floating-card">
                            <div className="counsellor-floating-icon">
                                <Heart size={20} />
                            </div>

                            <div>
                                <strong>Care with Understanding</strong>
                                <span>Every journey matters</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= INTRODUCTION ================= */}
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

            {/* ================= SERVICES ================= */}
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

            {/* ================= APPROACH ================= */}
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

            {/* ================= BOOKING CALENDAR ================= */}
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
                            Choose a preferred date and time to enquire about an initial
                            consultation with Man Ki Baat.
                        </p>

                        <div className="counsellor-booking-benefit">
                            <CheckCircle2 size={19} />
                            <span>Choose from the published counselling hours</span>
                        </div>

                        <div className="counsellor-booking-benefit">
                            <CheckCircle2 size={19} />
                            <span>Appointment confirmation follows availability checks</span>
                        </div>
                    </div>

                    <div className="counsellor-booking-widget">
                        <div className="counsellor-booking-header">
                            <div className="counsellor-booking-header-icon">
                                <CalendarDays size={24} />
                            </div>

                            <div>
                                <h3>Book a Free Initial Consultation</h3>
                                <p>Mental Health &amp; Wellness Centre</p>
                            </div>
                        </div>

                        <div className="counsellor-booking-body">
                            <div className="counsellor-calendar-toolbar">
                                <div>
                                    <h4>Select date &amp; time</h4>
                                    <p>Choose your preferred available slot</p>
                                </div>

                                <div className="counsellor-calendar-arrows">
                                    <button
                                        type="button"
                                        aria-label="Previous dates"
                                        disabled={dateOffset === 0}
                                        onClick={() => {
                                            setDateOffset((current) => Math.max(0, current - 3));
                                            setSelectedDate(null);
                                            setSelectedTime("");
                                        }}
                                    >
                                        <ChevronLeft size={19} />
                                    </button>

                                    <button
                                        type="button"
                                        aria-label="Next dates"
                                        onClick={() => {
                                            setDateOffset((current) => current + 3);
                                            setSelectedDate(null);
                                            setSelectedTime("");
                                        }}
                                    >
                                        <ChevronRight size={19} />
                                    </button>
                                </div>
                            </div>

                            <div className="counsellor-calendar-grid">
                                {dates.map((item) => {
                                    const daySchedule =
                                        weeklySchedule[item.date.getDay()];

                                    const isSelected =
                                        selectedDate?.toDateString() ===
                                        item.date.toDateString();

                                    return (
                                        <div
                                            key={item.date.toISOString()}
                                            className={`counsellor-date-column ${isSelected
                                                    ? "counsellor-date-column-active"
                                                    : ""
                                                }`}
                                        >
                                            <button
                                                type="button"
                                                className="counsellor-date-heading"
                                                onClick={() => handleSelectDate(item.date)}
                                            >
                                                <span>{item.weekday}</span>

                                                <strong>
                                                    {item.month} {item.day}
                                                </strong>

                                                {isSelected && (
                                                    <CheckCircle2
                                                        size={14}
                                                        className="counsellor-date-check"
                                                    />
                                                )}
                                            </button>

                                            <div className="counsellor-time-list">
                                                {daySchedule.slots.length > 0 ? (
                                                    daySchedule.slots.map((time) => {
                                                        const isTimeSelected =
                                                            isSelected && selectedTime === time;

                                                        return (
                                                            <button
                                                                type="button"
                                                                key={time}
                                                                className={`counsellor-time-slot ${isTimeSelected
                                                                        ? "counsellor-time-slot-active"
                                                                        : ""
                                                                    }`}
                                                                aria-pressed={isTimeSelected}
                                                                onClick={() => {
                                                                    setSelectedDate(item.date);
                                                                    setSelectedTime(time);
                                                                }}
                                                            >
                                                                {time}
                                                            </button>
                                                        );
                                                    })
                                                ) : (
                                                    <div className="counsellor-no-slots">
                                                        Not provided
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="counsellor-booking-hours-note">
                                <Clock3 size={15} />
                                <span>
                                    Mon: 11 AM–1 PM · Tue/Thu: 4 PM–5 PM · Fri: 5 PM–7 PM
                                </span>
                            </div>

                            <div className="counsellor-booking-summary">
                                {selectedDate && selectedTime ? (
                                    <p>
                                        <CheckCircle2 size={17} />

                                        <span>
                                            Preferred:{" "}
                                            {selectedDate.toLocaleDateString("en-IN", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}{" "}
                                            at {selectedTime}
                                        </span>
                                    </p>
                                ) : (
                                    <p>
                                        <Clock3 size={17} />
                                        <span>Select a date and time to continue.</span>
                                    </p>
                                )}
                            </div>

                            <button
                                type="button"
                                className="counsellor-booking-continue"
                                disabled={!selectedDate || !selectedTime}
                                onClick={handleContinueBooking}
                            >
                                Continue Booking
                                <ArrowRight size={18} />
                            </button>

                            <p className="counsellor-booking-note">
                                Your selection is a preferred time, not a confirmed
                                appointment. Our team must confirm availability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
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
