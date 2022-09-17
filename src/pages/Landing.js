import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Helping you find your perfect dream job without much hassle. Because
            you deserve something special!!!
          </p>
          <Link to="/register" className="btn btn-hero"> Login/Register </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};


export default Landing;
