// subpage of overview
import React from "react";
import { Link } from "react-router-dom";
import OptionsGrid from "./OptionsGrid";


const Organisation = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-3xl font-bold mb-16">Organisation in Blocks</h1>
      <p className="text-xl font-bold mb-16">
        Please select the topic you want to deep dive into
      </p>
      <div className="flex flex-row justify-around text-center w-4/5">
        <div className="w-1/2 mr-12">
          <div className="bg-brownRed text-white rounded-lg py-4 font-bold text-xl shadow-lg mb-16">Recommended Route</div>
          <div className="flex flex-col gap-y-6 ">
            <button className="bg-veryLightGray border-2 rounded-full py-2 shadow-md hover:bg-veryPaleRed">Distributed Ledger</button>
            <button className="bg-veryLightGray border-2 rounded-full py-2 shadow-md hover:bg-veryPaleRed">Nodes</button>
            <button className="bg-veryLightGray border-2 rounded-full py-2 shadow-md hover:bg-veryPaleRed">Transactions</button>
            <Link to="/organisation/recommended-route" className="bg-veryLightGray border-2 rounded-full py-2 shadow-md hover:bg-veryPaleRed">Organization in Blocks</Link>
          </div>
        </div>
        <div className="w-1/2">
          <div className="bg-yellowOcre text-white rounded-lg py-4 font-bold text-xl shadow-lg mb-16">Explore</div>
          <OptionsGrid />
        </div>
      </div>
    </div>
  );
};

export default Organisation;
