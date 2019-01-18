function mostrarMenu(){
    $("#menu").dropdown('toggle');
}

function actualizarPosicionMenu(){
    $("#menu").dropdown('update');
}

$(function() {
    $('#menuEventos').on('show.bs.dropdown', function () {
        alert("Se va mostrar el menu");
    })

    $('#menuEventos').on('shown.bs.dropdown', function () {
        alert("Se ha mostrado el menu");
    })

    $('#menuEventos').on('hide.bs.dropdown', function () {
        alert("Se va a quitar el menu");
    })

    $('#menuEventos').on('hidden.bs.dropdown', function () {
        alert("Se ha quitado el menu");
    })
});