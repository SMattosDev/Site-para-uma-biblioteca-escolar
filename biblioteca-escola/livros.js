// Função para mostrar livros cadastrados
function mostrarLivros() {
    const livros = JSON.parse(localStorage.getItem("livros")) || [];
    const tabelaLivros = document.getElementById("tabela-livros").getElementsByTagName("tbody")[0];
    tabelaLivros.innerHTML = "";

    livros.forEach((livro, index) => {
        const row = tabelaLivros.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.anoPublicacao}</td>
            <td>
          
                <button onclick="removerLivro(${index})">Remover</button>
            </td>
        `;
    });
}

// Função para adicionar livro
function cadastrarLivro(event) {
    event.preventDefault(); // Evitar o envio do formulário
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const anoPublicacao = document.getElementById("ano").value;

    const livros = JSON.parse(localStorage.getItem("livros")) || [];
    livros.push({ titulo, autor, anoPublicacao });
    localStorage.setItem("livros", JSON.stringify(livros));

    alert("Livro cadastrado com sucesso!");
    document.getElementById("livro-form").reset(); // Limpar o formulário
}

// Função para redirecionar para a página de livros cadastrados
function verLivros() {
    window.location.href = "livros-cadastrados.html";
}

// Funções para editar e remover livros
function editarLivro(index) { /* Implementação de edição */ }
function removerLivro(index) {
    const livros = JSON.parse(localStorage.getItem("livros"));
    livros.splice(index, 1);
    localStorage.setItem("livros", JSON.stringify(livros));
    mostrarLivros();
}

// Inicializa a exibição de livros, caso esteja na página de livros cadastrados
if (document.getElementById("tabela-livros")) {
    mostrarLivros();
}

// Função para adicionar livro
function cadastrarLivro(event) {
    event.preventDefault(); // Evitar o envio do formulário
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const anoPublicacao = document.getElementById("ano").value;

    const livros = JSON.parse(localStorage.getItem("livros")) || [];
    livros.push({ titulo, autor, anoPublicacao });
    localStorage.setItem("livros", JSON.stringify(livros));

    // Exibir mensagem de sucesso
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
    mensagemSucesso.textContent = "Livro cadastrado com sucesso!";
    mensagemSucesso.style.color = "black"; // Adiciona cor preto à mensagem
    mensagemSucesso.style.display = "block"; // Garante que a mensagem apareça

    document.getElementById("livro-form").reset(); // Limpar o formulário

    // Opcional: Ocultar a mensagem após alguns segundos
    setTimeout(() => {
        mensagemSucesso.style.display = "none"; // Oculta a mensagem após 3 segundos
    }, 3000);
}
