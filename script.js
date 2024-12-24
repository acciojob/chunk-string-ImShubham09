function stringChop(str, size) {
  // your code here
  if (!str) {
    return []; // Return an empty array if the input string is null
  }
  
  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

// Do not change the code below 
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));


// if (isNaN(size) || size <= 0) {
//   alert("Please enter a valid positive integer for the chunk size.");
// } else {
//   alert(stringChop(str, size));
// }
