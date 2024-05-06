import { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    if (savedValues !== null) {
      return JSON.parse(savedValues).values;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify({ values }));
  }, [values]);

  const updateFeedback = (value) => {
    setValues((values) => ({
      ...values,
      [value]: values[value] + 1,
    }));
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = values.good + values.neutral + values.bad;
  const feedbackPersentage = Math.round((values.good / totalFeedback) * 100);
  const options = ["good", "neutral", "bad"];

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        options={options}
        onClick={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          values={values}
          feedbackPersentage={feedbackPersentage}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}
