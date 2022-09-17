import React from 'react';
import BlockdragItem from './BlockdragItem';

const blockComposition = [
  {
    id: 0,
    name: "Transaction 1",
  },
  {
    id: 1,
    name: "Transaction 2",
  },
  {
    id: 2,
    name: "Hash Block -1",
  },
  {
    id: 3,
    name: "Nonce",
  },
  {
    id: 4,
    name: "Validation of transaction",
  },
  {
    id: 5,
    name: "Timestamp",
  },
];

const BlockDragItemList = () => {
    const blockElements = blockComposition.map((element) => (
        <BlockdragItem key={element.id} id={element.id} name={element.name} />
      ));
    return (
        <div>
          <div className="grid gap-y-3">{blockElements}</div>
        </div>
    );
};

export default BlockDragItemList;