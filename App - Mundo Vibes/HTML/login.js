// Função de redirecionamento
function redirectTo(page) {
    window.location.href = page;
}

// Função de login com validação
function login(event) {
    event.preventDefault();  // Impede o envio do formulário para validar primeiro

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificando se os campos estão preenchidos
    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;  // Não faz nada se os campos não estiverem preenchidos
    }

    // Validando os dados (substitua por um banco de dados ou sistema real)
    const validUsername = 'sololeveling';
    const validPassword = '123456';

    if (username === validUsername && password === validPassword) {
        // Se as credenciais estiverem corretas, redireciona para a página principal
        redirectTo('index-pgPrincipal.html');  
    } else {
        // Se os dados forem incorretos, alerta o usuário
        alert('Usuário ou senha inválidos. Tente novamente.');
    }
}

// Adicionando o evento de envio ao formulário
document.getElementById('loginForm').addEventListener('submit', login);
