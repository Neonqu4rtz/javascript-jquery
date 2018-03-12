$("div").ready (function () {
$("#anuncio").text("Click! Para cambiar de color")
.hide()
.fadeIn(3000)
.width(200)
.height(200)
});



$("div").on("click", function() { 
 colores = ["blue", "yellow", "red", "grey", "green",  "orange", "purple"];
color = colores[Math.floor(Math.random() * colores.length)];


    $(this).css("background-color", color);
    
    });



 
