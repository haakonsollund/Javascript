
var money = 0
var randomtall = Math.floor(Math.random () * 10);

var EL_moneyButton = document.querySelector('#dollar_img')
var EL_money = document.querySelector('#money_amount')
var EL_bet100 = document.querySelector('#bet100')
var randomtall = Math.floor(Math.random () * 100);
var EL_bet200 = document.querySelector('#bet200')

var EL_div = document.querySelector('#game1')
var EL_startgame = document.querySelector('#gamestart')
var EL_logo = document.querySelector('#gamlogo')
var EL_menu = document.querySelector('#logo')
var EL_back = document.querySelector('#backtomenu')
var EL_randomtall1 = document.getElementById('randomtall')
var EL_bet500 = document.querySelector('#bet500')
var EL_input = document.querySelector('#inputNR')
var EL_game2 = document.querySelector('#game2')
var EL_startgame2 = document.querySelector('#roulett')





EL_game2.style.display = "none"
EL_div.style.display = "None"
EL_logo.style.display = "None"
EL_menu.style.display = "block"
EL_back.style.display = "none"
document.getElementById('randomtall1').style.display = "block"

function clickmoney(){
   money = money + 1;
    console.log(money);
    EL_money.innerHTML = money


}


function bet100(){
        if (money>99){
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
    if (money>199){
        money = money - 200;
        EL_money.innerHTML = money
        randomtall = Math.floor(Math.random () * 10);

        
    }
    randittall2()
}


function reveal(){
    EL_div.style.display = "block"
    console.log("reveal")
    EL_logo.style.display = "block"
    EL_menu.style.display = "none"
    EL_back.style.display = "block"
    document.getElementById('randomtall1').innerHTML = (randomtall)
    EL_game2.style.display = "none"

}

function menureveal(){
    EL_div.style.display = "none"
    EL_logo.style.display = "none"
    EL_menu.style.display = "block"
    EL_back.style.display = "none"
    EL_game2.style.display = "none"


}

function bet500(){
    if (money>499){
        money = money - 500
        EL_money.innerHTML = money
        randomtall = Math.floor(Math.random () * 10);
    }
    randittall3()
}


function randittall3(){
    console.log(randomtall);
    if(randomtall == 9){
        money = money + 1000
        EL_money.innerHTML = money
    }

}

function game2(){
    EL_menu.style.display = "none"
    EL_game2.style.display = "block"
    EL_back.style.display = "block"


}

EL_bet100.addEventListener('click', bet100)
EL_moneyButton.addEventListener('click', clickmoney)
EL_bet200.addEventListener('click',bet200)
EL_startgame.addEventListener('click',reveal)
EL_back.addEventListener('click',menureveal)
EL_bet500.addEventListener('click',bet500)
EL_startgame2.addEventListener('click',game2)



