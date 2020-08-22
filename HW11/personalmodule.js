
exports.myDateTime = function (user) {
    let os = require('os');
    user = os.userInfo().username;
    let d = new Date();
    let currentHour = d.getHours();
    let result = "";
    if (currentHour > 23 || currentHour < 5){
        result = "Good night,";
    }
    else if(currentHour > 5 && currentHour < 11){
        result = "Good Morning,";
    }
    else if(currentHour > 11 && currentHour < 17){
        result = "Good day,";
    }
    else{
        result = "Good evening,";
    }
    return `${Date()} ${result} ${user}`;
  };
