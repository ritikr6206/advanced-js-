// // the new map method
//  const fruits= new Map();

//  fruits.set("apple", 10);
// fruits.set("banana", 20);
// fruits.set("orange", 15);

// console.log(fruits.get("apple"));

// //javascript map methods

// // for 

// let text = "";
// fruits.forEach(function(value, key) {
//   text += key + " = " + value + "\n";
// }
// );
// console.log(text);

// //list all enteries
// let text1= "";
// for (const x of fruits.entries()) {
//   text1 += x + "\n";
// }
// console.log(text1);
// //list all keys
// let text2 = "";
// for (const x of fruits.keys()) {
//   text1 += x + "\n";
// }

// //list all values
// let text3 = "";
// for (const x of fruits.values()) {
//   text3 += x + "\n";
// }
//destructuring



const person = {
    firstname: "John",
    lastname: "Doe",
    Age:50
};
let{firstname,lastname}=person;

console.log(firstname,lastname);

let{lastname:name}=person;
console.log(name);