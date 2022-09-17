import React from "react";
import { useState, useSelector } from "react";
import useElement from "../../../hooks/use-element";
import useModal from "../../../hooks/use-modal";
import BlockElementPopupCorrect from "./PopupsBlock/BlockElementPopupCorrect";
import BlockElementPopupWrong from "./PopupsBlock/BlockElementPopupWrong";
import pic1 from "../Img/iconTransaction.png";
import pic2 from "../Img/iconValidation.png";
import pic3 from "../Img/iconTimestamp.png";
import pic4 from "../Img/iconHash.png";
import pic5 from "../Img/iconNonce.png";

const blockComposition = [
  {
    id: 0,
    name: "Transaction 1",
  },
  {
    id: 1,
    name: "Transaction 2",
  },
  {
    id: 2,
    name: "Hash Block -1",
  },
  {
    id: 3,
    name: "Nonce",
  },
  {
    id: 4,
    name: "Validation of transaction",
  },
  {
    id: 5,
    name: "Timestamp",
  },
];

let isInitial = true;

const BlockDrag = () => {
  const [isInitial, setIsInitial] = useState(true);
  //const userList = useSelector(state => state.userList);
  const { board: board0, drop: drop0 } = useElement(blockComposition);
  const { board: board1, drop: drop1 } = useElement(blockComposition);
  const { board: board2, drop: drop2 } = useElement(blockComposition);
  const { board: board3, drop: drop3 } = useElement(blockComposition);
  const { board: board4, drop: drop4 } = useElement(blockComposition);
  const { board: board5, drop: drop5 } = useElement(blockComposition);
  const { isVisible, onCloseHandler, onVisibleHandler } = useModal();
  const {
    isVisible: isVisibleWrong,
    onCloseHandler: onCloseHandlerWrong,
    onVisibleHandler: onVisibleHandlerWrong,
  } = useModal();

  const checkValidity = () => {
    setIsInitial(false);
    let answerCorrect = false;

    if (
      board0 === "Transaction 1" &&
      board1 === "Transaction 2" &&
      board2 === "Hash Block -1" &&
      board3 === "Nonce" &&
      board4 === "Validation of transaction" &&
      board5 === "Timestamp"
    ) {
      answerCorrect = true;
    }

    if (answerCorrect) {
      onVisibleHandler();
    } else {
      onVisibleHandlerWrong();
    }
  };

  const dic = {
    "Transaction 1": pic1,
    "Transaction 2": pic1,
    "Nonce": pic5,
    "Validation of transaction": pic2,
    "Hash Block -1": pic4,
    "Timestamp": pic3,
  };

  return (
    <div className="">
      <div className="flex flex-row justify-around">
        {isVisible && !isInitial && (
          <BlockElementPopupCorrect onClose={onCloseHandler} />
        )}
        {isVisibleWrong && !isInitial && (
          <BlockElementPopupWrong onClose={onCloseHandlerWrong} />
        )}
        <div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-6 mt-10">
            <div
              ref={drop0}
              className="border-2 border-lg w-24 h-16 flex items-center justify-center rounded-lg"
            >
              <div
                className={`  ${
                  board0 ? "" : ""
                } text-center justify-center border-2 rounded-lg border-white `}
              >
                {board0 && <img src={dic[board0]} />}
              </div>
            </div>
            <div
              ref={drop1}
              className="border-2 border-lg w-24 h-16 flex items-center justify-center rounded-lg"
            >
              <div
                className={`text-white ${
                  board1 ? "" : ""
                } text-center justify-center border-2 rounded-lg border-white `}
              >
                {board1 && <img src={dic[board1]} />}
              </div>
            </div>
            <div
              ref={drop2}
              className="border-2 border-lg w-24 h-16 flex items-center justify-center rounded-lg"
            >
              <div
                className={`text-white ${
                  board2 ? "" : ""
                } text-center justify-center border-2 rounded-lg border-white`}
              >
                {board2 && <img src={dic[board2]} />}
              </div>
            </div>
            <div
              ref={drop3}
              className="border-2 border-lg w-24 h-16 flex items-center justify-center rounded-lg"
            >
              <div
                className={`text-white ${
                  board3 ? "" : ""
                } text-center justify-center border-2 rounded-lg border-white `}
              >
                {board3 && <img src={dic[board3]} />}
              </div>
            </div>
            <div
              ref={drop4}
              className="border-2 border-lg w-24 h-16 flex items-center justify-center rounded-lg"
            >
              <div
                className={`text-white ${
                  board4 ? "" : ""
                } text-center justify-center border-2 rounded-lg border-white `}
              >
                {board4 && <img src={dic[board4]} />}
              </div>
            </div>
            <div
              ref={drop5}
              className="border-2 border-lg w-24 h-16 flex items-center justify-center rounded-lg"
            >
              <div
                className={`text-white ${
                  board5 ? "" : ""
                } text-center justify-center border-2 rounded-lg border-white `}
              >
                {board5 && <img src={dic[board5]} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-16">
        <button
          onClick={checkValidity}
          className="bg-gray-500 text-white text-center text-lg border-2 rounded-full border-white hover:font-bold hover:scale-110 py-2 w-48"
        >
          Check Validity
        </button>
      </div>
    </div>
  );
};

export default BlockDrag;
