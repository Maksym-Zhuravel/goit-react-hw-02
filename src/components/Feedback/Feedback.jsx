export default function Feedback({
  totalFeedback,
  values: { good, neutral, bad },
  feedbackPersentage,
}) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {feedbackPersentage}%</li>
    </ul>
  );
}
