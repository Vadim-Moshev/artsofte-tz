import "./index.scss";

const Step = ({ active, iconIndex, header, text }) => {
  const stepClassName = active ? "step active" : "step";
  const iconClassName = `step__icon icon_${iconIndex}`;

  return (
    <div className={stepClassName}>
      <div className={iconClassName}></div>
      <div className="step__header">{header}</div>
      <div className="step__text">{text}</div>
    </div>
  );
};

export default Step;
