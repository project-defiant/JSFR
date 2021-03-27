// consts declare a variable in the global scope of the file
const user = "Mindos";
console.log(`log from global scope :${user}`); // Mindos
// consts redeclare that variable and see what happends
// const user = "MicMac"; // can not redeclare that variable
console.log(`log from global scope second time :${user}`); // MicMac
// we can declare const variables multiple times

// consts declare a const variable inside a function
function printf() {
    // console.log(`log from function scope :${user}`); // undefined // makes an error
    const user = "Allwonder"
    console.log(`log from function scope second time :${user}`); // Allwonder
    function printer() {
        console.log(`log from func inside the func :${user}`); // undefined // makes an error // gets the backpack
        // const user = "Allik"
        console.log(`log from func inside the func second time :${user}`); // Allik
    }
    printer();
    console.log(`log from function scope third time :${user}`); // Allwonder
    // we add additional var
    var user2 = "Stork";
    console.log(`user2 in func ${user2}`);
};
printf();
console.log(`user2 out of func ${user2}`);

console.log(`log from global scope third time :${user}`); // MicMac
