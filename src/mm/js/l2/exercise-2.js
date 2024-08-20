for (let n = 1; n <= 100; n++) {
  let res = "";
  if (n % 3 == 0) {
    res += "Fizz";
  }
  if (n % 5 == 0) {
    res += "Buzz";
  }
  console.log(res || n);
}
