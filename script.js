
function bonjour() {

    let message = document.getElementById("message");

    message.innerHTML = "✨ Bienvenue sur mon CV Fatoumata ✨";

    message.style.color = "white";
    message.style.backgroundColor = "blue";
    message.style.padding = "15px";
    message.style.borderRadius = "10px";
    message.style.width = "300px";
    message.style.margin = "20px auto";

    document.body.style.backgroundColor = "#dbeafe";
}
function afficherCompetences() {
 document.getElementById("resultat").innerHTML = `
<div class="skill">
        <p>HTML - 70%</p>
        <div class="barre">
            <div class="niveau html"></div>
        </div>
    </div>

    <div class="skill">
        <p>CSS - 65%</p>
        <div class="barre">
            <div class="niveau css"></div>
        </div>
    </div>

    <div class="skill">
        <p>JavaScript - 50%</p>
        <div class="barre">
            <div class="niveau js"></div>
        </div>
    </div>

    <div class="skill">
        <p>Java - 60%</p>
        <div class="barre">
            <div class="niveau java"></div>
        </div>
    </div>

    <div class="skill">
        <p>C - 60%</p>
        <div class="barre">
            <div class="niveau c"></div>
        </div>
    </div>

    `;

    document.getElementById("message").innerHTML = competences;
}
function bonjour() {

    let message = document.getElementById("message");

    message.innerHTML = "Merci de visiter mon CV ";

    message.style.color = "blue";
    message.style.fontSize = "25px";
    message.style.fontWeight = "bold";

}
document.addEventListener("DOMContentLoaded", () => {
    const experiences = document.querySelectorAll(".experience");

    experiences.forEach((exp, index) => {
        exp.style.opacity = "0";
        exp.style.transform = "translateY(30px)";

        setTimeout(() => {
            exp.style.transition = "all 0.8s ease";
            exp.style.opacity = "1";
            exp.style.transform = "translateY(0)";
        }, index * 400);
    });
});
// Récupérer le bouton
const backToTopButton = document.getElementById("backToTop");

// Écouter le défilement de la page
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  // Affiche le bouton si on a défilé de plus de 20px
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// Action lors du clic : retour en haut fluide
backToTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Animation de défilement fluide
  });});
  // Mode sombre / clair
const themeBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

});

liens.forEach(lien => {
    lien.addEventListener("click", function(e) {
        e.preventDefault();

        // Cacher toutes les sections
        sections.forEach(section => {
            section.style.display = "none";
        });

        // Afficher la section cliquée
        const cible = this.getAttribute("href");
        document.querySelector(cible).style.display = "block";
    });
});
