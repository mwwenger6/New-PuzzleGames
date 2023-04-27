import { createContext, useState } from "react";


export const PuzzleContext = createContext();

export const PuzzleProvider = ({ children }) => {
  const [squares, setSquares] = useState([]);
  const [pos, setPos] = useState(15);

  return (
    <PuzzleContext.Provider value={{ squares, setSquares, pos, setPos }}>
      {children}
    </PuzzleContext.Provider>
  );
};
