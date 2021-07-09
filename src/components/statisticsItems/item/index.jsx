import "./index.scss";

const Item = ({ iconClass, bigText, smallText }) => {
  const iconClassName = `fa ${iconClass} statistics-item__icon`;

  return (
    <div className="statistics-item">
      <i aria-hidden="true" className={iconClassName}></i>
      <div className="statistics-item__big-text">{bigText}</div>
      <div className="statistics-item__small-text">{smallText}</div>
    </div>
  );
};

export default Item;
