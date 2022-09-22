// output every second
function printNumber(arg1, arg2) {
    let current = arg1
    setTimeout(function go(){
        console.log(current)
        if (current<arg2) {
            setTimeout(go, 1000)
        }
        current++
    }, 1000)
}

//with setinterval
function printNUM(arg1, arg2) {
    let current = arg1
    let time = setInterval(()=>{
        console.log(current)
        if(current == arg2){
            clearInterval(time)
        }
        current++
    }, 1000)
}