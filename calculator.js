let calculator = {
    read(){
        this.a = prompt('a', 0);
        this.b = prompt('b', 0);
    },
    sum(){
        return +this.a + +this.b;
        
    },
    multiply(){
        return this.a * this.b;
    }
}

calculator.read()
calculator.multiply()
calculator.sum()

function test() {
    return{
        namefun() {
            let name = 'joe'
            return name
        },
        addname(){
            let name2 = 'dave'
            return name2
        }
    }
}

let test1 = new test



console.log(test1.namefun())