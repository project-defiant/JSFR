// lets declare a variable in the global scope of the file
let user = "Mindos";
console.log(`log from global scope :${user}`); // Mindos
// lets redeclare that variable and see what happends
// let user = "MicMac"; // can not redeclare that variable
console.log(`log from global scope second time :${user}`); // MicMac
// we can declare let variables multiple times

// lets declare a let variable inside a function
function printf() {
    console.log(`log from function scope :${user}`); // undefined // makes an error
    // let user = "Allwonder"
    console.log(`log from function scope second time :${user}`); // Allwonder
    function printer() {
        console.log(`log from func inside the func :${user}`); // undefined // makes an error // gets the backpack
        // let user = "Allik"
        console.log(`log from func inside the func second time :${user}`); // Allik
    }
    printer();
    console.log(`log from function scope third time :${user}`); // Allwonder
};
printf();
console.log(`log from global scope third time :${user}`); // MicMac
