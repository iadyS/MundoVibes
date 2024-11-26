// Função para validar o formulário de criação de conta
function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validando se os campos estão preenchidos
    if (!username || !email || !password || !confirmPassword) {
        alert('Por favor, preencha todos os campos.');
        return false; // Impede o envio do formulário
    }

    // Validando o formato do e-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false; // Impede o envio do formulário
    }

    // Verificando se a senha e a confirmação da senha são iguais
    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Tente novamente.');
        return false; // Impede o envio do formulário
    }

    // Validando a força da senha (pelo menos 6 caracteres)
    if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return false; // Impede o envio do formulário
    }

    // Se todos os campos forem válidos, permite o envio
    alert('Conta criada com sucesso!');

    // Redirecionando para a página de login após a criação da conta
    window.location.href = 'index-login.html';  // Substitua pelo caminho correto para sua página de login

    return true;
}

// Adicionando o evento de envio ao formulário
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    // Impede o envio do formulário se a validação falhar
    if (!validateForm()) {
        event.preventDefault();
    }
});
