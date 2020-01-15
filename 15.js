/*
Problem 15: Lattice paths
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner

How many such routes are there through a given gridSize?
*/

// times out for argument 20
const latticePaths1 = gridSize => {
  // need to get from 0,0 to gridSize,gridSize
  let numPaths = { p: 0 };
  const move = (x, y, pathsCounter) => {
    if (x === gridSize && y === gridSize) {
      pathsCounter.p = pathsCounter.p + 1;
    } else {
      if (x + 1 <= gridSize) move(x+1, y, pathsCounter);
      if (y + 1 <= gridSize) move(x, y+1, pathsCounter);
    }
  }
  move(0, 0, numPaths);
  return numPaths.p;
}


/*  use math!
                        (size + size)
lattice path len  -->   (   size    ) ---> n choose k -->

binomial coefficient -->  n! / k!(n-k)! ---->

(size+size) ** size / size! * size!

*/
const latticePaths = size => {
  const fact = num => {
    let factorial = 1;
    for (let i = 2; i <= num; i++) factorial *= i;
    return factorial;
  }
  return fact(size+size) / (fact(size) ** 2)
}

console.log(latticePaths(20));
