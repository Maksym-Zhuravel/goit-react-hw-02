export default function Options({ options, onClick, onReset, totalFeedback }) {
  return (
    <>
      {options.map((option) => (
        <button key={option} onClick={() => onClick(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 ? <button onClick={onReset}>Reset</button> : undefined}
    </>
  );
}
