# Javascript For React
## Declaring variables

### var keyword
Up to ES2015 there was just the **var** snippet used to declare a variable name. Variables created with the **var** keyword can be redeclared many times and created before any code executions.

They are scoped in current execution context and it's closure, so if You declare a **var** variable outside the function block, yet still make a reference to in inside that function block and call that function inside the same block, where the **var** variable was declared, then *the function creates closure on that variable* - it is stored inside its **backpack**, so the function can always reference to it. If **var** variable is declared inside the global memory, than everything has a reference to it. 

If/Else statements does not create a functional scope, so the variables declared inside of them with **var** keyword are execution context scoped.

**var** declarations are *hoisted* whitin the code, so they are processed before any other code executions.
Now there are two other options to declare javascript variables, that are: **const** and **let** reserved keywords.


### let keyword 
With it comes the *lexical variable scope*, the variables now are block scoped, so whenever they are declared inside the {}, they are not leaking out of the {} to ghe execution context scope. 

They still are subject to closure though, so if they are not found in the declaration context, they are looked for in the parent scope.

### const keyword
Variables declared with const can only be initialized once, we can not reasign the primitive value to them, BUT ! if we declare an object like array or empty object, we can always add a new element to that array or new property to that object even when we declare it with **const** keyword!!! They behave pretty much like let declarations but unchangeble.

They still are subject to closure though, so if they are not found in the declaration context, they are looked for in the parent scope.


## Template strings

We can use of the new syntax or old syntax for template strings

### Old syntax

It uses "+" sign to concatate variables. For example
```
const name = "Szymon";
const surname = "Szyszkowski"
console.log(name + " " + surname) // Szymon Szyszkowski
```

### New syntactic sugar

It uses " ` " for the string closings, than you can refer to the variable with ${var} inside that string. Within the {} can be placed any JS 
```
const name = "Szymon";
const surname = "Szyszkowski"
console.log(`${name} ${surname}`) // Szymon Szyszkowski
```
## Expressions and statements

**EXPRESSION** - zwrot // almost each line of js code besides if/else, loops, etc - one liners, there can be many inside one statment.
**STATEMENT** - deklaracja - for example if statement/ for loop statement, it can be created with many expressions.

## DRY

DO NOT REPEAT YOURSELF, use functions, object literals, arrays, OOP and functional programming

## Functions


### Function declarations 

Function declaration starts with the **function** keyword, followed by function name, ( arguments ), {bunction body}. Functions are objects. Functions declared that way are hoisted.

### Function expressions

functions declared with or without **function** keyword, but firstly assigned to variable declared with **const** or **let** keyword, followed by **function** keyword or not,  and ( arguments ),{bunction body}. It is not hoisted


### Default parameters

function can have default parameters assined inside ( name = "Szymon"), that means it takes a parameter as Szymon if not specyfied inside the function call.

### Arrow functions of ES6

Syntactic sugar again,  they are awesome for that you can use an => to signify that it is a function !!!! rather than a function keyword.
they can have names, when they are assigned to a variable, that is followed by *( args/ no args)* or *arg* followed by *=>* and function body inside the {}, we can ommit {}, when we just return, we can ommit even the return statement and the code looks:
```
const func = (arg1, arg2) => { return result }
const func = () => { return result }
const func = arg => { return result }
const func = arg => result
```

### Lexical vs Dynamic scopes

Lexical scope is when the function executes when called on variables from the block of code where the function is declared, make use of declaration scope (Like Javascript)
Dynamic scope is opposite, function now can make use of execution scope


### returning object from functions

To return the object we need to wrap the return value into ()

### methods 

brand new syntactic sugar = we use here name of the method and **:** followed by function declaration/expression, but when declaring with function keyword we have *this* as the object. Be carefull, because the arrow functions does not set the *this* property as a parent object, but function declarations assign declaration scope as *this* object.