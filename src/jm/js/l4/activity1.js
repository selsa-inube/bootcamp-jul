function range(start, end, step = 1) {
  let array = [];

  let direction = Math.sign(end - start);

  for (let i = start; direction * (i - end) <= 0; i += step) {
    array.push(i);
  }

  return array;
}

function sum(array) {
  return array.reduce((total, num) => total + num, 0);
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 1, -1));
