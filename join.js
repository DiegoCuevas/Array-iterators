function join(array, separator = ",") {
  let result = "";
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    result += element;
    result += separator;
  }
  return result + array[array.length - 1];
}

const example = ["Hello", ""];
const result = join(example, " World"); 
console.log(result); // Hello World