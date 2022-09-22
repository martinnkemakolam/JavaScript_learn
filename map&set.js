// filter unique array members 

let values = ['hare', 'krishna', 'hare', 'krishna', 'west', 'west']
function unique(arr) {
    let set = new Set();
    for (const key of arr) {
        set.add(key)
    }
    // wanted to use something else but its not iteratable 
    return Array.from(set)
}

console.log(unique(values))

// filter anagrams
let anagrams = ['nap', 'teachers', 'cheaters', 'pan', 'ear', 'era', 'hectares']
function aclean(arr) {
    let map = new Map();
    for(let word of arr){
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word)
    }
    return Array.from(map.values());
}
console.log(aclean(anagrams))

// 
let map = new Map(); 
map.set("name", "John");
let keys = Array.from(map.keys()); 
keys.push("more"); 
console.log(keys);