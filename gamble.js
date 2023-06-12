
var money = 0
var randomtall = Math.floor(Math.random () * 10);

var guessrandint = Math.floor(Math.random () * 10)
console.log(guessrandint)

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
var EL_guess = document.querySelector('#knapp')
var tilbakemelding = document.querySelector('#tilbakemelding')
var horselogo = document.querySelector('#horselogo')
var game3 = document.querySelector('#game3')
var startrace = document.querySelector('#startrace')
var horse1 = document.querySelector('#horse1')
var horse2 = document.querySelector('#horse2')
var horse3 = document.querySelector('#horse3')
var horse4 = document.querySelector('#horse4')
var bthrs1 = document.querySelector('#bthrs1')
var bthrs2 = document.querySelector('#bthrs2')
var bthrs3 = document.querySelector('#bthrs3')
var bthrs4 = document.querySelector('#bthrs4')
const slot = document.querySelector('#slotgif')
const slot2 = document.querySelector('#slotgif2')

const EL_moneylogo = document.querySelector('.moneylogo')

var chosenhorsebool = false

const EL_nochosen = document.querySelector('#errornochosen')



var raceactive1 = false

var horsespeed1 = 0
var horseposition1 = 0

var horsespeed2 = 0
var horseposition2 = 0

var horsespeed3 = 0
var horseposition3 = 0

var horsespeed4 = 0
var horseposition4 = 0

var race_end = false

var chosen_horse = 0




EL_game2.style.display = "none"
EL_div.style.display = "None"
EL_logo.style.display = "None"
EL_menu.style.display = "block"
EL_back.style.display = "none"
document.getElementById('randomtall1').style.display = "block"
game3.style.display = "none"


function clickmoney(){
   money = money + 1;
    
    updatemoney()


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
    EL_moneyButton.style.display = "none"
    slot.style.display = "none"
    slot2.style.display = "none"

}

function menureveal(){
    EL_div.style.display = "none"
    EL_logo.style.display = "block"
    EL_menu.style.display = "block"
    EL_back.style.display = "none"
    EL_game2.style.display = "none"
    game3.style.display = "none"
    EL_moneylogo.style.display = "block"
    slot.style.display = "block"
    slot2.style.display = "block"


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

    EL_back.style.top = (parseInt(top) + 1) + "px"
    EL_back.style.left
    slot.style.display = "none"
    slot2.style.display = "none"
    

}



console.log("guessrandint: " + guessrandint);
function guess(){
    console.log(EL_input.value)
    if (money > 499) {
        if (EL_input.value == 0) {
            tilbakemelding.innerHTML = "Du må gjette først"
            return
        }
            money = money - 500
            gjettet_tall = EL_input.value
            if (gjettet_tall == guessrandint) {
            tilbakemelding.innerHTML = 'du vinner 5000'
            money = money + 5000
            updatemoney()
            guessrandint = Math.floor(Math.random () * 10)
            console.log("guessranding: " + guessrandint)
            }else {
                console.log("Du taper")
                tilbakemelding.innerHTML = 'Feil du taper'
                updatemoney()
            }
        gjettet_tall = (EL_input.value)
    }   else {
        tilbakemelding.innerHTML = "Du har ikke nok penger"
    }
}



function horsegame(){
      EL_startgame.style.display = "none"
      EL_startgame2.style.display = "none"
      EL_moneyButton.style.display = "none"
      EL_menu.style.display = "none"
      game3.style.display = "block"
      EL_back.style.display = "block"
      slot.style.display = "none"
      slot2.style.display = "none"

    
}


function bethorse1(){
    if(money>399){
        chosenhorsebool = true
        money = money - 400
        updatemoney()
        chosen_horse = 1
    }   else {
        EL_nochosen.innerHTML = "You dont have enough money to bet"
    }
    stoprace()
}


function bethorse2(){
    if(money>399){
        chosenhorsebool = true
        money = money - 400
        updatemoney()
        chosen_horse = 2
    }   else {
        EL_nochosen.innerHTML = "You dont have enough money to bet"
    }
    stoprace()
}

function bethorse3(){
    if(money>399){
        chosenhorsebool = true
        money = money - 400
        updatemoney()
        chosen_horse = 3
    }   else {
        EL_nochosen.innerHTML = "You dont have enough money to bet"
    }

    
    stoprace()
}

function bethorse4(){
    if(money>399){
        chosenhorsebool = true
        money = money - 400
        updatemoney()
        chosen_horse = 4
    }   else {
        EL_nochosen.innerHTML = "You dont have enough money to bet"
    }
    stoprace()
}
function raceactive() {
    if (chosenhorsebool == true) {
        raceactive1 = true
        horseposition1 = 0
    }   else {
        EL_nochosen.innerHTML = "You have not bet on a horse"
    }
    

    

    horsespeed1 = Math.floor(Math.random() * 10) + 1;

    horseposition2 = 0
    horsespeed2 = Math.floor(Math.random() * 10) + 1;

    horseposition3 = 0
    horsespeed3 = Math.floor(Math.random() * 10) + 1;

    horseposition4 = 0
    horsespeed4 = Math.floor(Math.random() * 10) + 1;


}

function race(){
    

    
    if (raceactive1 == true) {
        console.log("testhorse")
       
        horseposition1  += horsespeed1 
        horse1.style.left = horseposition1 + 'px';
        console.log("horsepos1: ",horseposition1)

        horseposition2  += horsespeed2
        horse2.style.left = horseposition2 + 'px';
        console.log("horsepos2: ",horseposition2)

        horseposition3  += horsespeed3
        horse3.style.left = horseposition3 + 'px';
        console.log("horsepos3: ",horseposition3)

        horseposition4  += horsespeed4
        horse4.style.left = horseposition4 + 'px';
        console.log("horsepos4: ",horseposition4)

        stoprace()
    }
    

   
}


function stoprace(){
    if(horseposition1 > 1300){
        raceactive1 = false
        winhorse = 1
        race_end = true
        

    }else if(horseposition2 > 1300){
        raceactive1 = false
        winhorse = 2
        race_end = true
        
        
    }else if(horseposition3 > 1300){
        raceactive1 = false
        winhorse = 3
        race_end = true
        

    }else if(horseposition4 > 1300){
        raceactive1 = false
        winhorse = 4
        race_end = true
        

    }


    if (race_end == true) { // hvis race er ferdig kjør denne koden:
        if(chosen_horse == winhorse){
            money = money + 1000
            console.log("u bet correct horse")
            race_end = false
            console.log(chosen_horse)
            EL_money.innerHTML = money  
            
        }
    }

    
}

function updatemoney() {
    EL_money.innerHTML = "You have " + money + "$" 
    localStorage.moneyST = money
}

function load() {
    money = JSON.parse(localStorage.moneyST)
}

    setInterval(race, 10) 
    setInterval(updatemoney, 100)

EL_bet100.addEventListener('click', bet100)
EL_moneyButton.addEventListener('click', clickmoney)
EL_bet200.addEventListener('click',bet200)
EL_startgame.addEventListener('click',reveal)
EL_back.addEventListener('click',menureveal)
EL_bet500.addEventListener('click',bet500)
EL_startgame2.addEventListener('click',game2)
EL_guess.addEventListener('click',guess)
horselogo.addEventListener('click',horsegame)
startrace.addEventListener('click',raceactive)
bthrs1.addEventListener('click',bethorse1)
bthrs2.addEventListener('click',bethorse2)
bthrs3.addEventListener('click',bethorse3)
bthrs4.addEventListener('click',bethorse4)

load()