import { PuzzleProvider } from "./PuzzleContext";
import { Puzzle } from "./puzzle";

const WrappedPuzzle = () => {
  return (
    <PuzzleProvider>
      <Puzzle></Puzzle>
    </PuzzleProvider>
  );
};

export default WrappedPuzzle;
