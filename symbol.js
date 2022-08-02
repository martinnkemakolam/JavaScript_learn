let id = Symbol("id");
let user = { 
    // belongs to another code
     name: "John",
     [id]: 123
};

 let id2 = Symbol("id"); 
 
 user[id2] = 1; 
 
 console.log( user[id] ); 
 // we can access the data using the symbol as the key

 console.log(Object.keys(user))

 // read from the global registry 
 let id3 = Symbol.for("id"); 
 // if the symbol did not exist, it is created 
 // read it again (maybe from another part of the code) 
 let idAgain = Symbol.for("id"); 
 // the same symbol 
 console.log( id3 === idAgain ); // true

 let globalSymbol = Symbol.for("name"); 
 let localSymbol = Symbol("name"); 
 alert( Symbol.keyFor(globalSymbol) ); 
 // name, global symbol 
 alert( Symbol.keyFor(localSymbol) ); 
 // undefined, not global 
 alert( localSymbol.description ); 
 // name