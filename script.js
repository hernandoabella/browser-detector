let agente = navigator.userAgent.toLocaleLowerCase();  
let navegador;  

if (agente.indexOf("edge") > -1) {
    console.log("MS Edge");
} else if (agente.indexOf("edg/") > -1) {
    console.log("Edge ( chromium based)");
    navegador = "edge";
} else if (agente.indexOf("opr") > -1 && !!window.opr) {
    console.log("Opera");
    navegador = "opera";
} else if (agente.indexOf("chrome") > -1 && !!window.chrome) {
    console.log("Chrome");
    navegador = "chrome";
} else if (agente.indexOf("trident") > -1) {
    console.log("MS IE");
} else if (agente.indexOf("firefox") > -1){
    console.log("Mozilla Firefox");
    navegador = "firefox";
} else if (agente.indexOf("safari") > -1) {
    console.log("Safari");
    navegador = "safari";
} else {
    alert("Estás utilizando otro navegador");
}

// Convierte la primera letra de la salida en mayúsculas
document.querySelector('.navegador').innerHTML = navegador[0].toUpperCase() + navegador.slice(1);

const logo = document.querySelector(`.logos .${navegador}`);

if(logo !== ""){  
    logo.style.opacity = "1";
}