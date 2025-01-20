// Função para exibir alunos cadastrados
function mostrarAlunos() {
    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    const tabelaAlunos = document.getElementById("tabela-alunos").getElementsByTagName("tbody")[0];
    tabelaAlunos.innerHTML = "";

    alunos.forEach((aluno, index) => {
        const row = tabelaAlunos.insertRow();
        row.innerHTML = `
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.serie}</td>
            <td>
                
                <button onclick="removerAluno(${index})">Remover</button>
            </td>
        `;
    });
}

// Função para adicionar aluno
function cadastrarAluno() {
    const id = document.getElementById("id-aluno").value;
    const nome = document.getElementById("nome-aluno").value;
    const serie = document.getElementById("serie-aluno").value;

    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    alunos.push({ id, nome, serie });
    localStorage.setItem("alunos", JSON.stringify(alunos));

    alert("Aluno cadastrado com sucesso!");
    mostrarAlunos();
}

// Funções para editar e remover alunos
function editarAluno(index) { /* Implementação de edição */ }
function removerAluno(index) {
    const alunos = JSON.parse(localStorage.getItem("alunos"));
    alunos.splice(index, 1);
    localStorage.setItem("alunos", JSON.stringify(alunos));
    mostrarAlunos();
}

// Inicializa a exibição de alunos
mostrarAlunos();
