let user = {
    name: 'john',
    years: 30
}

let {name, years: age, isAdmin = false} = user


//find the minimal salary 
let salaries = {
    'john': 100,
    'pete': 350,
    'mary': 300
}

function topSalary(salaries) {
    let quota = 0
    let returnValue = null
    for (const [name, ammount] of Object.entries(salaries)) {
        if (ammount > quota) {
            quota = ammount
            returnValue = `${name}`
        }
    }
    return returnValue
}