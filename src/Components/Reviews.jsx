
import React from "react";
import { Star, MessageCircle } from "lucide-react";
import "./Reviews.css";

const reviews = [
  {
    name: "Priya S.",
    initial: "P",
    review:
      "I felt heard and understood. The supportive conversation helped me reflect on my concerns.",
    time: "Client feedback",
  },
  {
    name: "Rohan M.",
    initial: "R",
    review:
      "The guidance was thoughtful and helped me look at my situation from a different perspective.",
    time: "Client feedback",
  },
  {
    name: "Anjali K.",
    initial: "A",
    review:
      "A welcoming environment where I could talk openly and feel respected.",
    time: "Client feedback",
  },
  {
    name: "Vikram D.",
    initial: "V",
    review:
      "The sessions encouraged me to understand my emotions and think about practical next steps.",
    time: "Client feedback",
  },
  {
    name: "Sara A.",
    initial: "S",
    review:
      "I appreciated the patient listening and the personalised approach to my concerns.",
    time: "Client feedback",
  },
  {
    name: "Neha R.",
    initial: "N",
    review:
      "The conversation gave me space to reflect on my challenges in a supportive setting.",
    time: "Client feedback",
  },
];

function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="reviews-title-block">
            <div className="reviews-eyebrow">
              <span />
              CLIENT FEEDBACK
            </div>

            <h2>
              Words that reflect <span>trust and care.</span>
            </h2>

            <p className="reviews-subtitle">
              Every person's experience is different. We value respectful
              conversations, thoughtful guidance and a supportive environment.
            </p>
          </div>

          <div className="reviews-summary">
            <div className="reviews-summary-icon">
              <MessageCircle size={27} />
            </div>

            <div>
              <h3>Every voice matters</h3>
              <p>
                Your feedback helps us continue improving the support we offer.
              </p>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((item) => (
            <article className="review-card" key={item.name}>
              <div className="review-card-top">
                <div className="review-stars" aria-label="Illustrative stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <span className="review-label">FEEDBACK</span>
              </div>

              <p className="review-quote">"{item.review}"</p>

              <div className="review-author">
                <div className="review-avatar">{item.initial}</div>

                <div className="review-author-info">
                  <h3>{item.name}</h3>
                  <span>{item.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="reviews-disclaimer">
          The examples shown are illustrative placeholders, not verified
          testimonials from actual clients.
        </p>
      </div>
    </section>
  );
}

export default Reviews;
