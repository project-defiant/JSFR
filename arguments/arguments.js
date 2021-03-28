function me (arg1, arg2, arg3 = "me", ...restOfArguments) {
    console.log(arguments);
    console.log("==============")
    console.log(typeof(arguments));
    console.log("==============")
    console.log(arguments.length);
    console.log("==============")
    console.log(arg1, arg2, arg3);
    console.log("==============")
    console.log(restOfArguments);
    console.log("==============")
}
me("Me", "You", "Him", "Her", "They");
