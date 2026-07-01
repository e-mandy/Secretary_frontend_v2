import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex h-full items-center justify-between px-4">
      <div>
        <Link to="/">Dashboard</Link>
      </div>
    </div>
  );
};

export default NavBar;
