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
            { number: 1, color: '#ee82ee', draggableId: 'tile1' },
            { number: 2, color: '#ee82ee', draggableId: 'tile2' },
            { number: 3, color: '#ee82ee', draggableId: 'tile3' },
            { number: 4, color: '#ee82ee', draggableId: 'tile4' },
        ],
        col1: [
            { number: 5, color: '#ee82ee', draggableId: 'tile5' },
            { number: 6, color: '#ee82ee', draggableId: 'tile6' },
            { number: 7, color: '#ee82ee', draggableId: 'tile7' },
            { number: 8, color: '#ee82ee', draggableId: 'tile8' },
        ],
        col2: [
            { number: 9, color: '#ee82ee', draggableId: 'tile9' },
            { number: 10, color: '#ee82ee', draggableId: 'tile10' },
            { number: 11, color: '#ee82ee', draggableId: 'tile11' },
            { number: 12, color: '#ee82ee', draggableId: 'tile12' },
        ],
        col3: [
            { number: 13, color: '#ee82ee', draggableId: 'tile13' },
            { number: 14, color: '#ee82ee', draggableId: 'tile14' },
            { number: 15, color: '#ee82ee', draggableId: 'tile15' },
            { number: null, color: null, draggableId: 'blankTile' },
            
        ]
    
    })

    
    const correctPuzzle =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    const [isSolved, setIsSolved] = useState(false);

    const isPuzzleSolved = () => {
        // Flatten the current puzzle state into an array
        const currentPuzzle = Object.values(puzzle).flat().map(tile => tile.number);
      
        if(!isSolved){
            return false
        }
        // Compare each element in the currentPuzzle array with the correctPuzzle array
        for (let i = 0; i < correctPuzzle.length; i++) {
          if (currentPuzzle[i] !== correctPuzzle[i]) {
            setIsSolved(false)
            return false
          }
        }
      
        setIsSolved(true)
        return true;
      };
      

    const isNextTo = (index) => {
        // Flatten the current puzzle state into an array
        console.log(index)
        const currentPuzzle = Object.values(puzzle).flat().map(tile => tile.number);
      
        // Find the index of the null space in the currentPuzzle array
        const nullIndex = currentPuzzle.indexOf(null);
      
        // Check if the null space is adjacent to the given index
        const rowDiff = Math.abs(Math.floor(index / 4) - Math.floor(nullIndex / 4));
        const colDiff = Math.abs((index % 4) - (nullIndex % 4));
      
        return !(rowDiff === 1 && colDiff === 0) && !(rowDiff === 0 && colDiff === 1);
      };
      

    const shufflePuzzle = () => {
        let tiles = Object.values(puzzle).flat();
      
        tiles.pop();
      
        for (let i = tiles.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }

        

        const shuffledPuzzle = {
          col0: tiles.slice(0, 4),
          col1: tiles.slice(4, 8),
          col2: tiles.slice(8, 12),
          col3: tiles.slice(12),
        };
        setPuzzle(shuffledPuzzle);
      };

      useEffect(() => {
        shufflePuzzle();
      }, []);

      const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const sourceId = result.source.droppableId;
        const destinationId = result.destination.droppableId;

        if (sourceId !== destinationId) {
            const sourceColumn = [...puzzle[sourceId]];
            const destColumn = [...puzzle[destinationId]];
            const draggedTile = sourceColumn[result.source.index];

            sourceColumn.splice(result.source.index, 1);
            destColumn.splice(result.destination.index, 0, draggedTile);

            setPuzzle({
                ...puzzle,
                [sourceId]: sourceColumn,
                [destinationId]: destColumn,
            });

            isPuzzleSolved();
        }
    };

    return (
        <Wrapper>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Screen>
                <Column
                    dropId='col0'
                    tiles={puzzle['col0']}
                    isNextTo={isNextTo}
                ></Column>
                <Column
                    dropId='col1'
                    tiles={puzzle['col1']}
                    isNextTo={isNextTo}>
                </Column>
                <Column
                    dropId='col2'
                    tiles={puzzle['col2']}
                    isNextTo={isNextTo}>
                </Column>
                <Column
                    dropId='col3'
                    tiles={puzzle['col3']}
                    isNextTo={isNextTo}>
                </Column>
                </Screen>
            </DragDropContext>
            {isPuzzleSolved() && (
                <div>
                    <h1>Congrats, you completed the puzzle!</h1>
                </div>
            )}
        </Wrapper>
        
    );
}

export default Puzzle;
