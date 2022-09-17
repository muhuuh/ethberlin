import GrillItem from "./GrillItem";


const OptionsGameGrid = () => {
  const text_1 = "Transaction 1";
  const text_2 = "Transaction 2";
  const text_3 = "Transaction 3";
  const text_4 = "Hash prev. Block";
  const text_5 = "Nonce";
  const text_6 = "Validation of transaction";
  const text_7 = "Timestamp";

  return (
    <div className="ml-8">
      <div className="grid grid-cols-5 gap-y-2">
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={true} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_1} show={false} />
        <GrillItem text={text_2} show={true} />
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

export default OptionsGameGrid;
