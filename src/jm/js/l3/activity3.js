function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, char) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      counted += 1;
    }
  }
  return counted;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
