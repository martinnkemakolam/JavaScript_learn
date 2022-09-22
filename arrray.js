function getMaxvalue(arry){
    let sum = 0;
    for (const key of arry) {
        if (key > 0) {
            sum += key
        }
    }
    console.log(sum) 
}

getMaxvalue([-2, 1, 3])

//array operations

let array = ['Jazz','Blues',]
console.log(array)
array.push('Rock-n-Roll')
console.log(array)
let midValue = Math.floor(array.length / 2)
console.log(array)
array[midValue] = 'Classics'
console.log(array)
array.shift
console.log(array)
array.unshift('Rap', 'Reggae')
console.log(array)

// sum input number
let arrays = [];
function sumInput(num) {
    let userValue = prompt('message', 0)
    if (userValue == '' || userValue == null){
        sumInput()
    }
    arrays.push(userValue)
    let sum = 0;
    for (const number of arrays) {
        sum+= +number;
    }
    console.log(sum)
    console.log(arrays)
}
sumInput(2)
sumInput(1)
sumInput(3)


let arr = [1, 2]; 
let arrayLike = { 
    //treats the number as index
    1: "something", 
    0: "else", 
    //cause of this
    [Symbol.isConcatSpreadable]: true, 
    length: 2 
};

console.log(arr.concat(arrayLike))

// array methods
// function to camel-case strings

function camelize(paramstr) {
    let arr = paramstr.split('-');
    let final = arr.map((item,index)=>{
        if (index > 0){
            let firstLettercap = item[0].toUpperCase();
            let restofletter = item.slice(1);
            var fullthing = firstLettercap + restofletter
            return fullthing
        }else{
            return arr[0]
        }
    })
    console.log(final.join(""));
}
// this was a bit hard happy i figured it out but i did it
camelize('background-color')

//filter range 
//function that gets an array and looks for elements between a and b


let array3 = [5, 3, 8, 1]
function filterRange(arr, a , b){
    let startrang
    let endrange
    if (a > b){
        startrang = b
        endrange = a
    }else{
        startrang = a
        endrange = b
    }
    return arr.filter(item =>{
        return item >= startrang && item <= endrange
    })
}

let filter = filterRange(array3, 1, 4)
console.log(filter)

//filter range inplace

function filterRangeinplace(arr, a , b){
    let startrang
    let endrange
    if (a > b){
        startrang = b
        endrange = a
    }else{
        startrang = a
        endrange = b
    }
    for (let key in arr) {
        if(arr[key] < startrang || arr[key] > endrange){
            arr.splice(key, 1)
        }
    }
}
let array4 = [5, 3, 8, 1]
filterRangeinplace(array4,1,4)
console.log(array4)

//sort in decreasing order

let array5 = [5,2,1,-10,8]

array5.sort((a,b) => b - a)

console.log(array5)

// copy sorted array
// we have an array of strings we'd like to have a sortd copy of it, but keep arr unmodified 

let array6 = ['html', 'javaScript', 'css'];

function copySorted(arr) {
    let sort = arr.slice(0)
    sort.sort((a,b)=> a.length-b.length)
    return sort
}
let sort = copySorted(array6)
console.log(sort)
console.log(array6)

// Create an extendable calculator
// create a constructor function calculate that creates 'extendable' calculator obj

function calculator() {
    this.method = {
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b,
    };

    this.calc = function (str){
        let string = str.split(' '),
        a = +string[0],
        oper = string[1],
        b = +string[2]

        if (!this.method[oper] || isNaN(a) || isNaN(b)) {
            return NaN
        }
        
        return this.method[oper](a,b)        
    }
    this.addMethod = function (name, func) {
        this.method[name] = func
    }
}

let calc = new calculator
// Hardest one so far not going to lie
console.log(calc.calc('1 + 2'))

//map to names
// had importance of 5 but was easy compared to its counter part at the top
let john = {name: 'john', surname: 'west', age: 24}
let joe = {name: 'joe', surname: 'gun',age: 26}
let jeff = {name: 'jeff', surname: 'king',age: 28}

let user = [jeff,joe,john]

let names = user.map(item=>{
    return item.name
})

console.log(names)

// map to object
//another importance 5 big boy at the top already broke my courage really
// using top array again

let userMapped = user.map(item=>{
     return{
        fullname: item.name +" "+item.surname,
        age: item.age
    }
})

console.log(userMapped[0].age)
console.log(userMapped[0].fullname)
// not so hard wish this questions came before big boy up

//sort by age
function sortByAge(params) {
    params.sort((a,b)=> b.age - a.age)
}

console.log(user[0].name)
console.log(user[1].name)
console.log(user[2].name)

//sorting now seems easy but nothing to complex
let array7 = [1,2,3]

function shuffle(arry) {
    let random =Math.round(Math.random()*2)

    arry.sort((a)=>{
        if(a > random){
            return -1
        }else if(a<random){
            return 1
        }else{
            return 0
        }
    })
}
// let count = { '123': 0, '132': 0, '213': 0, '231': 0, '321': 0, '312': 0 };
// for (let index = 0; index < 10000000; index++) {
//     shuffle(array7)
//     count[array7.join('')]++
// }

// for (let key in count) { console.log(`${key}: ${count[key]}`); }

// array was suffled but the algorithm used wasnt so clean
// a proper algorithm below (the fisher-yates shuffle)
function shuffle(array) { 
    for (let i = array.length - 1; i > 0; i--) { 
        let j = Math.floor(Math.random() * (i + 1)); 
        // random index from 0 to i 
        // swap elements array[i] and array[j] 
        // we use "destructuring assignment" syntax to achieve that 
        // you'll find more details about that syntax in later chapters 
        // same can be written as: 
        // let t = array[i]; array[i] = array[j]; array[j] = t 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
}

//fisher algorithm scary, pretty fast i guess

//get average age of an object array refrence to array 7

function getAverage(arr) {
    let age = arr.map(item=>item.age)
    return age.reduce((sum, value)=> sum+value, 0)/age.length
}

console.log(getAverage(user))

//filter unique array members

function unique(arr) {
    let result =[]
    for (const item of arr) {
        if(!result.includes(item)){
            result.push(item)
        }   
    }
    return result
}
let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
console.log(unique(strings))