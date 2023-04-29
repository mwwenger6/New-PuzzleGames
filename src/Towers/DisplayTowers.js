import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Stick from './Stick';

const Screen = styled.div`
  display: flex;
  position: relative;
  background-color: lightblue;
  width: 900px;
  height: 200px;
  border: 2px solid black
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const DisplayTowers = () => {
  

    const [sticks, setSticks] = useState({
        stick0: [
            { size: 1, color: 'yellow', draggableId: 'disk1' },
            { size: 2, color: 'red', draggableId: 'disk2' },
            { size: 3, color: 'blue', draggableId: 'disk3' },
        ],
        stick1: [],
        stick2: [],
  });

  
  const handleOnDragEnd = (result) => {
    if (result.source !== null && result.destination !== null) {

      const sourceId = result.source.droppableId;
      const destinationId = result.destination.droppableId;

      if (sourceId !== destinationId) {
        
        let currentStick = sticks[sourceId];
        let newStick = sticks[destinationId];

        if ( newStick.length ? currentStick[0].size < newStick[0].size: true) {

          newStick.forEach((disc) => {
            disc.index += 1;
          });

          newStick.unshift({ ...sticks[sourceId][0], index: 0 });
          currentStick.splice(result.source.index, 1);

          currentStick.forEach((disc) => {
            disc.index--;
          });

          setSticks({
            ...sticks,
            [sourceId]: currentStick,
            [destinationId]: newStick,
          });
        }
      }
    }
  };
 
  return (
    <Wrapper>
        <h1>Towers of Hanoi</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Screen>
          <Stick
            dropId="stick0"
            discs={sticks['stick0']}
            color='black'
          ></Stick>
          <Stick
            dropId="stick1"
            discs={sticks['stick1']}
            color='black'
          ></Stick>
          <Stick
            dropId="stick2"
            discs={sticks['stick2']}
            color='orange'
          ></Stick>
        </Screen>
      </DragDropContext>
      {sticks.stick2.length === 3 && (
        <div>
          <h1>Congrats, you completed the puzzle!</h1>
        </div>
      )}
    </Wrapper>
  );
};

export default DisplayTowers;