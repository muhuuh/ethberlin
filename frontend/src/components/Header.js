import { useSelector } from "react";
import { NavLink } from "react-router-dom";
import picHeader1 from "./Pages/Img/Header1.png";


const Header = () => {
  // const userList = useSelector(state => state.users.userList);
  return (
    <div>
    <div className="flex flex-row justify-between bg-gray-500 text-white font-bold py-6 px-12">
      <div className="text-3xl">Deasy</div>
      <div className="flex flex-row justify-center gap-x-6 ">
        <NavLink
          to="/overview"
          activeClassName="underline"
          className="text-lg hover:underline hover:scale-110"
        >
          Overview
        </NavLink>
        <NavLink
          to="/achievement"
          activeClassName="underline"
          className="text-lg hover:underline hover:scale-110"
        >
          Achievement
        </NavLink>
      </div>
      <div className="flex flex-row justify-center gap-x-6">
        <NavLink
          to="./signin"
          activeClassName="underline"
          className="text-lg hover:underline hover:scale-110"
        >
          Login
        </NavLink>
      </div>
      
    </div>
    <div className="h-32">
    <img src={picHeader1} />
    </div>
    </div>
  );
};

export default Header;
