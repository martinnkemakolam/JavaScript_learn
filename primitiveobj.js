let alert = console.log;
let user = { 
    name: "John", 
    money: 1000, 
    [Symbol.toPrimitive](hint) {
         alert(`hint: ${hint}`); 
         return hint == "string" ? `{name: "${this.name}"}` : this.money; 
        } 
    };
    // conversions demo: 
    alert(user); 
    // hint: string -> {name: "John"} 
    alert(+user); // hint: number -> 1000 
    alert(user + 500); // hint: default -> 1500
    alert(+user + +user)

    //using valueof or to string

    let user2 = { 
        name: "John", 
        money: 1000, 
        // for hint="string" 
        toString() {
             return `{name: "${this.name}"}`; 
            },
            // for hint="number" or "default" 
            valueOf() {
                 return this.money; 
                } 
            };


alert(user2); // toString -> {name: "John"}
alert(+user2); // valueOf -> 1000 
alert(user2 + 500); // valueOf -> 1500

//implementing to string only
let user3 = { 
    name: "John", 
    toString() { return this.name; } 
};
alert(user3); 
// toString -> John 
alert(user3 + 500); // toString -> John500