function Triangle() {
  let triangleCreator = "#";
  for (let i = 0; i < 7; i++) {
    console.log(triangleCreator);
    triangleCreator += "#";
  }
}
function FizzBuzz() {
  let a = 0;
  for (let i = 0; i < 100; i++) {
    a++;
    if (a % 3 == 0 && a % 5 == 0) {
      console.log("fizzbuzz");
    } else if (a % 3 == 0) {
      console.log("fizz");
    } else if (a % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(a);
    }
  }
}
function ChessBoard() {
  for (let i = 0; i < 8; i++) {
    let chessCreator = "";
    if (i % 2 == 0) {
      chessCreator += " ";
    }
    for (let l = 0; l < 8; l++) {
      if (l % 2 != 0) {
        chessCreator += " ";
      } else {
        chessCreator += "#";
      }
    }
    console.log(chessCreator);
  }
}
Triangle();
FizzBuzz();
ChessBoard();
