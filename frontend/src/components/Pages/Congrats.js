//useState to show this page if drag and drop was sucesful (url should not exist for this)
import React from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import useWindowsize from "../../hooks/use-windowsize";
import pic1 from "./Img/BlockchainFinal.png";
import pic2 from "./Img/Partypopper.png";
import pic3 from "./Img/Celebration2.png";
import pic4 from "./Img/Celebration.png";
import pic5 from "./Img/Ballons.png";

const Congrats = () => {
  const { width, height } = useWindowsize();
  return (
    <div className="items-center text-center">
      <div className="font-bold mt-12 text-3xl">Organisation in Blocks</div>
      <p className="text-xl font-bold mb-4">
        Congrats!
      </p>
      <Confetti width={width} height={height} />
      <div className="grid grid-cols-2 h-32">
        <img src={pic3} />
        <img src={pic2} />
      </div>
      <div className="flex justify-center h-48 ">
        <img src={pic1} />
      </div>
      <div className="grid grid-cols-3 mt-6 h-32 ml-48">
        <img src={pic2} className="scale-75"/>
        <img src={pic5} className="scale-50"/>
        <img src={pic4} className="scale-50"/>
      </div>
      <div className="flex justify-around mt-4">
        <Link to="/achievement" className="bg-gray-500 text-white text-center text-lg border-2 rounded-full border-white hover:font-bold hover:scale-110 py-2 w-48 mt-16">
          Achievements
        </Link>
        <Link
          to="/organisation"
          className="bg-gray-500 text-white text-center text-lg border-2 rounded-full border-white hover:font-bold hover:scale-110 py-2 w-48 mt-16"
        >
          Block Organisation
        </Link>
      </div>
    </div>
  );
};

export default Congrats;
