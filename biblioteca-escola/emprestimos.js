// Função para registrar um empréstimo
function registrarEmprestimo(event) {
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nomeAluno = document.getElementById("nome-aluno").value;
    const livro = document.getElementById("livro").value;
    const dataDevolucao = document.getElementById("data-devolucao").value;

    if (!nomeAluno || !livro || !dataDevolucao) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Recupera a lista de empréstimos do localStorage, ou cria uma nova lista vazia
    let emprestimos = JSON.parse(localStorage.getItem("emprestimos")) || [];
    emprestimos.push({ nomeAluno, livro, dataDevolucao });
    localStorage.setItem("emprestimos", JSON.stringify(emprestimos));

    // Limpa o formulário após o registro
    document.getElementById("form-emprestimo").reset();

    // Exibe a mensagem de sucesso
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
    mensagemSucesso.textContent = "Empréstimo registrado com sucesso!";
    mensagemSucesso.style.display = "block"; // Mostra a mensagem
}


// Função para atualizar a tabela de empréstimos na página de Empréstimos Registrados
function atualizarTabelaEmprestimos() {
    const emprestimos = JSON.parse(localStorage.getItem("emprestimos")) || [];
    const tabelaEmprestimos = document.getElementById("tabela-emprestimos").getElementsByTagName("tbody")[0];
    tabelaEmprestimos.innerHTML = ""; // Limpa a tabela para evitar duplicação

    emprestimos.forEach(emprestimo => {
        const row = tabelaEmprestimos.insertRow();

        const hoje = new Date();
        const dataDevolucao = new Date(emprestimo.dataDevolucao);
        const status = dataDevolucao >= hoje ? "Dentro do Prazo" : "Atrasado";

        row.innerHTML = `
            <td>${emprestimo.nomeAluno}</td>
            <td>${emprestimo.livro}</td>
            <td>${emprestimo.dataDevolucao}</td>
            <td>${status}</td>
        `;
    });
}

// Chama a função para atualizar a tabela ao carregar a página de Empréstimos Registrados
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("tabela-emprestimos")) {
        atualizarTabelaEmprestimos();
    }
});

// Função para formatar a data
function formatarData(data) {
    const opcoes = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('pt-BR', opcoes).format(new Date(data));
}

// Função para atualizar a tabela de empréstimos na página de Empréstimos Registrados
function atualizarTabelaEmprestimos() {
    const emprestimos = JSON.parse(localStorage.getItem("emprestimos")) || [];
    const tabelaEmprestimos = document.getElementById("tabela-emprestimos").getElementsByTagName("tbody")[0];
    tabelaEmprestimos.innerHTML = ""; // Limpa a tabela para evitar duplicação

    // Ordena os empréstimos pela data de devolução
    emprestimos.sort((a, b) => new Date(a.dataDevolucao) - new Date(b.dataDevolucao));

    emprestimos.forEach(emprestimo => {
        const row = tabelaEmprestimos.insertRow();

        const hoje = new Date();
        const dataDevolucao = new Date(emprestimo.dataDevolucao);
        const status = dataDevolucao >= hoje ? "Dentro do Prazo" : "Atrasado";

        row.innerHTML = `
            <td>${emprestimo.nomeAluno}</td>
            <td>${emprestimo.livro}</td>
            <td>${formatarData(emprestimo.dataDevolucao)}</td> <!-- Data formatada -->
            <td>${status}</td>
        `;
    });
}

// Função para atualizar a tabela de empréstimos na página de Empréstimos Registrados
function atualizarTabelaEmprestimos() {
    const emprestimos = JSON.parse(localStorage.getItem("emprestimos")) || [];
    const tabelaEmprestimos = document.getElementById("tabela-emprestimos").getElementsByTagName("tbody")[0];
    tabelaEmprestimos.innerHTML = ""; // Limpa a tabela para evitar duplicação

    // Ordena os empréstimos pela data de devolução
    emprestimos.sort((a, b) => new Date(a.dataDevolucao) - new Date(b.dataDevolucao));

    emprestimos.forEach((emprestimo, index) => {
        const row = tabelaEmprestimos.insertRow();

        const hoje = new Date();
        const dataDevolucao = new Date(emprestimo.dataDevolucao);
        const status = dataDevolucao >= hoje ? "Dentro do Prazo" : "Atrasado";

        row.innerHTML = `
            <td>${emprestimo.nomeAluno}</td>
            <td>${emprestimo.livro}</td>
            <td>${formatarData(emprestimo.dataDevolucao)}</td> <!-- Data formatada -->
            <td>${status}</td>
            <td><button onclick="removerEmprestimo(${index})">Remover</button></td> <!-- Botão Remover -->
        `;
    });
}

// Função para remover um empréstimo
function removerEmprestimo(index) {
    let emprestimos = JSON.parse(localStorage.getItem("emprestimos")) || [];
    emprestimos.splice(index, 1); // Remove o empréstimo pelo índice
    localStorage.setItem("emprestimos", JSON.stringify(emprestimos)); // Atualiza o localStorage
    atualizarTabelaEmprestimos(); // Atualiza a tabela após remoção
}
