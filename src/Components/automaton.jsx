/**
 * A Conway's Game of Life simulation that is displayed as the background on the Games page.
 * source: https://www.geeksforgeeks.org/conways-game-of-life-using-react/
 */

import React, { useState, useCallback, useRef, useEffect } from "react";
import produce from "immer";

const cellSize = 20;
console.log("scroll height", document.body.scrollHeight);
console.log("inner width", window.innerWidth);
const numRows = Math.floor(window.innerHeight / cellSize);
const numCols = Math.floor(window.innerWidth / cellSize);

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

/**
 * Initializes an grid for automaton simulation based on the number of
 * rows and columns defined in numRows and numCols
 * @returns a two-dimensional array containing the integer 0 for all cells inside the grid
 */
const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const Automaton = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  useEffect(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
      );
    }
    setGrid(rows);

    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  }, []);

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += g[newI][newJ];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
            // rule B36/S23
            /* 
            if (grid[i][j] === 1 && !((neighbors === 2) || (neighbors === 3))) {
                newGrid[i][j] = 0; // cell is dead
            } else if (grid[i][j] === 0 && (neighbors === 3 || neighbors === 6)) {
                newGrid[i][j] = 1; // cell is born
            } else {
                newGrid[i][j] = grid[i][j]; // cell has survived
            } 
            */
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`,
          backgroundColor: "#020202",
        }}
        id="game-canvas">
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: grid[i][j] ? "#17a589" : undefined,
                boxShadow: grid[i][j] ? "0px 0px 5px 1px #17a589" : undefined,
              }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Automaton;
