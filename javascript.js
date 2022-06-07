let auxiliarOperando = "";
let operacionElegida = "";
let primerOperando = "";
let resultado = "";

function popularDisplay (digitoParaAgregar) {
    if (punto.disabled === true) {
        digitos.forEach ((numero) => numero.disabled = true);
    };
    if (digitoParaAgregar === ".") {
        punto.disabled = true;
    };
    auxiliarOperando = `${auxiliarOperando}` + `${digitoParaAgregar}`;
    display.textContent = auxiliarOperando;
    
};

function elegirOperacion (operacionParaElegir) {
    if (punto.disabled === true) {
        punto.disabled = false;
        digitos.forEach ((numero) => numero.disabled = false)
    }

    // Cuando hay un primer operando y nada mas:
    if (auxiliarOperando !== "" && primerOperando === "") {
        primerOperando = auxiliarOperando;
        auxiliarOperando = "";
        operacionElegida = operacionParaElegir;
        return;
    };

    // Cuando se quiere operar sobre un resultado previo:
    if (auxiliarOperando === "") {
        primerOperando = resultado;
        operacionElegida = operacionParaElegir;
        return;
    };
    
    // Cuando se quiere concatenar operaciones:
    if (auxiliarOperando !== "" && primerOperando !== "") {
        ejecutarIgual();
        primerOperando = resultado;
        operacionElegida = operacionParaElegir; 
        return;
    };
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
    primerOperando = "";
    operacionElegida = "";
    resultado = resultado.toFixed(2);
    display.textContent = `${resultado}`;
    
    if (punto.disabled === true) {
        punto.disabled = false;
        digitos.forEach ((numero) => numero.disabled = false);
    }
};

function ejecutarBorrarTodo () {
    auxiliarOperando = "";
    primerOperando = "";
    operacionElegida = "";
    display.textContent = "_";
    if (punto.disabled === true) {
        punto.disabled = false;
        digitos.forEach ((numero) => numero.disabled = false);
    };
};

function ejecutarBorrar () {
    auxiliarOperando = "";
    display.textContent = "_";
    if (punto.disabled === true) {
        punto.disabled = false;
        digitos.forEach ((numero) => numero.disabled = false);
    };
};

function ejecutarBackspace () {
    auxiliarOperando = auxiliarOperando.slice(0, auxiliarOperando.length - 1);
    if (!auxiliarOperando.includes(".")) {
        punto.disabled = false;
        digitos.forEach ((numero) => numero.disabled = false);
    };
    if (auxiliarOperando.slice(auxiliarOperando.length - 1) === ".") {
        digitos.forEach ((numero) => numero.disabled = false);
        punto.disabled = true;
    }
    if (auxiliarOperando === "") {
        display.textContent = "_";
        return;
    };
    display.textContent = auxiliarOperando;
};

function teclaApretada (event) {
    // Si la tecla es un digito o un punto (y no hay ya un punto): 
    if (parseInt(event.key) + 1 || (event.key === "." && !auxiliarOperando.includes("."))) {
        popularDisplay(event.key);
        return;
    };
    if (event.key === "+" || event.key === "-" || event.key === "*" || event.key ==="/") {
        elegirOperacion (event.key);
        return;
    };
    if (event.key === "=" || event.key === "Enter") {
        event.preventDefault();
        ejecutarIgual ();
        return;
    };
    if (event.key === "Backspace") {
        ejecutarBackspace ();
        return;
    };
    if (event.key === "Escape") {
        ejecutarBorrarTodo ();
        return;
    };
    if (event.key === "c" || event.key === "C" || event.key === "Delete") {
        ejecutarBorrar ();
        return;
    };
};

const display = document.querySelector("#display");
const punto = document.querySelector("#punto");

const digitos = document.querySelectorAll(".digitos button");
digitos.forEach((digito) => digito.addEventListener("click", 
    function () {popularDisplay (event.target.textContent)}));

const operaciones = document.querySelectorAll(".operacion");
operaciones.forEach((operacion) => operacion.addEventListener("click", 
    function () {elegirOperacion (event.target.textContent)}));

const igual = document.querySelector("#igual");
igual.addEventListener("click", ejecutarIgual);

const borrarTodo = document.querySelector("#borrarTodo");
borrarTodo.addEventListener("click", ejecutarBorrarTodo);

const borrar = document.querySelector("#borrar");
borrar.addEventListener("click", ejecutarBorrar);

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", ejecutarBackspace);

window.addEventListener("keydown", teclaApretada);