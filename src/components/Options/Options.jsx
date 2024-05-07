export default function Options({ onClick, onReset, totalFeedback }) {
  return (
    <>
      {/* {options.map((option) => (
        <button key={option} onClick={() => onClick(option)}>
          {option}
        </button>
      ))} */}
      <button onClick={() => onClick("good")}>Good</button>
      <button onClick={() => onClick("neutral")}>Neutral</button>
      <button onClick={() => onClick("bad")}>Bad</button>
      {totalFeedback > 0 ? <button onClick={onReset}>Reset</button> : undefined}
    </>
  );
}
