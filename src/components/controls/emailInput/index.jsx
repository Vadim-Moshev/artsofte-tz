import "./index.scss";

const EmailInput = ({ className, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      type="email"
      className={`email-input ${className}`}
    />
  );
};

export default EmailInput;
