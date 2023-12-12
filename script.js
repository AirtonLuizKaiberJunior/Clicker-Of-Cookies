var clickerPower = 1;
var cookiesCount = 0;

// DOM Elements
var cookieClicker = document.getElementById('btn-clicker');
var cookiesCounter = document.getElementById('cookie-display');
var clickerPowervalue = document.getElementById('clicker-power-value');
var clickerPowerQtd = document.getElementById('clicker-power-qtd');
var powerUpgrade = document.getElementById('upgrade-power');
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
        clickerPowervalue = clickerPowervalue * 1.33;
        clickerPowervalue = Math.round(clickerPowervalue);
        clickerPowerQtd += 1;
        document.getElementById('clicker-power-value').innerHTML = " " + clickerPowervalue;
        document.getElementById('clicker-power-qtd').innerHTML = " " + clickerPowerQtd;
    }
    else if(cookiesCount < clickerPowervalue){
        alert("You don't have enough cookies");
    }
});

function refreshCookieCount() {
    cookiesCounter.innerHTML = cookiesCount;
}