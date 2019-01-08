$(function() {
    $('#carousel5').carousel({
        interval: 100,
        pause:false
    })
});

function moverCarousel(){
    $('#carousel7').carousel('cycle');
}

function pararCarousel(){
    $('#carousel7').carousel('pause');
}

function moverXCarousel(){
    $('#carousel7').carousel(2);
}

function moverAnteriorCarousel(){
    $('#carousel7').carousel('prev');
}

function moverSiguienteCarousel(){
    $('#carousel7').carousel('next');
}

$(function() {
    $('#carousel7').on('slide.bs.carousel', function (event) {
        alert(
            "Se va a mostrar la siguiente imagen"+
            "\n Direccion:"+event.direction+
            "\n RelatedTarget:"+event.relatedTarget.id+
            "\n From:"+event.from +
            "\n To:"+event.to
        )
    })

    $('#carousel7').on('slid.bs.carousel', function (event) {
       alert(
            "Se ha mostrado la imagen"+
            "\n Direccion:"+event.direction+
            "\n RelatedTarget:"+event.relatedTarget.id+
            "\n From:"+event.from +
            "\n To:"+event.to
        )
    })
});