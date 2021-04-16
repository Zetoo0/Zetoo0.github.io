
//oldal - parameter 0 vagy 1 lesz
function kereses(oldal){
    fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
    .then(x => x.json())
    .then(datas => megjelenit(datas,oldal));
}



function megjelenit(datas,oldal){
    console.log(datas);

    let orszag = document.getElementById("orszag_"+oldal).value;
    let date = document.getElementById("date").value;
    let sz = ""
    sz += '<h2>' + datas[orszag].location + '</h2>';
    for (elem of datas[orszag].data){
        if (elem.date == date){
            sz += '<p> Összes eset millió főre:' + elem.total_cases_per_million + '</p>';
            sz += '<p> Új eset millió főre:' + elem.new_cases_per_million + '</p>';
            sz += '<p> Összes halálozás millió főre:' + elem.total_deaths_per_million + '</p>';
            sz += '<p> Új Halálozás millió főre:' + elem.new_deaths_per_million + '</p>';
        }
    }
    document.getElementById("talalat_"+oldal).innerHTML = sz;
}