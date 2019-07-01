function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

const num = [ 2, 4];
const method = every(num, number => number % 2 === 0);
console.log(method); //true
