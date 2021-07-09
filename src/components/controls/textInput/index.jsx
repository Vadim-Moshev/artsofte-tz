import "./index.scss";

const TextInput = ({ className, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className={`text-input ${className}`}
    />
  );
};

export default TextInput;
