$.ajax({
    url: './datos/PTARsActivasEstatal.csv',
    dataType: 'text',
}).done(graficarEstatal);

function graficarEstatal(data) {
    var datos = data.split(/\r?\n|\r/);

    var datosTitulos = [];
    var datosPtars = [];
    let auxiliarTitulos;
    let auxiliarPtars;

    let colorBarra = [];
    let colorBorde = [];

    for(var i=1; i<datos.length-1;i++){
        auxiliarTitulos = datos[i].split(',');
        datosTitulos.push(auxiliarTitulos[0]);

        auxiliarPtars = datos[i].split(',');
        datosPtars.push(auxiliarPtars[1]);

        colorBarra.push('rgba(54, 162, 235, 0.2)');
        colorBorde.push('rgba(54, 162, 235, 1)');
    }

    if($(window).width() > 500){
        var ctx = document.getElementById('myChartE2').getContext("2d");
    }else{
        var ctx = document.getElementById('myChartE').getContext("2d");
    }
    /* var ctx = document.getElementById('myChartE'); */
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: datosTitulos,
            datasets: [{
                label: 'No. de PTARs',
                data: datosPtars,
                backgroundColor: colorBarra,
                borderColor: colorBorde,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display:false,
                text: 'PTARs en el Estado de Morelos 2005-2018'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}