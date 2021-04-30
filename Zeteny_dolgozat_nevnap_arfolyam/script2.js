function nevnap_datum() {
    let date = document.getElementById("bevitel1").value;
    fetch("https://api.nevnapok.eu/nap/" + date)
        .then(response => response.json())
        .then(datas => display1(datas, date));
}

function display1(datas, date) {
    console.log(datas[date]);
    let sz = ""
    for (elem of datas[date]) {
        sz += '<p class="arnyekolt">' + elem + '</p>';
    }
    document.getElementById("nevnap1").innerHTML = sz;
}

function nevnap_nev() {
    let personName = document.getElementById("bevitel2").value;
    fetch("https://api.nevnapok.eu/nev/" + personName)
        .then(response => response.json())
        .then(datas => display2(datas, personName));
}

function display2(datas, personName) {
    console.log(datas[personName]);
    let sz = ""
    for (elem of datas[personName]) {
        sz += '<p class="sajatNevnap">' + elem + '</p>';
    }
    document.getElementById("nevnap2").innerHTML = sz;
}

function random_joke() {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
        .then(response => response.json())
        .then(datas_joke => displayJoke(datas_joke));
}



function displayJoke(datas_joke) {
    console.log(datas_joke);
    let randomjoke = Math.floor(Math.random() * datas_joke.length);
    console.log(randomjoke);
    document.getElementById("vicc").innerHTML = '<p class="vicc">Randomvicc: ' + datas_joke[randomjoke].setup + ' ' + datas_joke[randomjoke].punchline;
}