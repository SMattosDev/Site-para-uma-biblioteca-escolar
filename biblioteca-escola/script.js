// Funções de cadastro e exibição

// Função para cadastrar aluno
function cadastrarAluno() {
    const nomeAluno = document.getElementById("nomeAluno").value;
    if (nomeAluno) {
        let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
        alunos.push({ nome: nomeAluno });
        localStorage.setItem("alunos", JSON.stringify(alunos));
        document.getElementById("success-message").textContent = "Aluno cadastrado com sucesso!";
    }
}

// Função para exibir alunos cadastrados
function exibirAlunos() {
    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    const tabelaAlunos = document.getElementById("tabelaAlunos");
    alunos.forEach(aluno => {
        const row = tabelaAlunos.insertRow();
        row.insertCell(0).textContent = aluno.nome;
    });
}

// Função para cadastrar livro
function cadastrarLivro() {
    const nomeLivro = document.getElementById("nomeLivro").value;
    if (nomeLivro) {
        let livros = JSON.parse(localStorage.getItem("livros")) || [];
        livros.push({ titulo: nomeLivro });
        localStorage.setItem("livros", JSON.stringify(livros));
        document.getElementById("success-message").textContent = "Livro cadastrado com sucesso!";
    }
}

// Função para exibir livros cadastrados
function exibirLivros() {
    const livros = JSON.parse(localStorage.getItem("livros")) || [];
    const tabelaLivros = document.getElementById("tabelaLivros");
    livros.forEach(livro => {
        const row = tabelaLivros.insertRow();
        row.insertCell(0).textContent = livro.titulo;
    });
}

// Função para registrar empréstimo
function registrarEmprestimo() {
    const nomeAluno = document.getElementById("nomeAlunoEmprestimo").value;
    const tituloLivro = document.getElementById("tituloLivroEmprestimo").value;
    const dataDevolucao = document.getElementById("dataDevolucao").value;
    if (nomeAluno && tituloLivro && dataDevolucao) {
        let emprestimos = JSON.parse(localStorage.getItem("emprestimos")) || [];
        emprestimos.push({ nomeAluno, tituloLivro, dataDevolucao });
        localStorage.setItem("emprestimos", JSON.stringify(emprestimos));
        document.getElementById("success-message").textContent = "Empréstimo registrado com sucesso!";
    }
}

// Chamada das funções nas páginas apropriadas
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("tabelaAlunos")) exibirAlunos();
    if (document.getElementById("tabelaLivros")) exibirLivros();
});
