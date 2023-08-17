window.onload = listValueButton;


function listValueButton(){
    let botao = document.querySelectorAll("input");
    for (let i = 0; i < botao.length; i++){
        botao[i].onclick = envioValorBotao; 
    }   
    
}

function envioValorBotao(event){
    let button = event.target;
    let valueButton = button.value;
    let textoConfirmacao = document.getElementById("notaAvaliacao");
    textoConfirmacao.innerHTML = `You selected ${valueButton} out of 5`;   
}

let submit = document.getElementById("btnSubmit");

submit.onclick = function(){
    let enviar = document.getElementById("teste");
    enviar.style.display = "block"; 
    document.getElementById("card").style.display = "none";
    document.getElementById("card").style.transform= "rotateY(180deg)";
    
}


// let teste = " texto ";
// let textoConfirmacao = document.getElementById("notaAvaliacao");
//     textoConfirmacao.innerHTML = `You selected ${teste}out of 5`;





















