$(document).ready(function() {
    // Ocultar imagen
    $("#btnOcultar").click(function() {
        $("#imagen").hide();
        $("#titulo").text("¡No tenemos ninguna imagen!");
    });
    
    // Mostrar imagen
    $("#btnMostrar").click(function() {
        $("#imagen").show();
        $("#titulo").text("¡Mirá la siguiente imagen!");
    });
});