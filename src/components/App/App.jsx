import { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Notification from "../Notification/Notification";

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
  const feedbackPercentage = Math.round((values.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onClick={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          values={values}
          feedbackPercentage={feedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
