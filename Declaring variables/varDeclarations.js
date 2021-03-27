// lets declare a variable in the global scope of the file
var user = "Mindos";
console.log(`log from global scope :${user}`); // Mindos
// lets redeclare that variable and see what happends
var user = "MicMac";
console.log(`log from global scope second time :${user}`); // MicMac
// we can declare var variables multiple times!!

// lets declare a var variable inside a function
function printf() {
    console.log(`log from function scope :${user}`); // undefined
    // variable is declared inside the function so it is declared, before the execution of log, but not initialized so it is undefined
    var user = "Allwonder" // if we did not declare a variable here, then out output of the next line would be MicMac from the closure of function execution
    console.log(`log from function scope second time :${user}`); // Allwonder
    function printer() {
        console.log(`log from func inside the func :${user}`); // undefined
        var user = "Allik"
        console.log(`log from func inside the func second time :${user}`); // Allik
    }
    
    printer();
    console.log(`log from function scope third time :${user}`); // Allwonder
    var user2 = "Stork";
    console.log(`user2 in func ${user2}`); // Stork
};
printf();
// console.log(`user2 out of func ${user2}`); // reference error
console.log(`log from global scope third time :${user}`); // MicMac
