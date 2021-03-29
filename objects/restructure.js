const { rooms, kitchen, floor } = require("./descructuring");
// console.log(rooms);
// lets restructure our object house
let house = { floor, rooms, kitchen };
// console.log(house);

// add a method from previously created function to that object
const myfunc = function (parameter) {
    return `this is the parameter ${parameter}`;
}
house = { floor, rooms, kitchen, myfunc };
console.log(house);

// another way of creating a method 
house.whichFloor = () => {
    console.log(house.floor)
};
house.whichFloor();

// we can also define a method inside object definition

const myCar =  {
    mark : "ford",
    logMark() {
        console.log(this.mark);
    }
}

myCar.logMark();