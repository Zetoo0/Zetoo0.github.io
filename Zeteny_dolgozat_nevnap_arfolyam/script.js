fetch("https://freegeoip.app/json/")
    .then(x => x.json())
    .then(datas_geo => foldrajzi(datas_geo));



function foldrajzi(datas_geo) {
    console.log(datas_geo);
    document.getElementById("subt1").innerHTML = '<p class="kek">Földrajzi szélesség: ' + datas_geo.latitude + '</p><br>';
    document.getElementById("subt1").innerHTML += '<p class="sajatHosszusag">Földrajzi Hosszúság: ' + datas_geo.longitude + '</p>';
}
//--------------------------------------------------
fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then(x => x.json())
    .then(datas_currency_usd => arfolyam_usd(datas_currency_usd));

function arfolyam_usd(datas_currency_usd) {
    console.log(datas_currency_usd);
    document.getElementById("subt2").innerHTML = '<p>1 USD = ' + datas_currency_usd.rates.HUF + ' HUF (Ft)</p><br>';
}

fetch("https://api.exchangerate-api.com/v4/latest/EUR")
    .then(x => x.json())
    .then(datas_currency_eur => arfolyam_eur(datas_currency_eur));

function arfolyam_eur(datas_currency_eur) {
    console.log(datas_currency_eur);
    document.getElementById("subt2").innerHTML += '<p class="sajatEur">1 EUR = ' + datas_currency_eur.rates.HUF + ' HUF (Ft)</p>';
}