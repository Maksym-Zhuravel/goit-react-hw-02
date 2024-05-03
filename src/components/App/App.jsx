import { useState } from "react";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (value) => {
    setValues((values) => ({
      ...values,
      [value]: values[value] + 1,
    }));
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 ? <Feedback values={values} /> : "No feedback yet"}
    </>
  );
}
