import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Disc.css';

export const Disc = ({ size, id, index }) => {
  const isDragDisabled = false;
  return (
    <Draggable draggableId={id} index={index} isDragDisabled={isDragDisabled}>
      {(provided, snapshot) => (
        <div
          className={`disc disc-${size}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        ></div>
      )}
    </Draggable>
  );
};

export default Disc;
