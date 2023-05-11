
var money = 0

var EL_moneyButton = document.querySelector('#dollar_img')
var EL_money = document.querySelector('#money_amount')
var EL_bet100 = document.querySelector('#bet100')
var randomtall = Math.floor(Math.random () * 100);




function clickmoney(){
   money = money + 1;
    console.log(money);
    EL_money.innerHTML = money


}


function bet100(){
    if (money>100){
        money = money - 100;
        EL_money.innerHTML = money
        
        
    }

}

function randittall(){
    randomtall = Math.floor(Math.random () * 10);
    randomtall.innerHTML = randomtall

}


EL_bet100.addEventListener('click', bet100)
EL_moneyButton.addEventListener('click', clickmoney)



