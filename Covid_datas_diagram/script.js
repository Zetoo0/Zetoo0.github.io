let country1 = '';
let country2 = '';
let country3 = '';


function adatlekérdezés() {
    country1 = document.getElementById("country1").value;
    country2 = document.getElementById("country2").value;
    country3 = document.getElementById("country3").value;

    if (country1 == "" || country2 == "" || country3 == "" || country1.valueOf != 3 || country2.valueOf != 3 || country3.valueOf != 3) {
        document.getElementById("summary").innerHTML = '<p style="color:red">Az ország kódját meg kell adni és nem áll többől mint 3 betű!</p>';
    } else {
        fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
            .then(x => x.json())
            .then(datas => drawdiagram(datas));
    }

}

function drawdiagram(datas) {
    //console.log(datas);
    let sz = "";
    //country 1 datas
    country1 = document.getElementById("country1").value;
    sz += '<h2>' + datas[country1].location + '</h2>';
    let xTengely1 = [];
    let yTengely1 = [];
    for (elem of datas[country1].data) {
        xTengely1.push(elem.date);
        yTengely1.push(elem.total_deaths_per_million);
    }

    //country 2 datas
    country2 = document.getElementById("country2").value;
    sz += '<h2>' + datas[country2].location + '</h2>';
    let xTengely2 = [];
    let yTengely2 = [];
    for (elem of datas[country2].data) {
        xTengely2.push(elem.date);
        yTengely2.push(elem.total_deaths_per_million);
    }

    //country 3 datas
    country3 = document.getElementById("country3").value;
    sz += '<h2>' + datas[country3].location + '</h2>';
    let xTengely3 = [];
    let yTengely3 = [];
    for (elem of datas[country3].data) {
        xTengely3.push(elem.date);
        yTengely3.push(elem.total_deaths_per_million);
    }

    document.getElementById("summary").innerHTML = sz;

    let trace1 = {
        x: xTengely1,
        y: yTengely1,
        name: datas[country1].location,
        type: 'scatter'
    };

    let trace2 = {
        x: xTengely2,
        y: yTengely2,
        name: datas[country2].location,
        type: 'scatter'
    };

    let trace3 = {
        x: xTengely3,
        y: yTengely3,
        name: datas[country3].location,
        type: 'scatter'
    };

    let layout = {
        title: {
            text: 'Covid halálozások',
            font: {
                family: 'Courier New, monospace',
                size: 24
            },
            xref: 'paper',
            x: 0.05,
        },
        xaxis: {
            title: {
                text: 'Dátum',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Halottak száma',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            }
        }
    };

    let diagrData = [trace1, trace2, trace3];
    Plotly.newPlot('diagr', diagrData, layout);


}