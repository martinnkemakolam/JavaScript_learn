function number(){
    let numbr = prompt('number')
    if(isFinite(numbr)){
        console.log(+numbr)
    }else if(numbr==""||numbr==null){
        console.log('nothing inputed')
    }else{
        number()
    }
}

number()

let i = 0; 
while (i < 11) {
    i += 0.2; 
    if (i > 9.8 && i < 10.2) 
    console.log( i ); 
}

function random(min, max){
    console.log(min+Math.random()*(max - min))
} 

function randomInt(min, max){
    console.log(Math.round(min+Math.random()*(max - min)))
} 

randomInt(1,5)