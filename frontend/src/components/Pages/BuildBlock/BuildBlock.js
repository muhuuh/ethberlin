//insert popup if wrong or show congrats page if correct with useState
import React from "react";
import BlockDrag from "./BlockDrag";
import BlockDragItemList from "./BlockDragItemList";
import pic1 from "../Img/singleblock.png";

const BuildBlock = () => {
  return (
    <div className="text-center mt-16">
      <h1 className="text-3xl font-bold mb-16">Organisation in Blocks</h1>
      <p className="text-xl font-bold mb-32">
        Please select the topic you want to deep dive into
      </p>
      <div className="flex flex-row justify-around ml-56">
        <div className="mr-32">
          <BlockDragItemList />
        </div>
        <div className="fixed z-10 ">
          <BlockDrag />
        </div>
        <div className="relative z-0 scale-x-110">
          <img src={pic1} className="object-contain  w-4/5 -translate-x-40 -translate-y-16" />
        </div>
      </div>
    </div>
  );
};

export default BuildBlock;
