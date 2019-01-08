$(function () {
    $('#list-tab2    a:last-child').tab('show')
})

$(function() {
    $('#list-tab2 a').on('show.bs.tab', function (e) {
        alert("Se va mostrar la pestaña"+e.target);
    })

    $('#list-tab2 a').on('shown.bs.tab', function (e) {
        alert("Se ha mostrado la pestaña"+e.target);
    })

    $('#list-tab2 a').on('hide.bs.tab', function (e) {
        alert("Se va a quitar la pestaña actual"+ e.relatedTarget);
    })

    $('#list-tab2 a').on('hidden.bs.tab', function (e) {
        alert("Se ha quitado la pestaña actual"+ e.relatedTarget);
    })
});