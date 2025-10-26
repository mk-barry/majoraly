// Fonction pour charger un fichier HTML externe dans un élément
function importdata(selector, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    });
}


// Au chargement de la page
window.onload = function() {
  // Charger les fragments HTML
  importdata("#nav", "nav-footer/nav.html");
  importdata("#footer", "nav-footer/footer.html");
};