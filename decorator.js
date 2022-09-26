//spy decorator 
function spy(func) {
    function wrapper(...arg){
        wrapper.calls.push(arg)
        return func.apply(this, arg)
    }
    wrapper.calls =[]
    return wrapper
}

function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
    }
    

work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
work()
for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

// delaying decorator
function f(x) {
    console.log(x)
}

function delay(f, ms) {
    function wrapper(...arg){
        setTimeout(()=>f.apply(this, arg), ms)
    }
    return wrapper
}

let f1 = delay(f, 1000)
let f2 = delay(f, 1500)
f1('test')
f2('work')

// dobounce decorator 
function debounce(func, ms) {
    let cooldown = false
    return function(){
        if (cooldown) return; // to make it not run
        func.apply(this, arguments)
        cooldown = true
        setTimeout(()=> cooldown=false, ms)
    }
}
function alert(x) {
    console.log(x)
}
let f = debounce(alert, 1000)

//
function f(a) {
    console.log(a);
    }
function throttling(f, ms) {
    let delay = false
    return function () {
        if (delay){
            return 
        }
        f.apply(this, arguments)
        setTimeout(()=>delay = true, ms)
    }
}