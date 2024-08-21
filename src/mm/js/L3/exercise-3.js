function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
