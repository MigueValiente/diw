function cerrarAlerta(){
    $("#alertaEjemplo1").alert('close');
}

function destruirAlerta(){
    $("#alertaEjemplo2").alert('dispose');
}

$(function() {
    $('#alertaEjemplo3').on('close.bs.alert', function () {
        alert("se va a cerrar la alerta");
    })

    $('#alertaEjemplo3').on('closed.bs.alert', function () {
        alert("Se ha cerrado la alerta");
    })
});