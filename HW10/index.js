//task1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); 
console.log(y); 
console.log(z); 

//task2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {names: [name1, name2, name3, name4], ages:[age1, age2, age3, age4]} = data;
 console.log(name2); 
 console.log(age2); 
 console.log(name4); 
 console.log(age4);
 

 //task3
 function mul(...args) {
   let res = args[0];
    for(let arg of args){
        if(typeof arg == 'number'){
            res*= arg;
        } else arg++;
    }
    if(typeof res !== 'number'){
        res =0;
    }
    return res;

 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0
 
 //task5
    let keys = [1, 2, 3, 4];
    let values = ["div", "span", "b", "i"];
    let map = mapBuilder(keys, values);
    console.log(map.size); // 4
	console.log(map.get(2)); // "span"

    function mapBuilder(keysArray, valueArrays){
        const map = new Map();
        for (let i = 0; i< keys.length; i++){
            map.set(keys[i], values[i]);
        }
        return map;

    }
  
