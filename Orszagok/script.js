fetch("https://restcountries.eu/rest/v2/all")
    .then(x => x.json())
    .then(datas => display(datas));

function display(datas) {
    console.log(datas);
    let divide = document.querySelector("#ide");
    for (elem of datas) {
        let div1 = document.createElement("div");
        div1.setAttribute("class", "col-md-4");
        let div2 = document.createElement("div");
        div2.setAttribute("class", "keret");
        div1.appendChild(div2);
        divide.appendChild(div1);
        try {
            div2.innerHTML = '<h4>' + elem.name + '</h4>';
            div2.innerHTML += '<img src="' + elem.flag + '" class="kiskep">';
            div2.innerHTML += '<p>Népesség: ' + elem.population + '</p>';
            div2.innerHTML += '<p>Főváros' + elem.capital + '</p>';
        } catch {

        }
    }
}