// --------------------------------------------------------------------
// Code below is for LOCATIONS OF JS CODE
// --------------------------------------------------------------------

/*
    Example of a multi-line comment just like in C#
*/

// Single line comment

console.debug("Debug message from our JavaScript file!");
console.log("Log message from our JavaScript file!");
//console.batman('Hello Bruce');
console.info("Info message from our JavaScript file!");
console.warn("Warning message from our JavaScript file!");
console.error("Error message from our JavaScript file!");















// --------------------------------------------------------------------
// Code below is for: CONST, LET, VAR & NAMED FUNCTIONS
// --------------------------------------------------------------------

/**
 * Functions start with the word function.
 * They don't have a return type and the naming convention is camel-case.
 */
function variables() {
  var currentHour; 
  // Declares a variable where the value cannot be changed
  const dayOfWeek = 'Friday';

  // Declares a variable those value can be changed
  let currentMinute = 55;
  currentMinute = 56;
  currentMinute++;

  currentHour = 10;
  console.info('The current day is', dayOfWeek);
  console.info('the current hour is' + currentHour);
  console.info('The current minute is' + currentMinute);
  // TODO: Declares a variable that will always be an array
const myArray = [1, 2, 3];

myArray.push(42);

console.debug('My array!', myArray);

const anotherArray = null;

// says the same as if(myArray != null && myArray != undefined)
if (myArray){
  console.log('This is true');
}

  // TODO: Demonstrate console logging
  // you do that on chrome while in console ex. type in variable()
}


/**
 * Functions can also accept parameters.
 * Notice the parameters do not have types.
 * @param {Number} param1 The first number to display
 * @param {Number} param2 The second number to display
 */
function printParameters(param1, param2) {
  // TODO: Discuss this
  console.log(`The value of param1 is ${param1}`);
  console.log(`The value of param2 is ${param2}`);
}












// --------------------------------------------------------------------
// Code below is for: EQUALITY & TRUTHY
// --------------------------------------------------------------------

/**
 * Compares two values x and y.
 * == is loose equality
 * === is strict equality
 * @param {Object} x
 * @param {Object} y
 */
function equality(x, y) {
  // TODO: Discuss this
  console.log(`x is ${typeof x}`);
  console.log(`y is ${typeof y}`);

  console.log(`x == y : ${x == y}`); // true
  console.log(`x === y : ${x === y}`); // false
}

/**
 * Each value is inherently truthy or falsy.
 * false, 0, '', null, undefined, and NaN are always falsy
 * everything else is always truthy
 * @param {Object} x The object to check for truthy or falsy,
 */
function falsy(x) {
  // TODO: Discuss this
  if (x) {
    console.log(`${x} is truthy`);
  } else {
    console.log(`${x} is falsy`);
  }
}

const car = {
  make: 'honda',
  model: 'civic',
  milesDriven: 0,
  currentValue: 15000
};
car.milesDriven++;
car.currentValue = 12000;


/*
########################
Function Overloading
########################

Function Overloading is not available in Javascript. 
*/

function Add(num1, num2) {
  return num1 + num2 + 1000;
}

function Add(num1, num2, num3) {
  return num1 + num2 + num3;
}

// --------------------------------------------------------------------
// Code below is for JS DATA TYPES
// --------------------------------------------------------------------

/**
 *  Objects are simple key-value pairs
    - values can be primitive data types
    - values can be arrays
    - or they can be functions
*/
function objects() {
  const person = {
    firstName: "Bill",
    lastName: "Lumbergh",
    age: 42,
    employees: [
      "Peter Gibbons",
      "Milton Waddams",
      "Samir Nagheenanajar",
      "Michael Bolton",
    ],
  };

  // TODO: Log the object

  // TODO: Log the first and last name

  // TODO: Log each employee
}








// --------------------------------------------------------------------
// Code below is for MATH AND STRINGS
// --------------------------------------------------------------------

/*
########################
Math Library
########################

A built-in `Math` object has properties and methods for mathematical constants and functions.
*/

function mathFunctions() {
  // TODO: Discuss this
  console.log("Math.PI : " + Math.PI);
  console.log("Math.LOG10E : " + Math.LOG10E);
  console.log("Math.abs(-10) : " + Math.abs(-10));
  console.log("Math.floor(1.99) : " + Math.floor(1.99));
  console.log("Math.ceil(1.01) : " + Math.ceil(1.01));
  console.log("Math.random() : " + Math.random());
}

/*
########################
String Methods
########################

The string data type has a lot of properties and methods similar to strings in Java/C#
*/

function stringFunctions(value) {
  // TODO: Discuss this
  console.log(`.length -  ${value.length}`);
  console.log(`.endsWith('World') - ${value.endsWith("World")}`);
  console.log(`.startsWith('Hello') - ${value.startsWith("Hello")}`);
  console.log(`.indexOf('Hello') - ${value.indexOf("Hello")}`);

  /*
    Other Methods
        - split(string)
        - substr(number, number)
        - substring(number, number)
        - toLowerCase()
        - trim()
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    */
}

function displayForceUsers(){
  let users = ['Luke Skywalker', 'John Fulton', 'Darth Breydon', 'Da Baby'];

  users.push('Garth Brooks')
  console.log(users.pop());
  users.shift();
  users.unshift('Elmo');

  const droids = ['dog', 'beef', 'hair'];
  console.info(users.concat(droids));

  const copyOfUsers = users.splice();

  users.splice(2, 0, 'Ray');

  console.debug(users);
console.debug(copyOfUsers);
  for(let i =0; i < users.length; i++){
    console.debug('Force user at index ' + i + 'is' + users[i]);
  }
}









// --------------------------------------------------------------------
// Code below is for JS ARRAYS
// --------------------------------------------------------------------

// TODO: Add a function to filter out a specific value from an array
// TODO: Cover Array indexers
// TODO: Cover Array.Push
// TODO: Cover Array.Splice
// TODO: Cover Array.Slice
// TODO: Cover Array.Concat
