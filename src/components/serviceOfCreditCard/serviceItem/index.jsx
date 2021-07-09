import "./index.scss";

const ServiceItem = ({ pathToPicture, caption }) => {
  return (
    <div className="service-item">
      <img alt="" className="service-item__picture" src={pathToPicture} />
      <div className="service-item__caption-container">
        <div className="caption">{caption}</div>
      </div>
    </div>
  );
};

export default ServiceItem;
