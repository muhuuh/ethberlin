import React from "react";
import { Link } from "react-router-dom";
import OptionsGameGrid from "./OptionsGameGrid";
import pic1 from "../Img/singleblock.png";
import pic2 from "../Img/BlockchainFinal.png";
import pic3 from "../Img/Step1.png"
import pic4 from "../Img/Step2.png"
import pic5 from "../Img/Step3.png"

const GameExplanation = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-3xl font-bold mb-8">Organization in Blocks</h1>
        <p className="text-xl font-bold ">Bring the pieces together</p>
      </div>
      <div className="flex flex-row justify-around mb-12 h-48">
        <img src={pic3} className="scale-75"/>
        <img src={pic4} className="scale-75"/>
        <img src={pic5} className="scale-75"/>

      </div>
      <div className="flex flex-row justify-around text-center">
        <div className="w-1/3">
          <OptionsGameGrid />
        </div>
        <div className="w-36">
          <img src={pic1} />
        </div>
        <div className="h-36 w-1/4 rotate-20">
          <img src={pic2} />
        </div>
      </div>
      <div className="flex justify-end">
        <Link
          to="/organisation/build-block"
          className="bg-gray-500 text-white text-center text-lg border-2 rounded-full border-white hover:font-bold hover:scale-110 py-2 w-48 "
        >
          Build it
        </Link>
      </div>
    </div>
  );
};

export default GameExplanation;
