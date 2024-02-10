// Follow along with the examples here
/*function doNothing() {}
function sayHello() {
    console.log("Hello!");
}
sayHello()
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  sayHelloToGuadalupe()
  function sayHelloToLiz() {
    console.log("Hello, Liz!")
  }
  sayHelloToLiz()
function sayHelloToSamip() {
    console.log("Hello, Samip!")
}
sayHelloToSamip()

sayHelloToGuadalupe()
sayHelloToLiz()
sayHelloToSamip()
function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("36");
  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye","Julio")
  say("julio","Hello")

  function add(x, y) {
    return x + y;
  }
  console.log(add(1,2))
  console.log(add(80,9000))

  function say(greeting, firstName) {
    return `${greeting},${firstName}!`;
  }
  console.log(say("Damn You,","Greta"))

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
console.log(say("Hello","Liz"))

function add(x, y) {
    x + y;
  }
  console.log(add(1,2))

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
console.log(say("Howdy","partner"));*/

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy","partner"))

  function shows(show1,show2,show3){
    console.log(`Rank these shows in order:${show2},${show3},${show1}`)
    return `${show1},${show2},${show3}`
  }
  console.log(shows("Reacher","OnePiece","Sherlock"))