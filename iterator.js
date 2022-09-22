let range = { 
    from: 1, 
    to: 5 
};
// 1. call to for..of initially calls this 
range[Symbol.iterator] = function() { 
    // ...it returns the iterator object: 
    // 2. Onward, for..of works only with this iterator, asking it for next values 
    return { 
        current: this.from, 
        last: this.to, 
        // 3. next() is called on each iteration by the for..of loop 
        next() { 
            // 4. it should return the value as an object {done:.., value :...} 
            if (this.current <= this.last) { 
                return { 
                    done: false, 
                    value: this.current++ 
                }; 
        } else { 
                return { 
                done: true 
                }; 
            } 
        } 
    }; 
};// now it works! for (let num of range) { alert(num); // 1, then 2, 3, 4, 5 }

// the range itself doesnt have the nxt method

let str = '0: west, 1:boy'

let test = str[Symbol.iterator]()

while (true) {
    let value = test.next()
    if (value.done) {
        break
    }else if (value.value === 'w'){
        console.log('found ')
    }else{
        console.log(value.value)
    }
    
}
// making an object iteratable
let boy = {
    value1: 0,
    value4: 4,
    [Symbol.iterator]: function (){
        this.current = this.value1
        return this
    },

    next (){
        if (this.current <= this.value4) {
            return {value: this.current++,
            done: false}
        }else{
            return {done: true}
        }
    }
}

// for (const value of boy) {
//     console.log(value)
// }


let  arr = Array.from(boy, next => next - 1)
console.log(arr);