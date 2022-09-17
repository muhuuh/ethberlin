import React from 'react';
import { useDrag } from "react-dnd/dist/hooks";

const BlockdragItem = ({id, name}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "text",
        item: {id: id},
        collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
      }));
    
      return (
        <div
          ref={drag}
          className={`bg-darkBlue text-white text-center border-2 ${
            isDragging ? "italic" : ""
          } rounded-lg border-white py-1 w-48`}
        >
          <div>{name}</div>
        </div>
      );
};

export default BlockdragItem;