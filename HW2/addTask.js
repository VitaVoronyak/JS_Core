let result=confirm('Do you want to play a game?');
let number;
let userNumber;
let i;
let n=5;
let attempt=3;
let price=10;
let total_price=0;
let your_price =0;


while(result){
        number = Math.floor(Math.random() * n);
        userNumber = prompt(`Choose a number from 0 to ${n}
        Attempts left: ${attempt}
        Total price: ${total_price}
        Possible prize on current attempt: ${price}$`);
        for(i=0; i<2;i++){
            if(number !== Number(userNumber)){
               attempt--;
               userNumber= prompt(`Choose a number from 0 to ${n}
                 Attempts left ${attempt}:
                 Total price ${total_price}:
                 Possible prize on current attempt:${price}$`);
            }else{
                i=2;
               switch(attempt){
                case 3:
                    your_price=price+total_price;
                    result=confirm(`Congratulation, you won!Your prize is:${your_price}$. Do you want to continue?`);
                    break;
                case 2:
                    your_price=price/2+total_price;
                    result=confirm(`Congratulation, you won!Your prize is:${your_price}$. Do you want to continue?`);
                    break;
                case 1:
                    your_price=price/5+total_price;
                    result=confirm(`Congratulation, you won!Your prize is:${your_price}$. Do you want to continue?`);
                    break;   
                }
                if(result){
                    n=n*2;
                    attempt=4;
                    total_price=total_price+your_price;
                    price=price*3;
                }
                else{
                    alert(`Thank you for your participation. Your prize is: ${your_price}`);
                    result=confirm('Do you want to play again?');
                }
            }
        }
       if(number!== Number(userNumber)){
            alert(`Thank you for your participation. Your prize is: ${your_price}`);
            result=confirm('Do you want to play again?');
            if(result){
                attempt=3;
                i=0;
                n=5;
            }
        }
 }
 if(!result){
    alert('You did not become a billionaire');
}
  
