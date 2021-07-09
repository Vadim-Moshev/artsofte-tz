import ServiceItem from "./serviceItem";

import s1 from "../../img/service_1.jpg";
import s2 from "../../img/service_2.jpg";
import s3 from "../../img/service_3.jpg";
import s4 from "../../img/service_4.jpg";

import "./index.scss";

const ServiceOfCreditCard = () => {
  return (
    <div className="service-of-credit-card__items">
      <ServiceItem pathToPicture={s1} caption="Balence transform" />
      <ServiceItem pathToPicture={s2} caption="Internet Banking" />
      <ServiceItem pathToPicture={s3} caption="Buying Payment" />
      <ServiceItem pathToPicture={s4} caption="Buy Air Ticket" />
    </div>
  );
};

export default ServiceOfCreditCard;
