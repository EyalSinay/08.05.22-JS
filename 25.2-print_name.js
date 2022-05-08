// Front end development
// JavaScript – print name
// The following exercise contains the following subjects:
//  bind, call, apply
// Instructions
// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

const obj = {
    name: 'eyal',
    printName: function () {
        console.log(this.name);
    },
    printNameAfterSecond: function () {
        setTimeout(obj.printName.bind(obj), 1000)
    }
}

obj.printName();
obj.printNameAfterSecond();