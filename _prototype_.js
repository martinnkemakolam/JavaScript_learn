// adding a defer prototype to a function
function f() {
    console.log('hello')
}
Function.prototype.defer = function (arg) {
    setTimeout(()=>{
        this()
    }, arg)
}
f.defer(1000)
//
let user = {
    name: "John",
    sayHi() {
        console.log(this.name);
    }
}
//
function add(a,b) {
    console.log(a+b)
}

Function.prototype.defer1 = function (ms) {
    return (...args)=>{
        setTimeout(()=> this.call( this, ...args), ms)
    }
}

user.sayHi = user.sayHi.defer1(1000);
add.defer1(2000)(1,2)
user.sayHi()

//creating a pure object
let dictionary = Object.create(null)
Object.defineProperties(dictionary, {
    toString: {
        value(){
            return Object.keys(this).join()
        }
    }
})
dictionary.apple = "Apple";
dictionary.__proto__ = "test";
dictionary.toString =     {
    value(){
        return Object.keys(this).join()
}
}
for(let key in dictionary) {
    console.log(key); // "apple", then "__proto__"
}
    