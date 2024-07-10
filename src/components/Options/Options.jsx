const Options = ({ handleClick, totalFeedback, onReset }) => {
  const isResetBtnVisible = totalFeedback ? true : false;

  return (
    <div>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
      {isResetBtnVisible && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
