let pizza;
let hamburguer;
let batatafria;

function selecionarpizza () {
    document.getElementById("pizza").style.borderColor = "green";
    document.getElementById("hamburguer").style.borderColor = "white";
    document.getElementById("batatafrita").style.borderColor = "white";
}
function selecionarhamburguer () {
    document.getElementById("pizza").style.borderColor = "white";
    document.getElementById("hamburguer").style.borderColor = "green";
    document.getElementById("batatafrita").style.borderColor = "white";
}
function selecionarpizza () {
    document.getElementById("pizza").style.borderColor = "white";
    document.getElementById("hamburguer").style.borderColor = "white";
    document.getElementById("batatafrita").style.borderColor = "green";
}
function pedido() {
    if (comidaescolhida && bebida && sobremesa) {
        document.querySelector(".seleciona").classList.add("escondido");
        document.querySelector(".fecharpedido").classList.remove("escondido");
    }
  }
function preçototal () {
    const preçototal = preçocomida + preçobebida + preçosobremesa;
}
function fecharpedido() {
    const uri = `Olá, gostaria de fazer o pedido:\n
            - Prato: ${prato} \n
            - Bebida: \n
            - Sobremesa: \n\n
            Total: R$ ` 

    const uriEncoded = encodeURIComponent(uri);
    window.open(`https://wa.me/5521963129999?text=${uriEncoded}`, `_blank`);
}