import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Column } from './Column';

const Screen = styled.div`
  display: flex;
  position: relative;
  background-color: lightblue;
  width: 400px;
  height: 400px;
  border: 2px solid black;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



export const Puzzle = () => {

    const [puzzle, setPuzzle] = useState({
        col0: [
            { number: 1, color: '#ee82ee', draggableId: 'tile1', dropId: '0' },
            { number: 2, color: '#ee82ee', draggableId: 'tile2', dropId: '1' },
            { number: 3, color: '#ee82ee', draggableId: 'tile3', dropId: '2' },
            { number: 4, color: '#ee82ee', draggableId: 'tile4', dropId: '3' },
        ],
        col1: [
            { number: 5, color: '#ee82ee', draggableId: 'tile5', dropId: '4' },
            { number: 6, color: '#ee82ee', draggableId: 'tile6', dropId: '5' },
            { number: 7, color: '#ee82ee', draggableId: 'tile7', dropId: '6' },
            { number: 8, color: '#ee82ee', draggableId: 'tile8', dropId: '7' },
        ],
        col2: [
            { number: 9, color: '#ee82ee', draggableId: 'tile9', dropId: '8' },
            { number: 10, color: '#ee82ee', draggableId: 'tile10', dropId: '9' },
            { number: 11, color: '#ee82ee', draggableId: 'tile11', dropId: '10' },
            { number: 12, color: '#ee82ee', draggableId: 'tile12' , dropId: '11'},
        ],
        col3: [
            { number: 13, color: '#ee82ee', draggableId: 'tile13', dropId: '12' },
            { number: 14, color: '#ee82ee', draggableId: 'tile14', dropId: '13' },
            { number: 15, color: '#ee82ee', draggableId: 'tile15' , dropId: '14'},
            { number: null, color: 'transparent', draggableId: "blankTile", dropId: '15' }
        ]
    
    })

    let nullLoc = 16;

    const correctPuzzle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

    const [isSolved, setIsSolved] = useState(false);

    const isPuzzleSolved = () => {
        // Flatten the current puzzle state into an array
        const currentPuzzle = Object.values(puzzle).flat().map(tile => tile.number);
      
        // Compare each element in the currentPuzzle array with the correctPuzzle array
        for (let i = 0; i < correctPuzzle.length; i++) {
          if (currentPuzzle[i] !== correctPuzzle[i]) {
            return false;
          }
        }
        return true;
      };
      
      useEffect(() => {
        if (isPuzzleSolved()) {
          setIsSolved(true);
        }
      }, [puzzle]);
      
      
    const shuffledPuzzle = () => {
        let tiles = Object.values(puzzle).flat();
      
      
        for (let i = tiles.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }

        tiles.push({ number: null, color: 'transparent', draggableId: "blankTile" });
        
        const shuffledPuzzle = {
          col0: tiles.slice(0, 4),
          col1: tiles.slice(4, 8),
          col2: tiles.slice(8, 12),
          col3: tiles.slice(12),
        };
        setPuzzle(shuffledPuzzle);
      };


      const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        console.log(result);
      
        const sourceId = result.source.droppableId;
        const destinationId = result.destination.droppableId;
      
        const sourceColumnId = sourceId.split('-')[0];
        const destinationColumnId = destinationId.split('-')[0];
      
        if (sourceColumnId === destinationColumnId) {
          const column = [...puzzle[sourceColumnId]];
          const [removed] = column.splice(result.source.index, 1);
          column.splice(result.destination.index, 0, removed);
      
          setPuzzle({
            ...puzzle,
            [sourceColumnId]: column,
          });
        } else {
          const sourceColumn = [...puzzle[sourceColumnId]];
          const destColumn = [...puzzle[destinationColumnId]];
          const [draggedTile] = sourceColumn.splice(result.source.index, 1);
      
          const [replacedTile] = destColumn.splice(result.destination.index, 1 , draggedTile);
          sourceColumn.splice(result.source.index, 0, replacedTile);
          setPuzzle({
            ...puzzle,
            [sourceColumnId]: sourceColumn,
            [destinationColumnId]: destColumn,
          });
        }
      
        nullLoc = Object.values(puzzle).flat().indexOf(null);
        isPuzzleSolved();
      };
      

    return (
        <Wrapper>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Screen>
              {Object.keys(puzzle).map((key, index) => (
                <Column key={key} columnId={key} tiles={puzzle[key]} />
              ))}
            </Screen>
          </DragDropContext>
          {isSolved && (
            <div>
              <h1>Congrats, you completed the puzzle!</h1>
            </div>
          )}
        </Wrapper>
      );
      
}

export default Puzzle;