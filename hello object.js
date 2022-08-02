let user = {};
user['name'] ='john';
user['surname'] = 'smith'
user['name']='pete'
delete user.name

console.log(user)

// check for emptiness

console.log
function empty(arg) {
    if (arg[0]) {
        return false
    }else{
        return true
    }
}

console.log(empty(user))

// summing object property
let salaries = {
    john: 100,
    Ann: 160,
    pete: 130
}

function sum(arg) {
    let sum = 0;
    for (let key in arg){
        sum += arg[key]    
    }
    console.log(sum)
}

sum(salaries)

//multiplying numeric properties in an object

let menu ={
    width: 300,
    height: 400,
    title: 'menu'
}

function multiply(arg) {
    for (const key in arg) {
        if (typeof arg[key] == 'number'){
            arg[key]*=2
        }
    }

}

multiply(menu)
console.log(menu)