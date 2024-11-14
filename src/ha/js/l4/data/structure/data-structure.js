function Range(start, end, step = 1) {
  if ((step > 0 && start > end) || (step < 0 && start < end)) {
    return [];
  } else {
    const countarra = Range(start + step, end, step);
    countarra.unshift(start);
    return countarra;
  }
}
function Sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
console.log(Range(1, 10, 2));
console.log(Range(5, 2, -2));
console.log(Sum(Range(1, 10)));

function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
console.log(arr);

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

reverseArrayInPlace(arr);
console.log(arr);

function arrayToList(array) {
  array = reverseArrayInPlace(array);
  let list = null;
  for (let data of array) {
    list = { value: data, rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}
function prepend(element, list) {
  return { value: element, rest: list };
}
function nth(list, position) {
  if (list === null) {
    return undefined;
  }
  if (position === 0) {
    return list.value;
  }
  return nth(list.rest, position - 1);
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 0));

function deepEqual(value1, value2) {
  if (value1 === value2) {
    return true;
  }
  if (
    value1 === null ||
    value2 === null ||
    typeof value1 !== "object" ||
    typeof value2 !== "object"
  ) {
    return false;
  }
  let keys1 = Object.keys(value1);
  let keys2 = Object.keys(value2);
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
      return false;
    }
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
