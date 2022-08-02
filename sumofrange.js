//The sum of a range
function range(arg1,arg2){
    let res = [arg1]
    while (arg1!=arg2){
        arg1++
        res.push(arg1)
    }
    return(res);
   
}
console.log(range(1,10))

//modified range 
function modRange(arg1,arg2,arg3){
    let res = [arg1]
    let score = arg1;
    while (arg1!=arg2) {
        if(arg1>arg2){
            score += arg3
            arg1--
            res.push(score)
        }
        else{
            arg1 = score
            score += arg3
            res.push(score)
        }
    }
    console.log(res);
}
modRange(1,10,2)


//
function sum(arg1){
    let length = 0;
    let score = 0;
    while(arg1.length!=length){
        score += arg1[length]
        length++
    }
    console.log(score)
}
sum(range(1,10))