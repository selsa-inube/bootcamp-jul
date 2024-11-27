//bucle
function every(array, test) {
    for (let elemento of array) {
        if (!test(elemento)) {
            return false; 
        }
    }
    return true; 
}

console.log(every([1, 3, 5], n => n < 10)); 
console.log(every([2, 4, 16], n => n < 10)); 
console.log(every([], n => n < 10)); 

//método some
// function every(array, test) {
//     return !array.some(elemento => !test(elemento));
// }

// console.log(every([1, 3, 5], n => n < 10)); 
// console.log(every([2, 4, 16], n => n < 10)); 
// console.log(every([], n => n < 10));
