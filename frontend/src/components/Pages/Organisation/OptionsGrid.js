import useModal from "../../../hooks/use-modal";
import GrillItem from "./GrillItem";
import BlockchainPopup from "./PopupsGrill/BlockchainPopup";
import NodesPopup from "./PopupsGrill/NodesPopup";
import HashPopup from "./PopupsGrill/HashPopup";

const OptionsGrid = () => {
  const {
    isVisible: isBlockchainVisible,
    onCloseHandler: onCloseBlockchainHandler,
    onVisibleHandler: onVisibleBlockchainHandler,
  } = useModal();
  const {
    isVisible: isNodesVisible,
    onCloseHandler: onCloseNodesHandler,
    onVisibleHandler: onVisibleNodesHandler,
  } = useModal();
  const {
    isVisible: isHashVisible,
    onCloseHandler: onCloseHashHandler,
    onVisibleHandler: onVisibleHashHandler,
  } = useModal();

  const text_1 = "Nodes";
  const text_2 = "Hash";
  const text_3 = "distributed Ledger";
  const text_4 = "Nonce";
  const text_5 = "Proof of Stake";
  const text_6 = "NFT";
  const text_7 = "Smart contract";

  return (
    <div className="ml-8">
      {isBlockchainVisible && (
        <BlockchainPopup onClose={onCloseBlockchainHandler} />
      )}
      {isNodesVisible && <NodesPopup onClose={onCloseNodesHandler} />}
      {isHashVisible && <HashPopup onClose={onCloseHashHandler} />}
      <div className="grid grid-cols-5 gap-y-2">
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={true} onShow={onVisibleNodesHandler} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_2} show={true} onShow={onVisibleHashHandler} />
        <GrillItem text={text_3} show={true} />
        <GrillItem text={text_3} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_4} show={true} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_5} show={true} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_6} show={true} />
        <GrillItem text={text_1} show={false} />
        <GrillItem
          text={text_7}
          show={true}
          onShow={onVisibleBlockchainHandler}
        />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_7} show={false} />
        <GrillItem text={text_1} show={false} />
      </div>
    </div>
  );
};

export default OptionsGrid;
