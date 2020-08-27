var contenidot = document.getElementById('contenidot');
var datosglobales;

$.ajax({
    url: './datos/PtarsTotales.csv',
    dataType: 'text',
}).done(graficarTabla);

function graficarTabla(data) {
    var datos = data.split(/\r?\n|\r/);
    datosglobales = datos;
    contenidot.innerHTML = '';

    for(let indice=1; indice<datos.length-1; indice++){
        let fila = datos[indice].split(',');
        /* console.log(fila[0]); */
        var auxiliar_id = fila[0]+'_'+fila[1];
        contenidot.innerHTML += `
            <tr>
                <th><a data-id="${auxiliar_id}" class="" id="btnPDF"><i class="far fa-file-pdf fa-2x"></i></a></th>
                <td>${ fila[0] }</td>
                <td>${ fila[1] }</td>
                <td>${ fila[2] }</td>
                <td>${ fila[3] }</td>
            </tr>   
        
        `;
    }
}

//Boton para poder ver distinto pdf segun la seleccion
$(document).on("click",'#btnPDF', function(e) {
    e.preventDefault();
    
    //Aqui creo una variable para obtenerlo del archivo de listatrabajadores
    var id = $(this).data("id");
    console.log('me diste un click para cambiar el pdf ' + id);

    //Cambio la variable src por el pdf seleccionado
    var pdfid = document.getElementById('pdf');
    pdfid.innerHTML = `
    <embed class="vistapdf" src="pdfs/`+id+`.pdf" width="100vh" height="100vh" />
    `;
});

//Boton para ver Todas las PTARs en la tabla
$(document).on("click",'#btnTodas', function(e) {
    e.preventDefault();
    //Para que el boton se cambie a otro color cuando sea presionado
    document.getElementById('btnTodas').className = "btn btn-secondary btn-sm";
    document.getElementById('btnActivas').className = "btn btn-primary btn-sm";
    document.getElementById('btnNoperando').className = "btn btn-primary btn-sm";
    document.getElementById('btnVisita').className = "btn btn-primary btn-sm";

    console.log('me diste un click para ver todas las PTARs ');
    input = document.getElementById("myInput");
    input.value = '';
    contenidot.innerHTML = '';

    for(let indice=1; indice<datosglobales.length-1; indice++){
        let fila = datosglobales[indice].split(',');
        /* console.log(fila[0]); */
        var auxiliar_id = fila[0]+'_'+fila[1];
        contenidot.innerHTML += `
            <tr>
                <th><a data-id="${auxiliar_id}" class="" id="btnPDF"><i class="far fa-file-pdf fa-2x"></i></a></th>
                <td>${ fila[0] }</td>
                <td>${ fila[1] }</td>
                <td>${ fila[2] }</td>
                <td>${ fila[3] }</td>
            </tr>   
        
        `;
    }
});

//Boton para ver Todas las PTARs Activas en la tabla
$(document).on("click",'#btnActivas', function(e) {
    e.preventDefault();

    document.getElementById('btnTodas').className = "btn btn-primary btn-sm";
    document.getElementById('btnActivas').className = "btn btn-secondary btn-sm";
    document.getElementById('btnNoperando').className = "btn btn-primary btn-sm";
    document.getElementById('btnVisita').className = "btn btn-primary btn-sm";

    console.log('me diste un click para ver todas las PTARs Activas ');
    input = document.getElementById("myInput");
    input.value = '';
    contenidot.innerHTML = '';

    for(let indice=1; indice<datosglobales.length-1; indice++){
        let fila = datosglobales[indice].split(',');
        /* console.log(fila[0]); */
        if(fila[3]=='Activa'){
            var auxiliar_id = fila[0]+'_'+fila[1];
            contenidot.innerHTML += `
                <tr>
                    <th><a data-id="${auxiliar_id}" class="" id="btnPDF"><i class="far fa-file-pdf fa-2x"></i></a></th>
                    <td>${ fila[0] }</td>
                    <td>${ fila[1] }</td>
                    <td>${ fila[2] }</td>
                    <td>${ fila[3] }</td>
                </tr>   
            
            `;
        }
        
    }
});

//Boton para ver Todas las PTARs No operando en la tabla
$(document).on("click",'#btnNoperando', function(e) {
    e.preventDefault();

    document.getElementById('btnTodas').className = "btn btn-primary btn-sm";
    document.getElementById('btnActivas').className = "btn btn-primary btn-sm";
    document.getElementById('btnNoperando').className = "btn btn-secondary btn-sm";
    document.getElementById('btnVisita').className = "btn btn-primary btn-sm";

    console.log('me diste un click para ver todas las PTARs Fuera de operacion ');
    input = document.getElementById("myInput");
    input.value = '';
    contenidot.innerHTML = '';

    for(let indice=1; indice<datosglobales.length-1; indice++){
        let fila = datosglobales[indice].split(',');
        /* console.log(fila[0]); */
        if(fila[3]!='Activa'){
            var auxiliar_id = fila[0]+'_'+fila[1];
            contenidot.innerHTML += `
                <tr>
                    <th><a data-id="${auxiliar_id}" class="" id="btnPDF"><i class="far fa-file-pdf fa-2x"></i></a></th>
                    <td>${ fila[0] }</td>
                    <td>${ fila[1] }</td>
                    <td>${ fila[2] }</td>
                    <td>${ fila[3] }</td>
                </tr>   
            
            `;
        }
        
    }
});

//Boton para ver las PTAR de visita de campo
$(document).on("click",'#btnVisita', function(e) {
    e.preventDefault();

    document.getElementById('btnTodas').className = "btn btn-primary btn-sm";
    document.getElementById('btnActivas').className = "btn btn-primary btn-sm";
    document.getElementById('btnNoperando').className = "btn btn-primary btn-sm";
    document.getElementById('btnVisita').className = "btn btn-secondary btn-sm";

    console.log('me diste un click para ver todas las PTARs Fuera de operacion ');
    input = document.getElementById("myInput");
    input.value = '';
    contenidot.innerHTML = '';

    for(let indice=1; indice<datosglobales.length-1; indice++){
        let fila = datosglobales[indice].split(',');
        /* console.log(fila[0]); */

        if(fila[1]=='La Gachupina' || fila[1]=='Acapantzingo' || fila[1]=='Lomas de Ahuatlán' || fila[1]=='Chipitlán' || fila[1]=='El Rayo' || fila[1]=='Xochitepec' || fila[1] =='Cuautla' || fila[1]=='Regional Jojutla' || fila[1]=='El Texcal'){
            var auxiliar_id = fila[0]+'_'+fila[1];
                contenidot.innerHTML += `
                    <tr>
                        <th><a data-id="${auxiliar_id}" class="" id="btnPDF"><i class="far fa-file-pdf fa-2x"></i></a></th>
                        <td>${ fila[0] }</td>
                        <td>${ fila[1] }</td>
                        <td>${ fila[2] }</td>
                        <td>${ fila[3] }</td>
                    </tr>   
                
                `;
        }
        
        
    }
});

//Buscar
function myFunction() {
    document.getElementById('btnTodas').className = "btn btn-primary";
    document.getElementById('btnActivas').className = "btn btn-primary";
    document.getElementById('btnNoperando').className = "btn btn-primary";
    // Declare variables
    var input, filter, table, tr, td, i, txtValue, txtValue2;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    filter = filter.trim();

    //Checa si no lo busca por codigo sino significa que es por nombre
    if(filter.charAt(0)=='1' || filter.charAt(0)=='0' || filter.charAt(0)=='2' || filter.charAt(0)=='3' || filter.charAt(0)=='4' || filter.charAt(0)=='5' || filter.charAt(0)=='6' || filter.charAt(0)=='7' || filter.charAt(0)=='8' || filter.charAt(0)=='9'){
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        
      }
    }else{
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            
            if (td) {
            txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        
        } 
    }
    
}

//Funcion para llenar la tabla
function llenarTabla(){
    contenidot.innerHTML = '';

    for(let indice=1; indice<datosglobales.length-1; indice++){
        let fila = datosglobales[indice].split(',');
        /* console.log(fila[0]); */
        var auxiliar_id = fila[0]+'_'+fila[1];
        contenidot.innerHTML += `
            <tr>
                <th><button data-id="${auxiliar_id}" class="btn btn-danger btn-block" id="btnPDF"><i class="far fa-file-pdf"></i></button></th>
                <td>${ fila[0] }</td>
                <td>${ fila[1] }</td>
                <td>${ fila[2] }</td>
                <td>${ fila[3] }</td>
            </tr>   
        
        `;
    }
}