
var money = 0

var EL_moneyButton = document.querySelector('#dollar_img')
var EL_money = document.querySelector('#money_amount')
var EL_bet100 = document.querySelector('#bet100')
var randomtall = Math.floor(Math.random () * 100);
var EL_bet200 = document.querySelector('#bet200')

var EL_div = document.querySelector('#game1')
var EL_startgame = document.querySelector('#startgame')


EL_div.style.display = "None"
//EL_div.style.display = "Block"

function clickmoney(){
   money = money + 1;
    console.log(money);
    EL_money.innerHTML = money


}


function bet100(){
    if (money>100){
        money = money - 100;
        EL_money.innerHTML = money 
        randomtall = Math.floor(Math.random () * 10);
    }
    randittall();
}

function randittall(){
    
    randomtall.innerHTML = randomtall
    console.log(randomtall);
    if(randomtall == 7){
        money = money + 300;
        EL_money.innerHTML = money
    }

}


function randittall2(){
    randomtall.innerHTML = randomtall
    console.log(randomtall);
    if(randomtall == 2){
        money = money + 500
        EL_money.innerHTML = money
    }

}

function bet200(){
    if (money>200){
        money = money - 200;
        EL_money.innerHTML = money
        randomtall = Math.floor(Math.random () * 10);

        
    }
    randittall2()
}


function reveal(){
    EL_div.style.display = "block"
    console.log("reveal")

}


EL_bet100.addEventListener('click', bet100)
EL_moneyButton.addEventListener('click', clickmoney)
EL_bet200.addEventListener('click',bet200)
EL_startgame.addEventListener('click',reveal)




