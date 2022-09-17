import { useSelector } from "react-redux";
import Popup from "../Popups/PopUp";
import useModal from "../../hooks/use-modal"


const Overview = () => {
const {
    isVisible: isOverviewVisible,
    onCloseHandler: onCloseOverviewHandler,
    onVisibleHandler: onVisibleOverviewHandler,
  } = useModal();

    return(
        <div>
            <div>Total Expense</div>
            <div>
                {isOverviewVisible && <Popup onClose={onCloseOverviewHandler}/>}
            </div>
            <button onClick={onVisibleOverviewHandler} className="mt-16 border-2 rounded-lg p-4">Show Popoup</button>

        </div>
    );
};

export default Overview;