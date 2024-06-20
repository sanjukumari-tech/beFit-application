// src/NutritionFeedback.js
import React, { useState } from 'react';
// import './NutritionFeedback.css';
const NutritionFeedback = () => {
    const [feedbackGiven, setFeedbackGiven] = useState(false);
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
  
    const handleButtonClick = () => {
      setFeedbackGiven(true);
    };
  
    const handleStarClick = (starValue) => {
      setRating(starValue);
    };
  
    const handleSubmit = () => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFeedbackGiven(false);
        setRating(0);
      }, 3000); // Change the delay time as needed
    };
  
    return (
      <div className="feedback-container">
        {!feedbackGiven && !submitted && (
          <button className="feedback-btn" onClick={handleButtonClick}>
            Give Feedback
          </button>
        )}
        {feedbackGiven && !submitted && (
          <div className="rating-container">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? 'selected' : ''}`}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
        {submitted && <div className="thank-you-message">Thank you! Your response has been submitted.</div>}
      </div>
    );
  };
export default NutritionFeedback;
