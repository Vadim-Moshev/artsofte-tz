import Step from "./step";

import "./index.scss";

const TakeCardSteps = () => {
  const text =
    "Information in the database is published in two formats." +
    " It is available in PDF comparison according to type of credit card.";
  return (
    <div className="take-card-steps">
      <Step iconIndex={1} header="ONLINE APPLICATION" text={text} />
      <Step iconIndex={2} active header="GET APPROVAL" text={text} />
      <Step iconIndex={3} header="GET YOUR CARD" text={text} />
    </div>
  );
};

export default TakeCardSteps;
