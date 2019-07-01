function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}

const num = [1, 2, 3];
const evens = some(num, number => number % 2 === 0);
console.log(evens); //true
