// define an object
const house = {
    // primitive inside the object
    floor: "first floor",
    // array inside the object
    rooms: ["kitchen", "bathroom", "bedroom", "livingroom", "diningroom"],
    // object inside the object
    kitchen : {
        floor: "first floor",
        side: "west",
        hasWindow : true,
    },
};

module.exports = house;

