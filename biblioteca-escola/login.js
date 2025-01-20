document.addEventListener("DOMContentLoaded", () => {
    const USERNAME = "admin";
    const PASSWORD = "1234";

    const loginButton = document.getElementById("loginButton");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    loginButton.addEventListener("click", () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === USERNAME && password === PASSWORD) {
            window.location.href = "pagina-inicial.html";
        } else {
            errorMessage.textContent = "Usuário ou senha incorretos. Tente novamente.";
        }
    });
});
