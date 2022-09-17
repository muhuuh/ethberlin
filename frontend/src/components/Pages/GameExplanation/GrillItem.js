const GrillItem = (props) => {
  const isShow = props.show;


  const item = (
    <div className="flex flew-row">
      <div className="bg-veryLightGray border-2 rounded-lg shadow-md px-2 py-1 -mr-2 hover:bg-veryPaleRed">
        {props.text}
      </div>
    </div>
  );

  return (
    <div>
      {isShow && item}
    </div>
  );
};

export default GrillItem;


