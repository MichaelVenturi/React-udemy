import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router";
const HomeIconLink = () => {
  return (
    <div className="about-link">
      <NavLink to="/" activeClassName="active">
        <FaHome size={20} />
      </NavLink>
    </div>
  );
};

export default HomeIconLink;
