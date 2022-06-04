let primerOperando = "";

function popularDisplay(event) {
    primerOperando = `${primerOperando}` + `${event.target.textContent}`;
    display.textContent = primerOperando;
}

const display = document.querySelector("#display");
const digitos = document.querySelectorAll(".digitos div");
digitos.forEach((digito) => digito.addEventListener("click", popularDisplay));
