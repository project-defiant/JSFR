myfunc(1,2) // 1 2 -- function declaration is hoisted
// simple function declaration
function myfunc (arg1, arg2) {
    console.log(arg1,arg2);
}
// function invocation
myfunc(1,2) // 1 2
// expressionFunc(arg1, arg2); // ReferenceError - function expression is not hoisted 


// function expression
var [arg1, arg2] = [ 1 , 2 ]
const expressionFunc = function () {
    console.log(arg1, arg2);
}
expressionFunc(arg1, arg2);


// will the function change the parameter of the array / object only insde it?

var varObj = {
    Me : "me"
};
var varArr = [
    "me"
];

function changeProps (varArr, varObj) {
    varArr[0] = "you";
    varObj.Me = "you";
};
console.log(varArr, varObj);
changeProps(varArr, varObj);
console.log(varArr, varObj);

