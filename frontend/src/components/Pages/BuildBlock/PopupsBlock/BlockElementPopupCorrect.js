
import { Link } from "react-router-dom";
import Modal from "../../../UI/Modal";

const BlockElementPopupCorrect = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <h1 className="text-xl text-green-500 font-bold mb-6">Correct!</h1>
        <p>Wow, what a result! You were able to assemble the block correctly</p>
        <p> Now let's move the the next topic and further deep dive into the amazing Blockchain topic</p>
      </div>
      <div className="flex justify-end mt-8">
      <Link
        to="/organisation/congrats"
        onClick={props.onClose}
        className="bg-teal-500 text-white text-center shadow-lg border-2 rounded-lg border-white hover:font-bold hover:scale-110 py-1 w-32 "
      >
        Next
      </Link>
      </div>
    </Modal>
  );
};

export default BlockElementPopupCorrect;
