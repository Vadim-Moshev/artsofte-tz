import "./index.scss";

const ThinHeader = ({ text, className }) => {
  return <div className={`thin-header ${className}`}>{text}</div>;
};

export default ThinHeader;
