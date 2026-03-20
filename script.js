document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Fermer le menu après clic sur un lien (mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

const societes = [
  {
    id: 1,
    nom: "Bouzid Faiza Transport Marchandises",
    adresse: "Rte EL AIN KM 5 - Sfax",
    tel: "97 269 234",
    mf: "914.316 A / A",
    styleColor: "#1e40af"   // bleu foncé par ex.
  },
  {
    id: 2,
    nom: "QuickLine Transport & Livraison",
    adresse: "Zone Industrielle Sfax – Km 8",
    tel: "98 123 456",
    mf: "123.456 B / B",
    styleColor: "#2563eb"   // bleu plus clair
  }
];