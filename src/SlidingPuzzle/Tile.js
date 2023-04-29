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

    const isNextTo = () => {
        const rowDiff = Math.abs(Math.floor(props.index / 4) - Math.floor(props.nullLoc / 4));
        const colDiff = Math.abs((props.index % 4) - (props.nullLoc % 4));
      
        return !(rowDiff === 1 && colDiff === 0) && !(rowDiff === 0 && colDiff === 1);
      };
      

      
  return (
    <Draggable draggableId={props.draggableId} index={props.index} isDragDisabled={isNextTo}>
      {(provided) => (
        <S.Tile ref={provided.innerRef}  {...(props.isDraggable ? provided.draggableProps : {})} {...(props.isDraggable ? provided.dragHandleProps : {})}
          color={props.color}
          isDraggable = {isNextTo}
        >
            {props.number}
        </S.Tile>
      )}
    </Draggable>
  );
};

export default Tile;
