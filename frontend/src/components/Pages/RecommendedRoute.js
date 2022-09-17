//subpage of organisation
import React from "react";
import { Link } from "react-router-dom";
import pic1 from "./Img/Component_10.png";
import pic2 from "./Img/DigitalSignature.png";
import pic3 from "./Img/Validation.png";
import pic4 from "./Img/Nonce.png";
import pic5 from "./Img/Hash.png";
import pic6 from "./Img/TimeStamp.png";

const RecommendedRoute = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-3xl font-bold mb-8">Organization in Blocks</h1>
        <p className="text-xl font-bold mb-16">
          Click on each item to discover more details
        </p>
      </div>
      <div className="">
        <div className=" flex justify-center ">
          <div className="grid grid-cols-3 gap-y-6 gap-x-16 ">
            <img src={pic1} />
            <img src={pic2} />
            <img src={pic3} />
            <img src={pic4} />
            <img src={pic5} />
            <img src={pic6} />
          </div>
        </div>
        <div className="flex justify-end items-center ml-32">
          <Link
            to="/organisation/game-explanation"
            className="bg-gray-500 text-white text-center text-lg border-2 rounded-full border-white hover:font-bold hover:scale-110 py-2 w-48 mt-4 h-12 mb-16"
          >
            Your turn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedRoute;
