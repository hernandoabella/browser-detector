/**
 * detectarNavegador() - detecta el navegador actual y muestra el nombre en un elemento HTML
 *
 */
const detectarNavegador = () => {
    // Obtiene el agente de usuario del navegador en minúsculas
    let agente = navigator.userAgent.toLowerCase();
    // Asume que el navegador es "otro"
    let navegador = "otro";

    // Verifica si el agente de usuario contiene subcadenas específicas
    if (agente.indexOf("edge") > -1) {
        navegador = "edge";
    } else if (agente.indexOf("edg/") > -1) {
        navegador = "edge";
    } else if (agente.indexOf("opr") > -1 && !!window.opr) {
        navegador = "opera";
    } else if (agente.indexOf("chrome") > -1 && !!window.chrome) {
        navegador = "chrome";
    } else if (agente.indexOf("trident") > -1) {
        navegador = "ie";
    } else if (agente.indexOf("firefox") > -1){
        navegador = "firefox";
    } else if (agente.indexOf("safari") > -1) {
        navegador = "safari";
    }

    // Convierte la primera letra del nombre del navegador a mayúsculas
    document.querySelector('.navegador').innerHTML = navegador[0].toUpperCase() + navegador.slice(1);

    // Selecciona el logo correspondiente al navegador
    const logo = document.querySelector(`.logos .${navegador}`);

    // Muestra el logo
    if(logo !== ""){  
        logo.style.opacity = "1";
    }
}
// Invoca la función detectarNavegador()
detectarNavegador();