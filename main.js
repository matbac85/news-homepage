// Modifiez votre script JavaScript pour ajouter ou supprimer la classe "open" du menu et de l'overlay

const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", function () {
  menu.classList.add("open"); // Ajoutez la classe "open" pour afficher le menu
  overlay.classList.add("active"); // Ajoutez la classe "active" pour afficher l'overlay
});

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", function () {
  menu.classList.remove("open"); // Supprimez la classe "open" pour masquer le menu
  overlay.classList.remove("active"); // Supprimez la classe "active" pour masquer l'overlay
});
