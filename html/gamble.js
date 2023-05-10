
var money = 0

var EL_moneyButton = document.querySelector('#dollar_img')
var EL_money = document.querySelector('#money_amount')
var EL_bet100 = document.querySelector('#bet100')





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


EL_bet100.addEventListener('click', bet100)
EL_moneyButton.addEventListener('click', clickmoney)



