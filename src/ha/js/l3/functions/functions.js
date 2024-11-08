function Minimum(val1, val2) {
  if (val1 < val2) {
    return val1;
  } else if (val2 < val1) {
    return val2;
  } else {
    return "bouth are equal";
  }
}
console.log(Minimum(2, 3));
console.log(Minimum(0, 10));
console.log(Minimum(0, -10));

function isEven(val1) {
  if (val1 == 0) {
    return true;
  } else if (val1 == 1) {
    return false;
  }
  for (; val1 >= 0; val1 -= 2) {
    if (val1 == 0) {
      return true;
    }
  }
  return false;
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

let count = 0;
function countBs(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      count++;
    }
  }
  return count;
}
function countChar(string, string2) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string2) {
      count++;
    }
  }
  return count;
}
console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
