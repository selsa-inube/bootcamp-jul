let size = 8;
let space = "";

for (let m = 0; m < size; m++) {
  for (let v = 0; v < size; v++) {
    if ((m + v) % 2 == 0) {
      space += " ";
    } else {
      space += "#";
    }
  }
  space += "\n";
}

console.log(space);
