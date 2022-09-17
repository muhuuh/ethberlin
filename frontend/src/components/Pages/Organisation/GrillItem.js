const GrillItem = (props) => {
  const isShow = props.show;

  const infoSymbol = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className=" w-6 h-6 hover:scale-125"
      
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
  const item = (
    <div className="flex flew-row">
      <div className="bg-veryLightGray border-2 rounded-lg shadow-md px-2 py-1 -mr-2 hover:bg-veryPaleRed">
        {props.text}
      </div>
      <button onClick={props.onShow} className=" h-6 w-6 rounded-full items-center text-center -mt-4">
        {infoSymbol}
      </button>
    </div>
  );

  return (
    <div>
      {isShow && item}
    </div>
  );
};

export default GrillItem;


