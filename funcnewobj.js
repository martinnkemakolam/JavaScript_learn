// the new function helps us create an object with the help of a function
function Userlog(name){
    this.name = name;
    this.admin = false;
}

let user = new Userlog('boy');

console.log(user.name) 

// code encapsulated
let log = new function(){
    this.name = 'john';
    this.admin = false;
}

//new.target checks if a function was called with new or not
function user2(name){
    if(!new.target){
        return new user2(name)
    }
    this.name = name;
}

let joe = user2('joe 10')
console.log(joe.name)

//tasks
let obj = {

}
function A(){
    return obj
}
function B(){
    return obj
}

let a = new A() 
let b = new B() 

console.log(a == b)


// create new calculator
function calculator(){
    return {
        read(){
            this.a = prompt('a', 0)
            this.b = prompt('b', 0)
        },
        sum(){
            return +this.a + +this.b
        },
        mul(){
            return this.a * this.b
        }
    }
}

let cal = new calculator();

console.log("sum=" + cal.sum() )

// accumulator

function accul(val){
    return{
        start: val,
        read(){
            this.a = prompt('a',0)
        },
        value(){
            return +this.a + +this.start
        }
    }
}

let Accul = new accul(1);
Accul.read()
console.log(Accul.value())

