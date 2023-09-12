document.getElementById("linkwelcome").addEventListener("click", function() {
    ocultarTodosLosDiv();
    document.getElementById("welcome").style.display = "block";
});

document.getElementById("linkproyects").addEventListener("click", function() {
    ocultarTodosLosDiv();
    document.getElementById("proyects").style.display = "block";
});


document.getElementById("linkinformation").addEventListener("click", function() {
    ocultarTodosLosDiv();
    document.getElementById("information").style.display = "block";
});


function ocultarTodosLosDiv() {
    var divs = document.querySelectorAll(".public");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }
}