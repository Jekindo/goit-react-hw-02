import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import './App.css';

function App() {
  const STORAGE_KEY = 'reviews';

  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem(STORAGE_KEY);

    return savedReviews !== null
      ? JSON.parse(savedReviews)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = feedbackType => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveReviews = Math.round((reviews.good / totalFeedback) * 100);

  return (
    <>
      <Description />

      <Options handleClick={updateFeedback} onReset={resetFeedback} totalFeedback={totalFeedback} />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          positiveReviews={positiveReviews}
          totalFeedback={totalFeedback}
          reviews={reviews}
        />
      )}
    </>
  );
}

export default App;
