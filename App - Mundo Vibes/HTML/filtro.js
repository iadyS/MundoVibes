// Seleciona os elementos do menu
const openFilterMenu = document.getElementById("openFilterMenu"); // Botão de abrir o menu
const closeFilterMenu = document.getElementById("closeFilterMenu"); // Botão de fechar o menu
const menuHamburguer = document.getElementById("menu-hamburguer"); // Menu de filtro

// Evento para abrir o menu
openFilterMenu.addEventListener("click", (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    menuHamburguer.style.right = "0"; // Desliza o menu para dentro da tela
});

// Evento para fechar o menu
closeFilterMenu.addEventListener("click", () => {
    menuHamburguer.style.right = "-250px"; // Esconde o menu novamente
});
