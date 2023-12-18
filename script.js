var clickerPower = 1;
var cookiesCount = 0;

// DOM Elements
var cookieClicker = document.getElementById('btn-clicker');
var cookiesCounter = document.getElementById('cookie-display');

var clickerPowervalue = document.getElementById('clicker-power-value');
var clickerPowerQtd = document.getElementById('clicker-power-qtd');
var powerUpgrade = document.getElementById('upgrade-power');
var grandmaUpgrade = document.getElementById('grandma-upgrade');

clickerPowervalue = 50;
clickerPowerQtd = 0

cookieClicker.addEventListener("click", function () {
    cookiesCount += clickerPower;
    refreshCookieCount();
}); 

powerUpgrade.addEventListener("click", function() {
    if(cookiesCount >= clickerPowervalue){
        cookiesCount = cookiesCount - clickerPowervalue;
        refreshCookieCount();
        clickerPower = clickerPower + 1;
        clickerPowervalue = clickerPowervalue * 1.45;
        clickerPowervalue = Math.round(clickerPowervalue);
        clickerPowerQtd += 1;
        document.getElementById('clicker-power-value').innerHTML = " " + clickerPowervalue;
        document.getElementById('clicker-power-qtd').innerHTML = " " + clickerPowerQtd;
    }   else if(cookiesCount < clickerPowervalue){
        alert("You don't have enough cookies");
    }

});
function refreshCookieCount() {
    cookiesCounter.innerHTML = cookiesCount;
}


//var contador = 0;
var intervalo;

function contagem(){
  intervalo = setInterval(function(){
    contador++;
    console.log(contador);
  }, 2000);
}


function conta(){
  if(contador > 50)
    return;
  contador++;
  console.log(contador);
  setTimeout(function(){
    conta();
  }, 1000);
}

/* clearInterval(intervalo);
Gilson Klessner21:41
var contador = 0;
var intervalo;

function contagem(tempo, valor){
  intervalo = setInterval(function(){
    contador+= valor;
    console.log(contador);
  }, tempo);
}

// compravelha
//contagem(1000, 1);

// comprafazenda
//contagem(800, 2)
*/