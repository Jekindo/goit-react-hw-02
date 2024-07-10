const Feedback = ({ reviews: { good, neutral, bad }, totalFeedback, positiveReviews }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveReviews}%</li>
    </ul>
  );
};

export default Feedback;
