import { Link, NavLink } from "react-router";
import AboutIconLink from "./AboutIconLink";
import HomeIconLink from "./HomeIconLink";
const Header = ({ headerText = "Feedback UI", bgColor = "rgba(0,0,0,0.4)", textColor = "#ff6a95" }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <HomeIconLink />
      </div>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none", color: "#ff6a95" }}>
          <h2>{headerText}</h2>
        </Link>
      </div>
      <div className="container">
        <AboutIconLink />
      </div>
    </header>
  );
};

export default Header;
