function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a,b)=> a +b, 0)
    
}
let salaries = {
    'john': 100,
    'pete': 300,
    'mary': 250
}
console.log(sumSalaries(salaries))

function count(user) {
    return Object.entries(user).length
}

let user = {
    name: 'John',
    age: 30
}

console.log(count(user))