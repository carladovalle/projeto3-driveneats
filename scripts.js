function selecionarcomida (nomecomida) {
    const botaoselecionado = document.querySelector(".selecionado");
    if (botaoselecionado !== null) {
        botaoselecionado.classList.remove("selecionado")
    }
    nomecomida.classList.add("selecionado");
    comida = nomecomida.innerHTML;
}
function selecionarbebida (nomebebida) {
    bebida = nomebebida.innerHTML;
    const botaoselecionado = document.querySelector(".bebida").querySelector(".selecionado");
    if (botaoselecionado !== null) {
        botaoselecionado.classList.remove("selecionado")
    }
    nomebebida.classList.add("selecionado");
}
function selecionarsobremesa (nomesobremesa) {
    sobremesa = nomesobremesa.innerHTML;
    const botaoselecionado = document.querySelector(".sobremesa").querySelector(".selecionado");
    if (botaoselecionado !== null) {
        botaoselecionado.classList.remove("selecionado")
    }
    nomesobremesa.classList.add("selecionado");
}