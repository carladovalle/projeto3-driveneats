let prato;
let beber;
let doce;
let valorcomida;
let valorbebida;
let valorsobremesa;
let valortotal;

function selecionarcomida (elemento) {
    console.log(elemento);
    const botaoselecionado = document.querySelector(".comida").querySelector(".selecionado");
    const checkcomida = document.querySelector(".comida").querySelector(".selecionado .icone");
    if (botaoselecionado !== null) {
        checkcomida.classList.add("escondido");
        botaoselecionado.classList.remove("selecionado");
        console.log(checkcomida);
    }
    console.log(checkcomida);
    elemento.classList.add("selecionado");
    document.querySelector(".comida").querySelector(".selecionado .icone").classList.remove("escondido");
    comidaescolhida = elemento.innerHTML;
    prato = (elemento);
    pedido();
}
function selecionarbebida (elemento) {
    console.log(elemento);
    const botaoselecionado = document.querySelector(".bebida").querySelector(".selecionado");
    const checkbebida = document.querySelector(".bebida").querySelector(".selecionado .icone");
    if (botaoselecionado !== null) {
        checkbebida.classList.add("escondido");
        botaoselecionado.classList.remove("selecionado");
        console.log(checkbebida);
    }
    console.log(checkbebida);
    elemento.classList.add("selecionado");
    document.querySelector(".bebida").querySelector(".selecionado .icone").classList.remove("escondido");
    bebidaescolhida = elemento.innerHTML;
    beber = (elemento);
    pedido();
}
function selecionarsobremesa (elemento) {
    console.log(elemento);
    const botaoselecionado = document.querySelector(".sobremesa").querySelector(".selecionado");
    const checksobremesa = document.querySelector(".sobremesa").querySelector(".selecionado .icone");
    if (botaoselecionado !== null) {
        checksobremesa.classList.add("escondido");
        botaoselecionado.classList.remove("selecionado");  
    }
    elemento.classList.add("selecionado");
    document.querySelector(".sobremesa").querySelector(".selecionado .icone").classList.remove("escondido");
    sobremesaescolhida = elemento.innerHTML;
    doce = (elemento);
    pedido();
}
function pedido() {
    if (comidaescolhida !== null && bebidaescolhida !== null && sobremesaescolhida !== null) {
        document.querySelector(".seleciona").classList.add("escondido");
        document.querySelector(".fecharpedido").classList.remove("escondido");
    }
  }
function fecharpedido() { 
    let valorfinal = Number(prato.querySelector(".preço").innerText.replace("R$","").replace(",",".")) + Number(beber.querySelector(".preço").innerText.replace("R$","").replace(",",".")) + Number(doce.querySelector(".preço").innerText.replace("R$","").replace(",","."));
    const uri = `Olá, gostaria de fazer o pedido: 
- Prato: ${prato.querySelector(".nome").innerText}
- Bebida: ${beber.querySelector(".nome").innerText}
- Sobremesa: ${doce.querySelector(".nome").innerText}\n
Total: R$ ${valorfinal.toFixed(2)}` 

    const uriEncoded = encodeURIComponent(uri);
    window.open(`https://wa.me/553284409089?text=${uriEncoded}`, `_blank`);
}