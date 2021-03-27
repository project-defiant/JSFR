// declare simple methods

obj = {
    name : "szymon",
    logName : () => {
        console.log(obj.name); // logs szymon
        console.log(this); // logs undefined
    },
    surname : "Szyszkowski",
    logSurname : function () {
        console.log(obj.surname); // logs Szyszkowski
        console.log(this); // logs Szyszkowski
    },
    logMe : function () {
        
    }
};
obj.logName.name = "Mindos";
console.log(obj.logName.name);

obj.logName();
obj.logSurname();
