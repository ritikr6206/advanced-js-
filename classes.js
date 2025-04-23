// // // // classes 
// // // //class is blueprint or template for object creation
// // // // this development reduces the complxexity and increase the maintainability of the object 

// // // class ClassNAme{
// // //     constructor(prop1,prop2){
// // //         this.prop1=prop1;
// // //         this.prop2=prop2;

// // //     }
// // // }
// // // let obj=new ClassNAme("args1","arg2");
// // // console.log(obj.prop1," ",obj.prop2);

// // // // this keyword refers to the object it belongs to

// // // class Dog{
// // //     constructor(dogName,weight,color,breed){
// // //         this.dogName=dogName;
// // //         this.weight=weight;
// // //         this.color=color;
// // //         this.breed=breed;

// // //     }
// // // }
// // // let dog=new Dog("javascript",2.4,"brown","chicici");
// // // console.log(dog.dogName," ",);

// // // // classes creation 
// // // class Person{
// // //     constructor(firstName,lastName){
// // //         this.firstName=firstName;
// // //         this.lastName=lastName;

// // //     }
// // // }
// // // let p=new Person("sahil","yadav");


// // // // to create the lastname default 

// // class Person{
// //     constructor(firstName,"chauhan"){
// //         this.firstName=firstName;
// //         this.lastName=lastName;

// //     }
// // }
// // let p=new Person("jitendra");
// // console.log(p.firstName," ",p.lastName);



// // functions on a class is called methods  ., in case of methods wwe need not to use the function key word 

//  class Person{
//          constructor(firstName,lastName){
//             this.firstName=firstName;
//           this.lastName=lastName;
//              }
//          greet(){
//              console.log("good morning ");
            
//          }
//      }
//      let p=new Person("jitendra"," ","chauhan");
//      p.greet();
    



// class Person{
//     constructor(firstname,lastname) {
//         this.firstname=firstname;
//         this.lastname=lastname;

//     }
//     greet(){
//         console.log("hi there");
//     }
//     compliment(name,object){
//         return "that's a wonderful"+object+","+name;
//     }
//  }
// the compliment function does not output anything itself, so we are logging it
// let p=new Person("ritik","roshan");
// let compliment = p.compliment("harry","hat");
// console.log(compliment );
// let c=p.greet();
// console.log(c);


// class Person {
//     #firstname;
//     #lastname;
// }

// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed; // Fixed variable name
//         this.maxSpeed = maxSpeed;         // Fixed variable name
//     }
//     move() {
//         console.log("Moving at speed of", this.currentSpeed);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed); // Call parent class constructor
//         this.fuel = fuel;
//     }
//     dowheelie() {
//         console.log("Driving on one wheel");
//     }
// }

// let motor = new Motorcycle("black", 0, 250, "petrol");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();


// PROTOTYPES
// Prototypes
// A prototyope is the mechanism in js that makes it possible to have object
class person{
    constructor(firstname,lastname="roushan"){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet(){
        console.log("Hi there! I'm",this.firstname,this.lastname);
        
    }
    // compliment(name,object){
    //     return "That's a wonderful "+object+","+ name;
    // }
}

person.prototype.introduce=()=>{
    console.log("Hi! I am ",this.firstname);
}
person.prototype.favoritecolor="green";
let p=new person("Priyanshu");
console.log(p.favoritecolor);
p.introduce();
