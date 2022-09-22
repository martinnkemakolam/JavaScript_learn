// make a counter that you can add decrease and set number
function makecounter() {
    counter.value = 0
    function counter() {
        return counter.value++
    }
    counter.set = (arg)=> counter.value= arg
    counter.decrease = ()=> counter.value--
    return counter
}
counter = makecounter()
console.log(counter())
console.log(counter())

// sum with an arbitrary amount of brackets
function sum(arg1) {
    let generalSum = arg1
    function f (arg2) {
        generalSum+=arg2
        return f
    }
    f.toString = function(){
       return generalSum 
    }
}
