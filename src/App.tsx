import React from "react";

export const App: React.FC = () => {
  const [minVal, setMin] = React.useState(0);
  const [maxVal, setMax] = React.useState(0);
  const [randomVal, setRandomVal] = React.useState(0);

  function handleRandomNumber(e: React.FormEvent<HTMLFormElement>) {
    if (minVal < maxVal && minVal !== maxVal) {
      e.preventDefault();
      setRandomVal(
       // Math.floor(minVal - 0.5 + Math.random() * (maxVal - minVal + 1))
        Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal
      );
    } else {
      alert("Input Rejected Enter the Correct Input");
    }
  }

  return (
    <div className="App">
      <h3 id="title">Random Number Generator</h3>
      <div className="Container">
        <form onSubmit={handleRandomNumber}>
          <label htmlFor="output-stuff">NUMBER :</label>
          <input disabled id="output" type="text" value={randomVal}/>

          <div className="min-area inline">
            <label htmlFor="min-input-box">MIN :</label>
            <input
              className="min-input validate"
              type="number"
              value={minVal}
              onChange={(e) => setMin(parseInt(e.currentTarget.value))}
            />
          </div>

          <div className="max-area">
            <label htmlFor="max-input-box">MAX:</label>
            <input
              className="max-input"
              type="number"
              value={maxVal}
              onChange={(e) => setMax(parseInt(e.currentTarget.value))}
            />
          </div>

          <button className="waves-effect waves-light btn-large" type="submit">
            Random ???
          </button>
        </form>
      </div>
    </div>
  );
};
