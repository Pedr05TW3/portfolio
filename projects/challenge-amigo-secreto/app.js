//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Declarando lista
let amigos = [];
let nome; 



function textoNaTela(tag, texto){
    let campo = document.querySelector("h2");
    campo.innerHTML = texto;
}

function resultado(texto){
    let campo = document.getElementById("resultado");
    campo.innerHTML = texto;
}

function adicionarAmigo(){   
    let nome = document.querySelector("input").value;
       if(nome == ''){
        textoNaTela("h2", "Digite um nome válido, tente novamente!");
       
    }else{
        amigos.push(nome);
        
        limparCampo();
        textoNaTela("h2", "Digite o nome dos seus amigos");
        resultado("");
         lista();
} 
    function lista(tag, texto){
        let campo = document.getElementById("listaAmigos");
        let nomes = document.createElement("li");
        nomes.textContent = amigos[amigos.length-1];
        campo.append(nomes);
        
        }
        }
function limparCampo(){
    nome = document.querySelector("input");
    nome.value = "";
     
}


function sortearAmigo(){
    let sorteado = parseInt(Math.random() * amigos.length + 1);
    if(amigos.length == 0){
        resultado("Digite o nome de um amigo antes de sortear!");
    }else{ if(amigos.length <= 2){
        resultado("Não é possível sortear menos de 3 amigos!");
    }else{
    if(sorteado == amigos);
    resultado(`Sorteado: ${amigos[sorteado-1]}`);
    textoNaTela("h2", "Um amigo foi sorteado!");
    amigos = [];
    const ulListaDeAmigos = document.getElementById('listaAmigos')
    ulListaDeAmigos.innerHTML = ''

   
    
   
    
    
    }}}

