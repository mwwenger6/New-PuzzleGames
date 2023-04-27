import { useContext } from "react";
import { PuzzleContext } from "./PuzzleContext";

export const PuzzleRules = () => {

    const { squares, setSquares, pos, setPos } = useContext(PuzzleContext);

    let currentArray = squares;
    let newArray = []
    

    const legalMove = (index) => {
        console.log(pos)
        console.log('hi')
        if ((pos - 1) === index || (pos + 1) === index || (pos + 4) === index || (pos - 4) === index) {
            return true;
        } else {
            return false;
        }
    };

    const slideTile = (index) => {
        if (legalMove(index)) {
          for (let i = 0; i < currentArray.length; i++) {
            if (i === index) {
              newArray.push(currentArray[pos]);
            } else if (i === pos) {
              newArray.push(currentArray[index]);
            } else {
              newArray.push(currentArray[i]);
            }
          }
          currentArray = newArray;
          newArray = [];
          setSquares(currentArray); // update the state with the new array
          setPos(index);
        }
      };
      

    return {
        slideTile,
        legalMove
    };
};

export default PuzzleRules;
