//FUNCTION TO COUNT THE NUMBER OF B
function countsB(string) {
    let num = 0;
    let num2 = 0;
    
    while (num!=string.length) {
        if(string.charAt(num)=='B')num2++
        num++
    }
    return num2++
}

console.log(countsB('bBBbbbBBEWBB'))