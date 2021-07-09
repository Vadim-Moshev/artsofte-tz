import "./index.scss";

const BoldHeader = ({ text, className }) => {
  return <div className={`bold-header ${className}`}>{text}</div>;
};

export default BoldHeader;
