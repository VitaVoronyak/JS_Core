//task1

function upperCase(str){
    let reg = /^[A-Z]/;
    if(reg.test(str)){
        console.log("String's starts with uppercase character");
    } else{
      console.log("String's not starts with uppercase character");
    }
}

//task2

function checkEmail(str){
    let reg = /\w+@\w+\.\w+/;
    if(reg.test(str)){
        return true;
    } else{
        return false;
    }
}


//task3

function findLetters(str){
    let array = [];
    let reg = /db+d/gi;
    let res = reg.exec(str);
    let res2 = /b+d/gi.exec(res[0]);
    let res3 = /d/gi.exec(res2);

    array.push(res[0],res2[0], res3[0]);
    return array;
}


//task4

var re = /(\w+)\s(\w+)/;
var str = "Java Script";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);


//task5

function validation(cardNumber){
    let reg = /\d{4}\-\d{4}\-\d{4}\-\d{4}/;
    let res = reg.test(cardNumber);
    return res;
}

validation('9999-9999-9999-9999');


//task6

function checkEmail(email){
    let reg = /^([a-zA-Z0-9]+)_?([a-zA-Z0-9#]+)@[a-zA-Z]+\.[a-zA-Z]+/;
    let res = reg.test(email);
    if(res){
        console.log('Email is correct!');
    }else {
        console.log('Email is not correct!');
    }
}


//task7
function checkLogin(login){
     var reg =  /^(?=.*[a-zA-Z])(?=.*[a-zA-Z0-9]).{2,10}$/;
     let res = reg.test(login);

    let digit = /[\d]*[\.]{0,1}[\d]+/g;
    
    let result = login.match(digit);
    console.log(result);
}

checkLogin('ee1*1ret3');

