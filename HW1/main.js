//task2
console.log("Voronyak");

//task3
let firstVar = 13;
let secondVar = 25;
firstVar = secondVar;
console.log(firstVar, secondVar);

//task4
let x;
let obj = {
    String: "women", 
    Number: 25,
    Boolean: true,
    Undefined: x,
    Null: null,
 };

 console.log(typeof obj.String, typeof obj.Number, typeof obj.Boolean, typeof obj.Undefined, typeof obj.Null);

 //task5
 let isAdult = confirm("Do you have already 18?");
 console.log(isAdult);

 //task6
 let name = "Vita";
 let surname = "Voronyak";
 let group = "js";
 let birthDate = 2000;
 let status = false;
 console.log(birthDate, status, name, surname);

 let var1 = null;
 console.log(typeof(var1));

 let var2;
 console.log(typeof(var2));


 //task7
let userName = prompt("Enter your name:");
let email = prompt("Enter your email:");
let password = prompt("Enter your password:");
alert(`Dear ${userName}, your email is ${email}, your password is ${password} `);

//task8
let sec = 1;
let min = sec*60;
let hours = min*60;
let day = hours*24;
let mounth = day*31;
console.log(`Result: ${hours}sec in hour, ${day}sec in a day, ${mounth}sec in mounth`);

 