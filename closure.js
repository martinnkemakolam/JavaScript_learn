// sum with closure sum(a)(b) = a+b .

function sum(a) {
    return function (b) {
        return a + b
    }
}

console.log(sum(2)(4))

// filter through function 
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(arg1, arg2) {
    return function (x){
        return x>=arg1 && x<=arg2
    }
}

console.log(arr.filter(inBetween(1, 2))); // 3,4,5,6

function inBetweenarr(arg) {
    return function (x){
        return arg.includes(x)
    }
}

console.log(arr.filter(inBetweenarr([1, 2, 10])));


//sorting in a less verbous way
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
    ];

function byField(name) {
    return function(a,b){
        a[name]>b[name] ? 1: -1
    }
}    

users.sort(byField('name'))
users.forEach(user=>console.log(user.name))
//
let value = "Surprise!";
function f() {
let value = "the closest value";
function g() {
debugger; // in console: type alert(value); Surprise!
}
return g;
}
let g = f();
g();

//
let phrase = "Hello";
if (true) {
let user = "John";
sayHi()
function sayHi() {
console.log(`${phrase}, ${user}`);
}
}

global.user = {
    num: 10
}
console.log(global.user.num)