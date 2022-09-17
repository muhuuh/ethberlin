import Modal from "../../../UI/Modal";

const BlockElementPopupWrong = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <h1 className="text-xl text-red-500 font-bold mb-6">
          Give it another try!
        </h1>
        <p>
          Unfortunatly, this was not the correct choice. Here again a quick
          summary about this topc. Don#t hesitate to return to the previous page
          to deep dive again
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex justify-end mt-8">
        <button
          onClick={props.onClose}
          className="bg-teal-500 text-white text-center shadow-lg border-2 rounded-lg border-white hover:font-bold hover:scale-110 py-1 w-32 "
        >
          Try again
        </button>
      </div>
    </Modal>
  );
};

export default BlockElementPopupWrong;
