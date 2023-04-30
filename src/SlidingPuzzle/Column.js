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
      <S.Wrapper>
        {props.tiles.map((tile, index) => {
          const dropId = `${props.columnId}-drop${index}`;
          return (
            <Droppable key={dropId} droppableId={dropId}>
              {(provided) => (
                <div ref={provided.innerRef}>
                  <Tile
                    number={tile.number}
                    draggableId={tile.draggableId}
                    index={index}
                    key={tile.draggableId}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </S.Wrapper>
    );
  };
  

export default Column;