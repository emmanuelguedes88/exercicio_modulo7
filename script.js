const form = document.getElementById("form-comparacao").addEventListener("submit", function(event) {

    event.preventDefault();

    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);

    var mensagemElement = document.getElementById("mensagem");

    if(y >= x) {
        mensagemElement.textContent = "O valor de Y é maior que o valor de X. Formulário válido !";
        mensagemElement.classList.remove("invalido");
        mensagemElement.classList.add("valido");
    } else {
        mensagemElement.textContent = "O valor de Y deve ser maior que o valor de X. Formulário inválido!";
        mensagemElement.classList.remove("valido");
        mensagemElement.classList.add("invalido");
    }

});
