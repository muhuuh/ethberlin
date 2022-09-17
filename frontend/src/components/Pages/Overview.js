import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useModal from '../../hooks/use-modal';
import PopupWallet from '../Popups/PopUpWallet';

const Overview = () => {
  const {
    isVisible,
    onCloseHandler,
    onVisibleHandler,
  } = useModal();


  useEffect(() => {onVisibleHandler()}, []);
    return (
        <div className="flex flex-col items-center mt-16">
        <h1 className="text-3xl font-bold mb-16">Organisation</h1>
        {isVisible && <PopupWallet onClose={onCloseHandler} />}
        <p className="text-xl font-bold mb-16">Please select the topic you want to deep dive into</p>
        <div className="w-4/5">
          <div className="grid grid-cols-4 gap-x-16 ">
            <button className="border-2 rounded-lg bg-brownRed text-white text-center text-xl text-bold w-56 py-2 hover:font-bold hover:scale-110">
              Infrastructure
            </button>
            <Link to="/organisation" className="border-2 rounded-lg bg-brownRed text-white text-center text-xl text-bold w-56 pt-5 hover:font-bold hover:scale-110">
              Organization
            </Link>
            <button className="border-2 rounded-lg bg-brownRed text-white text-center text-xl text-bold w-56 py-2 hover:font-bold hover:scale-110">
              Network and consensus
            </button>
            <button className="border-2 rounded-lg bg-brownRed text-white text-center text-xl text-bold w-56 py-2 pt-2 hover:font-bold hover:scale-110">
              Applications
            </button>
          </div>
        </div>
      </div>
    );
};

export default Overview;