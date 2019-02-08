$(function() {
    $("#alertMaker").on("click",function(){
        crearAlert();
    })
    
    // $("#botonCerrarAlerta").on("click",function (){
    //     $("#alertaEjemplo1").alert('close');
    // })
    
    // $('#alertaEjemplo3').on('close.bs.alert', function () {
    //     alert("se va a cerrar la alerta");
    // })

    // $('#alertaEjemplo3').on('closed.bs.alert', function () {
    //     alert("Se ha cerrado la alerta");
    // })
});

function crearAlert(){
    let divAlerta = $("<div class='alert alert-danger alert-dismissible fade show w-50' role='alert'></div>");
    let nuevaAlerta = $("<button type='button' class='close' data-dismiss='alert' aria-label='Close'></button>");
    let close = $("<span aria-hidden='true'>&times;</span>");
    
    nuevaAlerta.append(close);
    divAlerta.text("ESTO ES UNA ALERTA");
    divAlerta.append(nuevaAlerta);

    nuevaAlerta.on('closed.bs.alert', function () {
        cerrarAlerta();
    })

    $("#alertas").append(divAlerta);
    let contadorCreada = parseInt($("#alertasCreadas").html());
    $("#alertasCreadas").html(`${contadorCreada+1}`);
}

function cerrarAlerta(){
    let contadorCerradas = parseInt($("#alertasCerradas").html());
    $("#alertasCerradas").html(`${contadorCerradas+1}`);
}