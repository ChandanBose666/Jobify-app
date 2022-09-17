import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Looks like you encountered an error</h3>
        <p>Click on the below link to get back to previous page</p>
        <Link to="/landing">Back home</Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
