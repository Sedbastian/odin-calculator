let auxiliarOperando = "";
let operacionElegida = "";
let primerOperando = "";
let resultado;

function popularDisplay (event) {
    auxiliarOperando = `${auxiliarOperando}` + `${event.target.textContent}`;
    display.textContent = auxiliarOperando;
}

function elegirOperacion (event) {
    operacionElegida = `${event.target.textContent}`;
    primerOperando = auxiliarOperando;
    auxiliarOperando = "";
}

function ejecutarIgual () {
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

function ejecutarBorrarTodo () {
    auxiliarOperando = "";
    primerOperando = "";
    operacionElegida = "";
}

function ejecutarBorrar () {
    auxiliarOperando = "";
    display.textContent = "_";
}

const display = document.querySelector("#display");
const digitos = document.querySelectorAll(".digitos button");
digitos.forEach((digito) => digito.addEventListener("click", popularDisplay));

const operaciones = document.querySelectorAll(".operacion");
operaciones.forEach((operacion) => operacion.addEventListener("click", elegirOperacion));

const igual = document.querySelector("#igual");
igual.addEventListener("click", ejecutarIgual);

const borrarTodo = document.querySelector("#borrarTodo");
borrarTodo.addEventListener("click", ejecutarBorrarTodo);

const borrar = document.querySelector("#borrar");
borrar.addEventListener("click", ejecutarBorrar);