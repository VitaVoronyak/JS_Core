//task1
function testThrow(exception){
    try{
        throw exception;
    } catch(err){
        console.log("Caught:" + err);
    }
}


//task2
function calcRectangleArea(width, height){
   
    try{
        if(isNaN(width)) throw "width is not a number";
        else if(isNaN(height)) throw "height is not a number";
    }
    catch(err){
        console.log("wrong input:" + err);
    }
    let S = width*height;
    return S;
}

//task3
function checkAge(){
    let age = prompt("Please, enter your age:");
    try{
        if(age == ""){
            throw new Error("The field is empty! Please enter your age");
        } else if (isNaN(parseInt(age))){
            throw new Error("It is not a number");
        } else if (age < 14){
            throw new Error("Unfortunatelly, you are too young");
        }
        alert("You can watch this movie");
    }
    catch(err){
        alert(err.name + " " + err.message);
    }    
}

//task4
class MonthException{
    constructor(message){
        this.message = message;
        this.name = 'MonthException';
    }
}
function showMonthName(month){
    try{
        month = month -1;
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        if(months[month] !== undefined){
            return months[month];
        } else {
            throw new MonthException('Incorrect month number');
        }
    } catch(error){
        console.log(error.name + ' ' + error.message);
    }
}

console.log(showMonthName('d')); 


//task5

function showUser(id){
   try{
        if(id<0) throw Error ('Incorrect data');
        let user = {};
        user.id = id;
        return user;
   } catch(err){
       console.log(err.message);
   }
}

function showUsers(ids){
    try{
        for(let i = 0; i<ids.length; i++){
            if(ids[i]<0)throw new Error(`ID must not be negative: ${ids[i]}`);
        }
    } catch(err){
        console.log(err.name + ':' + err.message);
    }
    finally{
        let arrIds = [];
        for(let i= 0; i< ids.length; i++){
            if(ids[i] < 0){
                i++;
            }
            arrIds.push(showUser(ids[i]))
          
        }
        return arrIds;
    }
}