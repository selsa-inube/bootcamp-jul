let arrays = [[1, 2, 3], [4, 5], [6]];
function flatten(array) {
  return array.reduce((acc, current) => acc.concat(current), []);
}
console.log(flatten(arrays));
function loop(value, test, update, body) {
  if (!test(value)) return;
  body(value);
  loop(update(value), test, update, body);
}
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log,
);

function every(array, test) {
  for (let elements of array) {
    if (!test(elements)) return false;
  }
  return true;
}
function everyUsingSome(array, test) {
  return !array.some((element) => !test(element));
}
console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));
console.log(everyUsingSome([1, 3, 5], (n) => n < 10));
console.log(everyUsingSome([2, 4, 16], (n) => n < 10));
console.log(everyUsingSome([], (n) => n < 10));

const LENGUAGES = [
  {
    name: "Latin",
    ranges: [
      [65, 90],
      [97, 122],
    ],
    direction: "ltr",
  },
  { name: "Arabic", ranges: [[1536, 1791]], direction: "rtl" },
  { name: "Chinese", ranges: [[19968, 40959]], direction: "ttb" },
];

function dominantDirection(text) {
  let counts = { ltr: 0, rtl: 0, ttb: 0 };

  for (let char of text) {
    let code = char.charCodeAt(0);
    for (let script of LENGUAGES) {
      if (script.ranges.some(([from, to]) => code >= from && code < to)) {
        counts[script.direction]++;
        break;
      }
    }
  }

  let dominantDirection = null;
  let maxCount = 0;
  for (let direction in counts) {
    if (counts[direction] > maxCount) {
      maxCount = counts[direction];
      dominantDirection = direction;
    }
  }

  return dominantDirection;
}

console.log(dominantDirection("Hello!"));

console.log(dominantDirection("Hey, مساء الخير"));
