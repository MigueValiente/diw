function instalar(){
    for(let i= 0;i<= 100;i++){
        setTimeout(function(){
            $("#barra").css("width",i+"%");
        },i*100)
    }
}

function instalar2(){
    for(let i= 0;i<= 100;i++){
        setTimeout(function(){
            $("#barra2").css("width",i+"%");
        },i*100)
    }
}

// function instalar2(){
//     let ancho = 10;
//     while(ancho<=100){
//         setTimeout(function(){
//             $("#barra2").css("width",(ancho)+"%");
//             ancho+= Math.random()*100;
//         },Math.random()*3000+100)
//     }
// }
