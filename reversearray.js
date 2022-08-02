//new array that has the same elements in the inverse order
function reverseArray(arry) {
    let newarry = []
    let res;
    let less = 1;
    while (arry.length != newarry.length) {
        res = arry.length - less
        less++
        newarry.push(arry[res])
    }
    console.log(newarry)
}

reverseArray([0,1,2,3,4,5,6,7,8,9])

function reversearrayinplace(arry) {
    let i = 0
    let less = 1;
    while (arry.length != i) {
        res = arry.length - less;
        arry.push(arry[less])
        arry.pop()
        less++
        i++
    }
    console.log(arry)
}

reversearrayinplace([0,1,2,3,4,5,6,7,8,9])