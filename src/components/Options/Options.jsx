export default function Options({ options, onClick, onReset }) {
  return (
    <>
      {options.map((option) => (
        <button key={option} onClick={() => onClick(option)}>
          {option}
        </button>
      ))}
      <button onClick={onReset}>Reset</button>
    </>
  );
}
