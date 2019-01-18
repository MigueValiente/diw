function instalar(){
    for(let i= 0;i<= 100;i++){
        setTimeout(function(){
            $("#barra").css("width",i+"%");
        },i*100)
    }
}