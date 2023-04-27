import { Tile } from './Tile';
import './puzzle.css'
import {DragDropContext } from 'react-beautiful-dnd'
import { PuzzleSquare } from './PuzzleSquare';
import { useContext, useEffect } from "react";
import { PuzzleContext } from "./PuzzleContext";



const setPuzzle = (i, value) =>{
    let number = value;
    const emptySquare = number === 16
    const isEmpty = emptySquare ? null : number
    return (
        <div id="tiles" key={i} class = 'col s12 m3 l3'>
            <PuzzleSquare id = {isEmpty} position = {i}></PuzzleSquare>
        </div>
   )   
}

  
export const Puzzle = () => {
    const { squares, setSquares, pos, setPos } = useContext(PuzzleContext);

    useEffect(() => {
        const newSquares = [];
        let tileNumLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        for (let i = 14; i > -1; i--) {
          const random = Math.floor(Math.random() * (i - 0 + 1) + 0);
          newSquares.push(setPuzzle(i, tileNumLeft[random]));
          tileNumLeft.splice(random, 1);
        }
        newSquares.push(setPuzzle(15, 16));
        console.log(newSquares);
        setSquares(newSquares);
        setPos(15);
      }, [setSquares, setPos]);


    return (
        <DragDropContext>
            <div id="tileContainer" class = "container">
                <div id='allTiles' align="center">
                    <div class = "row">
                        {squares[0]}
                        {squares[1]}
                        {squares[2]}
                        {squares[3]}
                    </div>
                    <div class = "row">
                        {squares[4]}
                        {squares[5]}
                        {squares[6]}
                        {squares[7]}
                    </div>
                    <div class = "row">
                        {squares[8]}
                        {squares[9]}
                        {squares[10]}
                        {squares[11]}
                    </div>
                    <div class = "row">
                        {squares[12]}
                        {squares[13]}
                        {squares[14]}
                        {squares[15]}
                    </div>
                </div>
            </div>
        </DragDropContext>
    );
}

export default Puzzle;
