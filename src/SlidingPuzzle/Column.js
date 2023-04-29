import React from 'react';
import Tile from './Tile';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    width: 400px;
    height: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
`;

export const Column = (props) => {


  return (
    <Droppable droppableId={props.dropId}>
      {(provided) => (
        <S.Wrapper ref={provided.innerRef}>
          {props.tiles === undefined ? '' : props.tiles.map((tile, index) => (
            <Tile
                number={tile.number}
                draggableId={tile.draggableId}
                index={index}
                key={tile.draggableId}
                color={tile.color}
                nullLoc = {props.nullLoc}
            />
            ))}
            {provided.placeholder}
        </S.Wrapper>
      )}
    </Droppable>
  );
};

export default Column;