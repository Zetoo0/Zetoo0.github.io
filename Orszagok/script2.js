let datas0 = []

fetch("https://restcountries.eu/rest/v2/all")
    .then(x => x.json())
    .then(datas => display(datas))

let select = document.getElementById("orszagok");

function display(datas) {
    console.log(datas);
    datas0 = datas;
    let db = 0;

    for (elem of datas) {
        let option = document.createElement("option")
        select.appendChild(option);
        option.innerHTML = elem.name;
        option.setAttribute("value", db);
        db++;
    }
    select.addEventListener("change", changeCountry);
}
let divide = document.getElementById("ide");
let h4 = document.createElement("h4");
divide.appendChild(h4);
let img = document.createElement("img");
divide.appendChild(img);
img.setAttribute("class", "nagykep");
let hr = document.createElement("hr");
divide.appendChild(hr);
let p1 = document.createElement("p");
divide.appendChild(p1);
let p2 = document.createElement("p");
divide.appendChild(p2);
let p3 = document.createElement("p");
divide.appendChild(p3);
let p4 = document.createElement("p");
divide.appendChild(p4);


function changeCountry(datas) {

    let divide = document.getElementById("ide");
    let countrynumber = select.value;
    //console.log(countrynumber);
    h4.innerHTML = datas0[countrynumber].name;
    img.setAttribute("src", datas0[countrynumber].flag);
    p1.innerHTML = 'Népesség: ' + datas0[countrynumber].population + ' fő';
    p2.innerHTML = 'Főváros: ' + datas0[countrynumber].capital;
    for (elem of datas0[countrynumber].timezones) {
        p3.innerHTML = 'Időzóna: ' + elem;
    }
    for (elem of datas0[countrynumber].languages) {
        p4.innerHTML = 'Az országban beszélt nyelv(ek): ' + elem.name + " ";
    }

}