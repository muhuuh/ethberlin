import Modal from "../../../UI/Modal";

const NodesPopup = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="p-10">
        <h1 className="text-lg font-bold text-center underline">Nodes</h1>
        <br />
        <p>Nodes are a very important part of the Ethereum Ecosytem</p>
        <br />
        <p>
          A nonce is the random number that is used in the authentication
          protocol to ensure that the same communication is never reused. It is
          an essential part of PoW because it is always unique, and it is
          required for producing the hash with a value equal to or lower than
          that set by the network difficulty.
        </p>
      </div>
    </Modal>
  );
};

export default NodesPopup;
