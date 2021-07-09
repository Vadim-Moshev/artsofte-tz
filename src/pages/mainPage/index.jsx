import { Link } from "react-router-dom";

import Header from "../../components/header";
import BoldHeader from "../../components/boldHeader";
import ThinHeader from "../../components/thinHeader";
import TakeCardSteps from "../../components/takeCardSteps";
import ServiceOfCreditCard from "../../components/serviceOfCreditCard";
import StatisticsItems from "../../components/statisticsItems";
import YourMessageForm from "../../components/yourMessageForm";

import "./index.scss";

const MainPage = () => {
  return (
    <>
      <div className="upper-block">
        <div className="header-bar">
          <Header />
        </div>

        <div className="take-a-card">
          <div className="take-a-card__header">
            To Make Your Life Easier Take a Card
          </div>
          <div className="take-a-card__small-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered There are many variations of passages of
            Lorem Ipsum randomised words which don't look even slightly
            believable.
          </div>
          <Link to="/" className="take-a-card__apply-button">
            APPLY NOW
          </Link>
          <div className="take-a-card__three-cards-picture"></div>
        </div>
      </div>

      <div className="easy-process">
        <div className="easy-process-central">
          <ThinHeader
            className="easy-process-central__thin-header"
            text="EASY PROCESS"
          />
          <BoldHeader
            className="easy-process-central__bold-header"
            text="TO GET A CREDIT CARD"
          />
          <TakeCardSteps />
        </div>
      </div>

      <div className="service-of-credit-card">
        <ThinHeader
          className="service-of-credit-card__thin-header"
          text="USEFUL SERVICE AVAIBLE"
        />
        <BoldHeader
          className="service-of-credit-card__bold-header"
          text="SERVICE OF CREDIT CARD"
        />
        <ServiceOfCreditCard />
      </div>

      <div className="statistics">
        <StatisticsItems className="statistics__items" />
      </div>

      <div className="form">
        <BoldHeader className="form__header" text="Your Message" />
        <YourMessageForm />
      </div>

      <footer className="footer">
        Copyright @ Digital Marketing. AllRight Reseverd
      </footer>
    </>
  );
};

export default MainPage;
