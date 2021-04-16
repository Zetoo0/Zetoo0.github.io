function kereses(){
    fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
    .then(x => x.json())
    .then(datas => megjelenit(datas));
}

function megjelenit(datas){
    console.log(datas);
    const tablediv = document.getElementById("tablazat");
    const orszag = document.getElementById("orszag").value;

    const table = document.createElement("table");
    tablediv.appendChild(table);
    table.setAttribute("class","table table-hover");
    const thead = document.createElement("thead");
    thead.setAttribute("class","thead-light");
    const thr = document.createElement("tr");
    const thd_0 = document.createElement("td");
    const thd_1 = document.createElement("td");
    thd_0.innerHTML = "Date";
    thd_1.innerHTML = "Total deaths/million";
    thr.appendChild(thd_0);
    thr.appendChild(thd_1);
    thead.appendChild(thr);
    table.appendChild(thead);

    for (elem of datas[orszag].data){
        const tr = document.createElement("tr");
        const td_date = document.createElement("td");
        td_date.innerHTML = elem.date;
        tr.appendChild(td_date);

        const td_total_deaths_per_million = document.createElement("td");
        td_total_deaths_per_million.innerHTML = elem.total_deaths_per_million;
        tr.appendChild(td_total_deaths_per_million);
        table.appendChild(tr);
    }
}
