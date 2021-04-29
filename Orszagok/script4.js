let datas0 = [];
let randomroll = -1;

fetch("https://restcountries.eu/rest/v2/all")
    .then(x => x.json())
    .then(datas => store(datas));

function store(datas) {
    console.log(datas);
    datas0 = datas;
}

let divContainer = document.getElementById("fodiv");
let btStart = document.createElement("button");
divContainer.appendChild(btStart);
btStart.innerHTML = "Start";
btStart.addEventListener("click", roll);
btStart.setAttribute("class", "btn btn-primary");

function randomCountry() {
    return Math.floor(Math.random() * datas0.length);
}




function roll() {
    randomroll = randomCountry();
    console.log(randomroll);
    capitalName = document.getElementById("divCapital");
    let sz = '<h4>Capital city: ' + datas0[randomroll].capital + '</h4>';
    let kep = '<img src="' + datas0[randomroll].flag + '" class="kiskep">';
    let flagDiv = document.getElementById("divFlag");
    flagDiv.innerHTML = kep;
    sz += '<input type="text" id="bevitel" class="form-control-sm">';
    sz += '<button class="btn btn-primary"  id="checker">Check</button>';
    capitalName.innerHTML = sz;
    let checker = document.getElementById("checker");
    checker.addEventListener("click", check);
}

let goodAnswersNum = 0;
let badAnswersNum = 0;
let correctAudio = document.getElementById("correct");
let incorrectAudio = document.getElementById("incorrect");

function check() {

    let goodAnswersDiv = document.getElementById("IsGoodAnswersScore");
    let badAnswersDiv = document.getElementById("IsNotGoodAnswersScore");
    let scoreDiv = document.getElementById("divScore");
    //console.log("IsCheckGood");
    let summ = document.getElementById("divSummary");
    let countryPopulation = document.getElementById("bevitel").value;
    if (datas0[randomroll].population == countryPopulation || (datas0[randomroll].population / countryPopulation) * 100 >= 90) {
        summ.innerHTML = '<h4>Gratulálok, a helyes megoldás: ' + datas0[randomroll].population + '</h4>';
        goodAnswersNum++;
        goodAnswersDiv.innerHTML = "Eltalált városok száma: " + goodAnswersNum;
        badAnswersDiv.innerHTML = "Rossz válaszok száma: " + badAnswersNum;
        correctAudio.play();
    } else {
        summ.innerHTML = '<h4>Nem jó, a helyes megoldás: ' + datas0[randomroll].population + '</h4>';
        badAnswersNum++;
        goodAnswersDiv.innerHTML = "Eltalált városok száma: " + goodAnswersNum;
        badAnswersDiv.innerHTML = "Rossz válaszok száma: " + badAnswersNum;
        incorrectAudio.play();
    }
}