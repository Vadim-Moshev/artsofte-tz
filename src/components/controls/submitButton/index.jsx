import "./index.scss";

const SubmitButton = ({ className }) => {
  return (
    <input
      value="submit"
      type="submit"
      className={`submit-button ${className}`}
    />
  );
};

export default SubmitButton;
