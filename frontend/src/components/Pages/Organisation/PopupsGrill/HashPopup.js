import Modal from "../../../UI/Modal";

const HashPopup = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="p-10">
        <h1 className="text-lg font-bold text-center undeline">Hash</h1>
        <br />
        <p>
          A hash is a mathematical function that converts an input of length
          into an encrypted output of a fixed length. Thus regardless of the
          original amount of data or file size involved, its unique hash will
          always be the same size. Moreover, hashes cannot be used to
          "reverse-engineer" the input from the hashed output, since hash
          functions are "one-way".
        </p>
      </div>
    </Modal>
  );
};

export default HashPopup;
