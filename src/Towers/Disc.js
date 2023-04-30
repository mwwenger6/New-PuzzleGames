import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const S = {};
S.Disc = styled.div`
  width: ${(props) => props.size};
  height: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  z-index: 1;
  align-self: center;
  cursor: ${(props) => (props.isDraggable ? 'grab' : 'not-allowed')};
  transition: transform 0.2s ease-out;
`;

export const Disc = (props) => {
  return (
    <Draggable
      draggableId={props.draggableId}
      index={props.index}
      isDragDisabled={!props.isDraggable}
    >
      {(provided) => (
        <S.Disc ref={provided.innerRef}  {...(props.isDraggable ? provided.draggableProps : {})} {...(props.isDraggable ? provided.dragHandleProps : {})}
          size={(props.size * 10).toString() + '%'}
          color={props.color}
          disabled={!props.isDraggable}
        ></S.Disc>
      )}
    </Draggable>
  );
};

export default Disc;
