let svgs = document.querySelectorAll(".svg");
let svgsocultar = document.querySelectorAll(".svg-ocultar");
let parrafos = document.querySelectorAll(".carta-respuesta");


// svgocultar.addEventListener("click" , ocultar);
svgs.forEach((svg, index) =>{
    svg.addEventListener("click" , () => respuesta(index) );
})
svgsocultar.forEach((svgocultar, index) =>{
    svgocultar.addEventListener("click" , () => ocultar(index) );
})


function respuesta(index) {
    parrafos[index].style.display="flex";
    svgs[index].style.display="none";
    svgsocultar[index].style.display="flex";
}
function ocultar(index) {
    parrafos[index].style.display="none";
    svgs[index].style.display="flex";
    svgsocultar[index].style.display="none";
}

