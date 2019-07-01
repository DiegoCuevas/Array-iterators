function pop(arr) {
  lastElement = arr[arr.length - 1];
  --arr.length;
  return lastElement;
}

const numbers = [1, 2, 4, 5, 6, 8];
const result = pop(numbers);
console.log("after function", numbers);
console.log("return of the function", result); //return of the function 8
