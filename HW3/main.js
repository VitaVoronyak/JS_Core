//task1
//for
let arr = [2,3,4,5];
let result = 1;
for(let i=0; i<arr.length; i++){
    result *= arr[i];
}
console.log(result);

//while
let i=0;
while(i<arr.length){
    result *= arr[i];
    i++;
}
console.log(result);

//task2
for(let i=0; i<16; i++){
    if( i%2 == 0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}

//task3
function randArray(k){
    let array = [];
    for(let i=0; i<k;i++){
        array[i]=Math.floor(Math.random() * 500);
    }
    console.log(array);
}

randArray(4);

//task4
function raiseToDegree(a,b){
    if(Number.isInteger(a) && Number.isInteger(b)){
    let res = Math.pow(a,b);
    return res;
    }
    else{
        console.log("Error..");
    }
}

let first = Number(prompt("Enter a"));
let second = Number(prompt("Enter b"));
let result = raiseToDegree(1,2);
console.log(result);


//task5
function findMin() {
    var len = arguments.length, min = Infinity;
    while (len--) {
      if (arguments[len] < min) {
        min = arguments[len];
      }
    }
    return min;
  };

let result5 = findMin(12, 14, 4, -4, 0.2);
console.log(result5);


//task7
function lastElem(arr, number){
    let count=0;
    let newArr = [];
    let k = arr.length;
    let i = 1;

    if (number === undefined){
        return arr[k-1];
    }

    if(number>arr.length){
        newArr = arr;
    }else{
        while(number!==count){
             newArr.push(arr[k-i]);
             newArr.reverse();
             count++;
             i++;
        }
    }
    return newArr;
}

//task8
function upperCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 console.log(upperCase('i love java script' ));

//task6
function findUnique(arr){
   
   for(let i=0; i<arr.length; i++){
       let unique = arr[i];
       let j = i+1;
       for(j; j<arr.length; j++){
            let compare = arr[j];
            if(unique == compare){
                return false;
            }
       }
       
   }
   return true;

}
console.log(findUnique([1, 2, 3, 5, 11]));  // => false

