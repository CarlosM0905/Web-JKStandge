$(document).ready(function () {


    document.getElementById("lista-stands").addEventListener("mousedown", function (event) {
        console.log(event);
        if (event.which == 3) {
            alert("Derechos Reservados - JKStandge 2019");
        }
    });

});