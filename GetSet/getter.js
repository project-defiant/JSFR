// Here I define three ways to add properties to the object

// define new empty object
const user = {};
console.log(`user object : ${user}`);

// now we add a property called name to it and print it with added method.
user.name = "Mindos";
user.printUser = function () {
    console.log(`user name :${this.name}`);
}
// call method
user.printUser();

// as we can see, the this keyword resembles the object itself, it is due to the fact, that we defined our method with the function keyword, rather than with an arrow function expression

// we can also add a property by the getter/setter functions

// getter functions aren't anyting specyfic, they are a set of functions, that returns some value, so
user.getName = function () {
    return this.name;
}
// now we can invoke it
console.log(`user name from getter func : ${user.getName()}`);

// setter function a bit different it is called when we need to chanage the username
user.setName = function (name) {
    this.name = name;
};

// now we can change the value of name and log it or pass it to a different object
user.setName("MicMac");
console.log(`user name after setting new one ${user.getName()}`);

// now we can imagine a newer syntactic sugar :)

// get and set

// define a new empty object

// now we define a value room
const account = {
    firstName : '',
    lastName : '',
    set setName (name) {
        this.firstName = name.toString().split(' ')[0];
        this.lastName = name.toString().split(' ')[1];
    },
    get getName () {
        return `${this.firstName} ${this.lastName}`;
    },
};

account.setName = "Szymon Szyszkowski";
console.log(account.getName);
account.setName = "Anna Krakowska"
console.log(`changing user to ${account.getName}`)
