function arrayToList(array) {
  let list = null;
  for (let i = 0; i < array.length; i++) {
    list = prepend(array[array.length - 1 - i], list);
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node !== null; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, index) {
  let current = list;
  let currentIndex = 0;

  while (current !== null) {
    if (currentIndex === index) {
      return current.value;
    }
    current = current.rest;
    currentIndex++;
  }
  return undefined;
}

let exampleArray = [1, 2, 3];
let exampleList = arrayToList(exampleArray);
console.log(exampleList);
console.log(listToArray(exampleList));
console.log(prepend(0, exampleList));
console.log(nth(exampleList, 1));
