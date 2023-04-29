import React from 'react';
import Disc from './Disc';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px 10px 0 0;
    justify-content: flex-end;
`;
S.Stick = styled.div`
    width: 5px;
    height: 100px;
    position: absolute;
    align-self: center;
    background-color: ${(props) => props.color};
`;

export const Stick = (props) => {
  return (
    <Droppable droppableId={props.dropId}>
      {(provided) => (
        <S.Wrapper ref={provided.innerRef}>
          <S.Stick
            color = {props.color}
          ></S.Stick>
          {props.discs === undefined ? '' : props.discs.map((disc, index) => (
                <Disc
                  size={disc.size}
                  color={disc.color}
                  draggableId={disc.draggableId}
                  index={disc.index}
                  key={disc.draggableId}
                  isDraggable={index === 0}
                ></Disc>
              ))}
            {provided.placeholder}
        </S.Wrapper>
      )}
    </Droppable>
  );
};

export default Stick;