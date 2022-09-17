import { useSelector } from "react-redux";
import Modal from "../UI/Modal";


const PopupWallet = (props) => {

  const users = useSelector(state => state.users);
  return (
    <Modal onClose={props.onClose}>
      <div className="text-center">
        <h1 className="font-bold text-3xl mt-8 mb-8">Your Wallet Address</h1>
        <div className="italic text-xl mb-8">{users.userList[users.userList.length - 1].wallet}</div>
        <p className="mb-6">
          Your wallet has been generated. From now on, this address is saved and
          linked to your profile
        </p>
        <p className="mb-6">Next time, you can login with this address</p>
        <p className="mb-6">
          You don't know what a wallet address is? Now worries. That's why you
          are here and will learn about it
        </p>
        <p className="mb-8">Welcome and enjoy the ride</p>
      </div>
      <div className="flex justify-end mt-8">
        <button
          onClick={props.onClose}
          className="bg-gray-500 text-white text-center text-lg border-2 rounded-full border-white hover:font-bold hover:scale-110 py-2 w-48"
        >
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default PopupWallet;
