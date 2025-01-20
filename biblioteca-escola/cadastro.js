document.addEventListener("DOMContentLoaded", () => {
    const formCadastroAluno = document.getElementById("form-cadastro-aluno");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
    const verAlunosButton = document.getElementById("ver-alunos");

    formCadastroAluno.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const id = document.getElementById("id").value;
        const serie = document.getElementById("serie").value;

        // Salva o aluno no localStorage
        let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
        alunos.push({ nome, id, serie });
        localStorage.setItem("alunos", JSON.stringify(alunos));

        mensagemSucesso.textContent = "Aluno cadastrado com sucesso!";
        formCadastroAluno.reset();
    });

    verAlunosButton.addEventListener("click", () => {
        window.location.href = "alunos-cadastrados.html";
    });
});
