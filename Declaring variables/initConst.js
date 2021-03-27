const value = 1;
// value = 2; // TypeError: Assignment to constant variable.
console.log(value) // 1 


const s = "Szymo";
// s += "n"; // TypeError: Assignment to constant variable.
console.log(s); // Szymo

// BUT!!!

const arr = []; // we can manipulate objects declared with const!!!!!!
arr.push(1,2,3);
console.log(arr);

const obj = {};
obj._hello = "Szymon"
console.log(obj._hello);