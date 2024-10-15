const app = {
    init: function () {
        console.log('Javascript enabled');
        app.navbarColor();
        app.parallaxImage();
    },

    navbarColor: function () {
        const navbar = document.querySelector('.navbar'); 
        const navbarItems = document.querySelectorAll('.navbar > .navbar__items > a'); 
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = '#96AAFF';
                navbarItems.forEach(item => item.style.color = '#FFFFFF');
            } else {
                navbar.style.backgroundColor = 'transparent';
                navbarItems.forEach(item => item.style.color = '#000000');
            }
        });
    },
    /* Je regarde par rapport a l'axe des ordonnées le scroll, et je change l'image.
    */
    parallaxImage: function () {
        const image = document.querySelector('.main-container');
        
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            
            if (scrollY > 1900) {
                image.style.backgroundImage = "url('./images/background-4.png')";
            } else if (scrollY > 1100) {
                image.style.backgroundImage = "url('./images/background-2.png')";
            } else if (scrollY > 500) {
                image.style.backgroundImage = "url('./images/background-1.png')";
            } else {
                image.style.backgroundImage = "url('./images/background-3.png')";
            }

            image.style.backgroundSize = 'cover';
            image.style.backgroundPosition = 'center';
            image.style.transition = 'background-image 0.5s ease';
        });
    }
}

// Initialiser Plyr
const player = new Plyr('#player');

document.addEventListener('DOMContentLoaded', app.init);


    document.addEventListener('DOMContentLoaded', function () {
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        
        // Afficher le bouton après un certain scroll
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) { // Affiche le bouton après 300px de scroll
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
        
        // Remonter en haut de manière fluide
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Défilement fluide
            });
        });
    });


// PARTIE WHATSAPP 
        // Place ton script JavaScript ici
        document.addEventListener('DOMContentLoaded', function () {
            const whatsappIcon = document.getElementById('whatsappIcon');
            const whatsappModal = document.getElementById('whatsappModal');

            whatsappIcon.addEventListener('click', function() {
                if (whatsappModal.style.display === 'none' || whatsappModal.style.display === '') {
                    whatsappModal.style.display = 'block';
                } else {
                    whatsappModal.style.display = 'none';
                }
            });
        });

 // PARTIE NAVBAR RESPONSIVE
        document.addEventListener('DOMContentLoaded', function() {
            const navbarToggle = document.getElementById('navbarToggle');
            const navbarItems = document.getElementById('navbarItems');
        
            // Ajouter un event listener sur le bouton hamburger
            navbarToggle.addEventListener('click', function() {
                navbarItems.classList.toggle('show'); // Ajoute ou retire la classe 'show'
            });
        });
    