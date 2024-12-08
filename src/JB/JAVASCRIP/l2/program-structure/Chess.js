function createboard(size) {
  let board = "";
  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      if ((row + column) % 2 === 0) {
        board += "#";
      } else {
        board += " ";
      }
    }
    board += "\n";
  }
  return board;
}

console.log(createboard(8));
