let auxiliarOperando = "";
let operacionElegida = "";
let primerOperando = "";
let resultado;

function popularDisplay(event) {
    auxiliarOperando = `${auxiliarOperando}` + `${event.target.textContent}`;
    display.textContent = auxiliarOperando;
}

function elegirOperacion(event) {
    operacionElegida = `${event.target.textContent}`;
    primerOperando = auxiliarOperando;
    auxiliarOperando = "";
}

function ejecutarIgual() {
    if (operacionElegida === "+") {
        resultado = parseFloat(primerOperando) + parseFloat(auxiliarOperando);
    } else if (operacionElegida ==="-") {
        resultado = parseFloat(primerOperando) - parseFloat(auxiliarOperando);
    } else if (operacionElegida ==="*") {
        resultado = parseFloat(primerOperando) * parseFloat(auxiliarOperando);
    } else if (operacionElegida ==="/") {
        resultado = parseFloat(primerOperando) / parseFloat(auxiliarOperando);
    }
    display.textContent = `${resultado}`;
}

const display = document.querySelector("#display");
const digitos = document.querySelectorAll(".digitos button");
digitos.forEach((digito) => digito.addEventListener("click", popularDisplay));

const operaciones = document.querySelectorAll(".operacion");
operaciones.forEach((operacion) => operacion.addEventListener("click", elegirOperacion));

const igual = document.querySelector("#igual");
igual.addEventListener("click", ejecutarIgual);