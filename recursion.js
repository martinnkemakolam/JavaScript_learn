function basic(arg){
    let newarg;
    if(arg%2==0){
        newarg = true;
        console.log('is even')
    }
    if(arg%2==1){
        newarg=false
        console.log('is odd')
    }
    if(newarg===true||newarg===false){
        console.log(basic(arg-1))
    }
}
