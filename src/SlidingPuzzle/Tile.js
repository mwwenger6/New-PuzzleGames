import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const S = {};
S.Tile = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  border: 2px solid black;
  font-size: 50px;
  font-weight: bold;
  z-index: 1;
  align-self: center;
  cursor: ${(props) => (props.isDraggable ? 'initial' : 'normal select')};
`;


export const Tile = (props) => {
  return (
    <Draggable draggableId={props.draggableId} index={props.index} isDragDisabled={!props.isDraggable}>
      {(provided) => (
        <S.Tile ref={provided.innerRef}  {...(props.isDraggable ? provided.draggableProps : {})} {...(props.isDraggable ? provided.dragHandleProps : {})}
          color={props.color}
          draggable={props.isDraggable}
        >
            {props.number}
        </S.Tile>
      )}
    </Draggable>
  );
};

export default Tile;
