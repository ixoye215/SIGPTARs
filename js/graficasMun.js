var formulario = document.getElementById('formulario');
var tituloGrafica = document.getElementById('tituloGraficaM');
var municipioGlobal;

if(window.grafica==null){
    entrada();
}

function entrada(){
    municipioGlobal = 'Amacuzac';
    $.ajax({
    url: './datos/PTARsActivasMunicipal.csv',
    dataType: 'text',
    }).done(graficarMunicipio);
}
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var datos = new FormData(formulario);
    var municipio = datos.get('municipio');
    municipioGlobal = municipio;
    tituloGrafica.innerHTML = 'Núm. De PTARS activas en '+municipioGlobal+'\n <span class="baseSina">(base SINA)</span>';
    $.ajax({
    url: '../datos/PTARsActivasMunicipal.csv',
    dataType: 'text',
    }).done(graficarMunicipio);
});

function graficarMunicipio(data) {
    var datos = data.split(/\r?\n|\r/);

    let datosTitulos = [];
    let datosPtars = [];
    let auxiliarTitulos;
    let auxiliarPtars;

    let colorBarra = [];
    let colorBorde = [];

    for(var i=1; i<datos.length-1;i++){

        let auxiliarMunicipio = datos[i].split(',');
        if(municipioGlobal == auxiliarMunicipio[0]){
            auxiliarTitulos = datos[0].split(',');
            auxiliarPtars = datos[i].split(',');
            for (let index = 1; index < auxiliarTitulos.length; index++) {
                datosTitulos.push(auxiliarTitulos[index]);
                datosPtars.push(auxiliarPtars[index]);
            }
        }

        colorBarra.push('rgba(54, 162, 235, 0.2)');
        colorBorde.push('rgba(54, 162, 235, 1)');
    }

    
    if($(window).width() > 500){
        var ctx = document.getElementById('myChartM2').getContext("2d");
    }else{
        var ctx = document.getElementById('myChartM').getContext("2d");
    }
    if (window.grafica) {
        window.grafica.clear();
        window.grafica.destroy();
    }
    window.grafica = new Chart(ctx, {
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
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'Núm. De PTARS activas en '+municipioGlobal+'\n base SINA'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        /*Con el callback de abajo ponemos solo enteros en las graficas*/
                        callback: function(value) {if (value % 1 === 0) {return value;}}
                    }
                }]
            }
        }
    });

    
}
