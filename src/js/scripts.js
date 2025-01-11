// Navbar
function Navbar() {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
  
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function () {
        const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
        mobileMenuButton.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('hidden');
    });
  
    // Close mobile menu when a menu item is clicked
    mobileMenu.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        });
    });
}

// Caroussel
function setupCarousel() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let intervalId;

    // Fonction pour afficher la diapositive actuelle
    const showSlide = (index) => {
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    };

    // Afficher la diapositive initiale
    showSlide(currentIndex);

    // Fonction pour afficher la diapositive suivante
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    };

    // Événement pour le bouton précédent
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
        resetInterval();
    });

    // Événement pour le bouton suivant
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    // Défilement automatique toutes les cinq secondes
    function startCarousel() {
        intervalId = setInterval(nextSlide, 5000); // 5000 ms = 5 secondes
    }

    // Démarrez le carrousel au chargement de la page
    startCarousel();

    // Fonction pour réinitialiser l'intervalle lorsque l'utilisateur interagit avec le carrousel
    function resetInterval() {
        clearInterval(intervalId);
        startCarousel();
    }
}


document.addEventListener('DOMContentLoaded', function() {
    Navbar();
    setupCarousel();
});