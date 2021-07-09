import { Link } from "react-router-dom";
import "./index.scss";

const CreateAccountLink = () => {
  return (
    <Link className="create-account-link" to="/">
      Create account
    </Link>
  );
};

export default CreateAccountLink;
