// if a variable is created inside of an if/else block, that variable is not scoped to the block

var topic = "JS";

if (topic) {
    var topic = "React";
    console.log("block", topic);
}
console.log("global", topic);

var topic = "JS";

if (topic) {
    let topic = "React";
    console.log("block", topic);
}
console.log("global", topic);

