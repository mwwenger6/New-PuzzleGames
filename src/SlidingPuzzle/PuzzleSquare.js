import { useContext } from "react";
import { Tile } from './Tile';
import { PuzzleRules } from './PuzzleRules';

export const PuzzleSquare = ({ id, position }) => {
  const { slideTile, legalMove } = PuzzleRules();

  

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Tile tileId={id} position={position}>{id}</Tile>
    </div>
  );
};

export default PuzzleSquare;
