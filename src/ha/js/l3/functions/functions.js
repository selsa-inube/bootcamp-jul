function Minimum(val1, val2) {
  if (val1 < val2) {
    return val1;
  } else if (val2 < val1) {
    return val2;
  }
}
console.log(Minimum(2, 3));
console.log(Minimum(0, 10));
console.log(Minimum(0, -10));

function isEven(value) {
  if (value < 0) {
    return isEven(-value);
  }
  if (value === 0) {
    return true;
  } else if (value === 1) {
    return false;
  } else {
    return isEven(value - 2);
  }
}

console.log(isEven(10));
console.log(isEven(75));
console.log(isEven(-1));

function countChar(word, char) {
  let charcount = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      charcount++;
    }
  }
  return charcount;
}

const countBs = function (word) {
  return countChar(word, "B");
};
console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
