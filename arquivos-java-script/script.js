const email = "igor@hotmail.com";

console.log(`seu email é: ${email}`);
console.log("seu email é:  email");

document.getElementById("botao").addEventListener("click", e => {
    console.log("O botão foi clicado!");
});

document.getElementById("form-login").addEventListener("mouseenter", e => {
    console.log("O mause está sobre o formulário!");
    
});

document.querySelector("#form-login").addEventListener("mouseleave", e => {
    console.log("O mause saiu de cima do formulário!");
});

document.querySelector("#form-login").addEventListener("submit", e => {
    e.preventDefault();
    console.log("Formulário enviado");
});