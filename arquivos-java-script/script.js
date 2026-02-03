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
    let email = document.getElementById("username").value;
    let senha = document.getElementById("password").value;
    console.log(`O email digitado foi: ${email}`);
    console.log(`A senha digitada foi: ${senha}`);

    let json = {
        "email": email,
        "senha": senha
    };

    console.log(json);

    let jsonString = JSON.stringify(json);
    console.log(jsonString);

    let jsonParse = JSON.parse(jsonString);
    console.log(jsonParse);

    if (!jsonParse.email) {
        alert("Email não foi preenchido corretamente!");
    } else if (!jsonParse.senha) {
        alert("A senha não foi digitada");
    } else {
        alert("Formulário enviado com sucesso!");
    }
   
});