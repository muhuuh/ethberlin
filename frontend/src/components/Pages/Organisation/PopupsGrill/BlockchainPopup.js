import Modal from "../../../UI/Modal";

const BlockchainPopup = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="p-10">
        <h1 className="text-lg font-bold text-center underline">
          Smart Contract
        </h1>
        <br />
        <p>
          Smart contract are what makes Ethereum a world and decentralised
          computer
        </p>
        <br />
        <p>
          A smart contract is a self-executing digital agreement that enables
          two or more parties to exchange money, property, shares, or anything
          of value in a transparent, conflict-free way while avoiding the need
          for a third party. The smart contract does all the work to determine
          whether the conditions of the order were satisfied. Smart contracts
          both define the rules and penalties around an agreement in the same
          way that a traditional contract does, and also automatically enforces
          those obligations.
        </p>
      </div>
    </Modal>
  );
};

export default BlockchainPopup;
