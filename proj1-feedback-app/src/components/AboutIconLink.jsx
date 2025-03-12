import { FaQuestion } from "react-icons/fa";
import { NavLink } from "react-router";
const AboutIconLink = () => {
  return (
    <div className="about-link">
      <NavLink to="/about" activeClassName="active">
        <FaQuestion size={20} />
      </NavLink>
    </div>
  );
};

export default AboutIconLink;
