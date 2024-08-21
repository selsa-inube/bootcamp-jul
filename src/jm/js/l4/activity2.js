function reverseArrayWithIncrement(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

function reverseArrayInPlaceWithDecrement(array) {
  for (let i = array.length - 1; i >= Math.floor(array.length / 2); i--) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

console.log(reverseArrayWithIncrement([1, 2, 3, 4, 5]));

let array = [1, 2, 3, 4, 5];
reverseArrayInPlaceWithDecrement(array);
console.log(array);
