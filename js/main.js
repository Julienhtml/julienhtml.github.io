// Portfolio Julien Saulu : thème clair / sombre et menu mobile.

(function () {
  var racine = document.documentElement;

  // ----- Thème -----
  var boutonTheme = document.querySelector(".bouton-theme");

  function majBoutonTheme() {
    if (!boutonTheme) return;
    var sombre = racine.getAttribute("data-theme") === "dark";
    boutonTheme.textContent = sombre ? "Passer en thème clair" : "Passer en thème sombre";
  }

  if (boutonTheme) {
    boutonTheme.hidden = false;
    majBoutonTheme();
    boutonTheme.addEventListener("click", function () {
      var suivant = racine.getAttribute("data-theme") === "dark" ? "light" : "dark";
      racine.setAttribute("data-theme", suivant);
      try {
        localStorage.setItem("theme", suivant);
      } catch (e) {
        // Stockage indisponible : le choix vaut seulement pour cette page.
      }
      majBoutonTheme();
    });
  }

  // ----- Menu mobile -----
  var cote = document.querySelector(".cote");
  var boutonMenu = document.querySelector(".bouton-menu");

  if (cote && boutonMenu) {
    boutonMenu.addEventListener("click", function () {
      var ouvert = cote.classList.toggle("ouvert");
      boutonMenu.setAttribute("aria-expanded", ouvert ? "true" : "false");
      boutonMenu.textContent = ouvert ? "Fermer" : "Menu";
    });
  }
})();
