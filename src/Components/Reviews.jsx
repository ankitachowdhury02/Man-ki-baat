
import React from "react";
import { Star, MessageCircle } from "lucide-react";
import "./Reviews.css";

const reviews = [
  {
    name: "Vinod",
    initial: "V",
    review:
      "Maam provides excellent counselling. When I was troubled and directionless, I met her. I followed the guidance she gave, and today I am completely fine.\nThank you so much maam 🙏",
    time: "Google Review",
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

        <div className="reviews-google-cta">
          <a
            href="https://www.google.com/maps/place/Mental+Health+%26+Wellness+Centre+(Counselor)/@22.505176,88.3674077,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02713394369abb:0x155cc1f01fa5450!8m2!3d22.505176!4d88.3674077!16s%2Fg%2F11yvpwrfcc?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-google-btn"
          >
            <svg
              className="reviews-google-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
              />
            </svg>
            <span>Read all reviews on Google</span>
          </a>
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
