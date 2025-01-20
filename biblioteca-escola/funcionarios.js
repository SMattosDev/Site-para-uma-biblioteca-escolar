document.getElementById("funcionario-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario-funcionario").value;
    const senha = document.getElementById("senha-funcionario").value;

    // Obtém os funcionários cadastrados e adiciona o novo
    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    funcionarios.push({ usuario, senha });
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

    // Mostra a mensagem de sucesso
    const successMessage = document.getElementById("success-message-funcionario");
    successMessage.style.display = "block";
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);

    // Limpa o formulário
    document.getElementById("funcionario-form").reset();
});
