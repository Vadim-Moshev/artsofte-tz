import Item from "./item";

import "./index.scss";

const StatisticsItems = ({ className }) => {
  return (
    <div className={`statistics__items-block ${className}`}>
      <Item iconClass="fa-users" bigText="725M" smallText="Happy User" />
      <Item iconClass="fa-heart" bigText="700M" smallText="User Application" />
      <Item
        iconClass="fa-shopping-cart"
        bigText="10M+"
        smallText="Payment Service"
      />
      <Item iconClass="fa-rocket" bigText="600M" smallText="User Feedback" />
    </div>
  );
};

export default StatisticsItems;
