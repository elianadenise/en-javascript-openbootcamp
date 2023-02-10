const h_texto = document.getElementById("h-texto");
h_texto.addEventListener("cambio_texto", evento => {
    console.log(evento);
    h_texto.innerText = evento.detail.texto;
    h_texto.style.color = evento.detail.color;
});

function cambiartexto(nuevo_texto, color) {
    const evento = new CustomEvent("cambio_texto", {
        detail: {
            texto: nuevo_texto,
            color: color,
        }
    });
    h_texto.dispatchEvent(evento);
}
console.log(cambiartexto);