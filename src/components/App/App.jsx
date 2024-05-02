import { useState } from "react";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleChangeValue = (value) => {
    setValues((values) => ({
      ...values,
      [value]: values[value] + 1,
    }));
  };

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <button onClick={() => handleChangeValue("good")}>Good</button>
      <button onClick={() => handleChangeValue("neutral")}>Neutral</button>
      <button onClick={() => handleChangeValue("bad")}>Bad</button>
      <Feedback values={values} />
    </>
  );
}
