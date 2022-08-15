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