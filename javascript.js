let auxiliarOperando = "";
let operacionElegida = "";
let primerOperando = "";
let resultado;

function popularDisplay (event) {
    auxiliarOperando = `${auxiliarOperando}` + `${event.target.textContent}`;
    display.textContent = auxiliarOperando;
}

function elegirOperacion (event) {
    if (auxiliarOperando !== "" && primerOperando !== "") {
        ejecutarIgual();
        primerOperando = `${resultado}`;
        operacionElegida = `${event.target.textContent}`;
        auxiliarOperando = "";
        return;
    };
    operacionElegida = `${event.target.textContent}`;
    primerOperando = auxiliarOperando;
    auxiliarOperando = "";
}

function ejecutarIgual () {
            if (operacionElegida === "+") {
        resultado = parseFloat(primerOperando) + parseFloat(auxiliarOperando);
    } else  if (operacionElegida === "-") {
        resultado = parseFloat(primerOperando) - parseFloat(auxiliarOperando);
    } else  if (operacionElegida === "*") {
        resultado = parseFloat(primerOperando) * parseFloat(auxiliarOperando);
    } else  if (operacionElegida === "/") {
        resultado = parseFloat(primerOperando) / parseFloat(auxiliarOperando);
    };
    auxiliarOperando = "";
    primerOperando = "";
    display.textContent = `${resultado}`;
}

function ejecutarBorrarTodo () {
    auxiliarOperando = "";
    primerOperando = "";
    operacionElegida = "";
    display.textContent = "_";
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