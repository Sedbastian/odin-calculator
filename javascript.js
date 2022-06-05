let auxiliarOperando = "";
let operacionElegida = "";
let primerOperando = "";
let resultado;

function popularDisplay (event) {
    if (punto.disabled === true) {
        digitos.forEach ((numero) => numero.disabled = true);
    };
    if (event.target.textContent === ".") {
        punto.disabled = true;
    };
    auxiliarOperando = `${auxiliarOperando}` + `${event.target.textContent}`;
    display.textContent = auxiliarOperando;
    
};

function elegirOperacion (event) {
    if (auxiliarOperando !== "" && primerOperando !== "") {
        ejecutarIgual();
        primerOperando = `${resultado}`;
        operacionElegida = `${event.target.textContent}`;
        auxiliarOperando = "";
        return;
    };
    operacionElegida = `${event.target.textContent}`;
    // Si primerOperando === "" es xq no se quiere operar sobre un resultado previo.
    if (primerOperando === "") {
        primerOperando = auxiliarOperando;
        auxiliarOperando = "";
        return;
    }
};

function ejecutarIgual () {
    if (auxiliarOperando === "" || primerOperando === "") {
        return;
    } else if (operacionElegida === "/" && auxiliarOperando === "0") {
        display.textContent = "Infinit8!";
        auxiliarOperando = "";
        return;
    } else if (operacionElegida === "+") {
        resultado = parseFloat(primerOperando) + parseFloat(auxiliarOperando);
    } else if (operacionElegida === "-") {
        resultado = parseFloat(primerOperando) - parseFloat(auxiliarOperando);
    } else if (operacionElegida === "*") {
        resultado = parseFloat(primerOperando) * parseFloat(auxiliarOperando);
    } else if (operacionElegida === "/") {
        resultado = parseFloat(primerOperando) / parseFloat(auxiliarOperando);
    };
    auxiliarOperando = "";
    primerOperando = `${resultado}`;
    display.textContent = `${resultado}`;
};

function ejecutarBorrarTodo () {
    auxiliarOperando = "";
    primerOperando = "";
    operacionElegida = "";
    display.textContent = "_";
};

function ejecutarBorrar () {
    auxiliarOperando = "";
    display.textContent = "_";
};

const display = document.querySelector("#display");
const digitos = document.querySelectorAll(".digitos button");
const punto = document.querySelector("#punto");
digitos.forEach((digito) => digito.addEventListener("click", popularDisplay));

const operaciones = document.querySelectorAll(".operacion");
operaciones.forEach((operacion) => operacion.addEventListener("click", elegirOperacion));

const igual = document.querySelector("#igual");
igual.addEventListener("click", ejecutarIgual);

const borrarTodo = document.querySelector("#borrarTodo");
borrarTodo.addEventListener("click", ejecutarBorrarTodo);

const borrar = document.querySelector("#borrar");
borrar.addEventListener("click", ejecutarBorrar);