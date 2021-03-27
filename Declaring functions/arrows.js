// basic syntax for arrow functions

const arrowfunc = (arg1, arg2) => {
    return arg1 + arg2;
}
arrowfunc(1,2);
console.log(arrowfunc(1,2));

// arrow2() // not hoisted
// When there are no args
const arrow2 = () => {
    // let me = "me"
    console.log("arrow2");
    // console.log();
}
arrow2();

// when one argument remove ()
const arrow3 = arg => console.log(arg);
arrow3("one");
// remove return statement if it is the only code in function body
const arrow4 = arg => arg*2;
console.log(arrow4(4));
