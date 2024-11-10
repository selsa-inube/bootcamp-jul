function rango(start, end, step = 1) {
  const array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

function suma(array) {
  let total = 0;
  for (let number of array) {
    total += number;
  }
  return total;
}
console.log(rango(1, 10)); 
console.log(rango(5, 2, -1)); 
console.log(suma(rango(1, 10))); 