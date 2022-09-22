// recursion
//sum all nummbers till the given 1

function sumTo(num) {
    if (num == 1) {
        return num
    }else{
        return num + sumTo(num - 1)
    }
}

function usingForloop(num) {
    let result = 0;
    for (let i = 0; i < num; i++) {
        result += num-i;
    }
    return result
}

function arithemethicProgression(num) {
    let difference = num/2
    return  num + (num - 1) * difference
}
console.log(sumTo(10), usingForloop(10), arithemethicProgression(10))

// calculate factorial
function factorial(n) {
    if (n == 1){
        return n
    }else{
        return n * factorial(n-1)
    }
}

console.log(factorial(5))

// fibonacci numbers
function fib(n) {
    return n<=1 ? n : fib(n-1)+ fib(n-2)
}

function fibNormal(n) {
    let a = 1;
    let b = 1;
    
    for (let i = 0; 1 <= n; i++) {
        let c = a + b
        a = b
        b = c
    }
    return b
}

//output a single list
let list = {
    value: 1,
    next: {
    value: 2,
    next: {
    value: 3,
    next: {
    value: 4,
    next: null
}
}
}
};

function printList(lists) {
    let tmp = lists
    while (tmp){
        alert(tmp.value)
        tmp = tmp.next
    }
}

function printList(params) {
    alert(params.value)
    if (params.next) {
        printList(params.next)
    }
}
