import "./index.scss";

const TextArea = ({ className, placeholder }) => {
  return (
    <textarea placeholder={placeholder} className={`text-area ${className}`} />
  );
};

export default TextArea;
