// script.js
function stringChop(str, size) {
  let res = [];
  str = str.toString();
  size = parseInt(size);
  
  for (let i = 0; i < str.length; i += size) {
    res.push(str.slice(i, i + size));
  }
  return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
 alert(JSON.stringify(stringChop(str, size)));
