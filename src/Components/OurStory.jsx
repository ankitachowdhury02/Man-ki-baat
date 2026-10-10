
import "./OurStory.css";

const principles = [
  {
    title: "Compassionate Care",
    description:
      "Listen with empathy and respect every individual's experience.",
  },
  {
    title: "Personalised Guidance",
    description:
      "Consider each person's needs, concerns and circumstances.",
  },
  {
    title: "Trust & Confidentiality",
    description:
      "Build supportive relationships through respectful communication.",
  },
  {
    title: "Emotional Well-being",
    description:
      "Encourage self-understanding, healthy coping and personal growth.",
  },
];

function OurStory() {
  return (
    <section className="our-story-section" id="about">
      <div className="our-story-container">
        <p className="story-eyebrow">
          <span></span>
          OUR STORY
        </p>

        <h2 className="story-heading">
          More Than Counselling.
          <span>A Space to Be Heard.</span>
        </h2>

        <p className="story-description">
          Man Ki Baat – Child Development &amp; Mental Health
          Wellness Society is dedicated to supporting children,
          adolescents, adults and families through compassionate
          counselling and guidance. We believe every individual
          deserves to feel heard, respected and understood.
        </p>

        <div className="story-principles">
          {principles.map((principle) => (
            <article
              className="story-principle-card"
              key={principle.title}
            >
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStory;
