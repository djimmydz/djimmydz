const app = {
    init: function () {
        console.log('Javascript enabled');
        app.navbarColor();
        // app.parallaxImage();
    },

    navbarColor: function () {
        const navbar = document.querySelector('.navbar'); 
        const navbarItems = document.querySelectorAll('.navbar > .navbar__items > a');
    
        // Fonction pour gérer la couleur de la navbar
        function handleNavbarColor() {
            // Vérification si l'écran est en mode mobile (par exemple, largeur de l'écran < 768px)
            const isMobile = window.innerWidth < 768;
    
            // Détecte le scroll
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    // Changer la couleur de fond de la navbar au scroll
                    navbar.style.backgroundColor = '#ffffffc9';
                    navbarItems.forEach(item => item.style.color = '#000000');
                } else {
                    if (isMobile) {
                        // Sur mobile, si l'utilisateur est tout en haut, appliquer un fond non-transparent
                        navbar.style.backgroundColor = '#ffffffc9';
                        navbarItems.forEach(item => item.style.color = '#000000');
                    } else {
                        // En desktop, rester transparent en haut de page
                        navbar.style.backgroundColor = 'transparent';
                        navbarItems.forEach(item => item.style.color = '#000000');
                    }
                }
            });
        }
    
        // Exécuter la fonction
        handleNavbarColor();
    
        // Recalculer au redimensionnement de la fenêtre (pour s'adapter aux changements de taille)
        window.addEventListener('resize', handleNavbarColor);
    },
    /* Je regarde par rapport a l'axe des ordonnées le scroll, et je change l'image.
    */
    // parallaxImage: function () {
    //     const image = document.querySelector('.main-container');
        
    //     window.addEventListener('scroll', function() {
    //         const scrollY = window.scrollY;
            
    //         if (scrollY > 1900) {
    //             image.style.backgroundImage = "url('./images/background-4.png')";
    //         } else if (scrollY > 1100) {
    //             image.style.backgroundImage = "url('./images/background-2.png')";
    //         } else if (scrollY > 500) {
    //             image.style.backgroundImage = "url('./images/background-1.png')";
    //         } else {
    //             image.style.backgroundImage = "url('./images/background-3.png')";
    //         }

    //         image.style.backgroundSize = 'cover';
    //         image.style.backgroundPosition = 'center';
    //         image.style.transition = 'background-image 0.5s ease';
    //     });
    // }
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
    const navbarLinks = document.querySelectorAll('.navbar__items a'); // Sélectionner les liens du menu

    // Ajouter un event listener sur le bouton hamburger
    navbarToggle.addEventListener('click', function() {
        navbarItems.classList.toggle('show'); // Ajoute ou retire la classe 'show'
    });

    // Ajouter un event listener sur chaque lien du menu
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Retire la classe 'show' pour refermer le menu
            navbarItems.classList.remove('show');
        });
    });
});

    
 // Sélectionner tous les liens qui ont la classe "smooth-scroll"
    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche l'ajout de l'ancre dans l'URL
            
            // Cible l'élément correspondant à l'attribut href (l'ancre)
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            // Fais défiler la page jusqu'à la section cible
            targetElement.scrollIntoView({
                behavior: 'smooth' // Défilement fluide
            });
        });
    });