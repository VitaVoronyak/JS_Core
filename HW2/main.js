
//task1
let x = 1;
let y = 2;

let res1 = x + "" + 2;
console.log(res1);
console.log(typeof res1); 

let res2 = !!x + "" + 2;
console.log(res2); 
console.log(typeof res2); 

let res3 = !!x || y
console.log(res3);
console.log(typeof res3); 

let res4 = parseInt(!!x + "" +y);
console.log(res4);
console.log(typeof res4); 

//task2

let number = prompt("Please, enter a number:");
if(number%2 === 0 && number>0){
    alert(number + " is pair possitive");
}
else {
    alert(number + " is not pair possitive, we will try the next condition");
}
if(number%7===0){
    alert(number + " can be divided into 7");
}
else{
    alert(number + " can't be divided into 7");
}


//task3
let arr = [];
arr[0] = 20;
arr[1] = "str"
arr[2] = true;
arr[3] = null;
console.log(arr.length);
userNumber = prompt("Please, enter your number");
arr[4] = userNumber;
console.log(arr[4]);
arr.shift();
console.log(arr);

//task4
let cities = ["Rome", "Lviv", "Warsaw"]; 
let result = cities.join("*");
console.log(result);

//task5
let isAdult = prompt("How old are you?");
if (isAdult > 18){
    alert("You have already 18!");
}
else if(isAdult < 10){
    alert("Unfortunatelly, you are too young.")
}


//taks6
let a = prompt("Please, enter lenth, a =");
let b = prompt("Please, enter lenth, b =");
let c = prompt("Please, enter lenth, c =");
let S, p;
if( a>0 && b>0 && c>0){
    p = (parseInt(a) + parseInt(b) + parseInt(c))/2;
    let resS = p*(p-a)*(p-b)*(p-c);
    S = Math.sqrt(resS); 
    let roundS = S.toFixed(3);
    if(S === 0){
        alert("The triangle with your data does not exist(");
    }else{
    console.log("the area of ​​the triangle equal to: " + roundS);
    }

    if((c*c == a*a + b*b) || (a*a == b*b + c*c) || (b*b == a*a + c*c)){
        console.log("This triangle is a right tringle");
    }
    else{
        console.log("This triangle is not a right tringle");
    }
}else {
    alert("Incorrect data");
}


//task7
let d = new Date();
let currentHour = d.getHours();
    if (currentHour > 23 || currentHour < 5){
        alert("Good night!");
    }
    else if(currentHour > 5 && currentHour < 11){
        alert("Good Morning!")
    }
    else if(currentHour > 11 && currentHour < 17){
        alert("Good day!");
    }
    else{
        alert("Good evening!");
    }
//second var
switch(!!currentHour){
    case (currentHour > 23 || currentHour < 5):
        alert("Good night!");
        break;
    case (currentHour > 5 && currentHour < 11):
        alert("Good Morning!")
        break;
    case (currentHour > 11 && currentHour < 17):
        alert("Good day!")
        break;
     case (currentHour > 17 && currentHour < 23):
        alert("Good evening!")
        break;
}