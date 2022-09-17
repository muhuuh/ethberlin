import React from "react";
import { Link } from "react-router-dom";
import pic1 from "./Img/Achievement.png";
import pic2 from "./Img/Achievement blur1.png";
import pic3 from "./Img/Achievement blur2.png";

const Achievements = () => {
  return (
    <div className="mt-16 text-center">
      <h1 className="text-3xl font-bold mb-16">Achievements</h1>

      <div className="flex flex-row justify-center gap-x-10 ">
        <img src={pic1} />
        <img src={pic2} className="scale-75" />
        <img src={pic3} className="scale-75" />
      </div>

      <div className="flex justify-end">
        <Link
          to="/overview"
          className="bg-gray-500 text-white text-center text-lg border-2 rounded-full border-white hover:font-bold hover:scale-110 py-2 w-48"
        >
          Back to Overview
        </Link>
      </div>
    </div>
  );
};

export default Achievements;
