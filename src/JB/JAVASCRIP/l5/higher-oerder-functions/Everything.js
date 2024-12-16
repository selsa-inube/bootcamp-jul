let arrays = [[1, 2, 3], [4, 5], [6]];

let result = arrays.reduce(
  (accumulator, current) => accumulator.concat(current),
  [],
);

console.log(result);

//método flat el uso combinado de reduce y concat
// let arrays = [[1, 2, 3], [4, 5], [6]];
// let result = arrays.flat();
// console.log(result);
