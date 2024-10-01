/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/

// Lorsque le contenu du DOM est complètement chargé
window.addEventListener('DOMContentLoaded', event => {

    // Fin barre navigation -------------------------------------------------------------------------------------//
    // Fonction pour réduire la barre de navigation
    var navbarShrink = function () {
        // Sélectionne l'élément de la barre de navigation avec l'ID 'mainNav'
        const navbarCollapsible = document.body.querySelector('#mainNav');
        // Si l'élément n'existe pas, on quitte la fonction
        if (!navbarCollapsible) {
            return;
        }
        // Vérifie si l'utilisateur a fait défiler la page
        if (window.scrollY === 0) {
            // Si la page est en haut, retirer la classe 'navbar-shrink' (l'apparence normale)
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            // Si l'utilisateur a fait défiler la page, ajouter la classe 'navbar-shrink' (pour réduire)
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Appel de la fonction pour réduire la barre de navigation lors du chargement de la page
    navbarShrink();

    // Écoute l'événement de défilement pour réduire la barre de navigation
    document.addEventListener('scroll', navbarShrink);

    // Active le scrollspy de Bootstrap sur l'élément principal de navigation
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav', // Cible la barre de navigation
            rootMargin: '0px 0px -40%', // Définit les marges pour le scrollspy
        });
    }

    // Collapse la barre de navigation réactive lorsque l'élément de menu est visible
    const navbarToggler = document.body.querySelector('.navbar-toggler'); // Sélectionne le bouton de basculement de la barre de navigation
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link') // Sélectionne tous les éléments de lien de la barre de navigation réactive
    );

    // Ajoute un événement clic à chaque élément de la barre de navigation
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            // Vérifie si le bouton de basculement est affiché
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                // Si le bouton est visible, simule un clic pour fermer le menu
                navbarToggler.click();
            }
        });
    });
});
// Fin barre navigation -------------------------------------------------------------------------------------//

// Début Test Parallax -------------------------------------------------------------------------------------//
// Sélectionne tous les éléments <section> de la page et les stocke dans la variable 'sections'.
const sections = document.querySelectorAll('section'); 

// Crée un nouvel observateur d'intersection. Cet observateur surveille quand les éléments 
// spécifiés (les sections dans ce cas) apparaissent dans le viewport (la partie visible de la fenêtre).
const observer = new IntersectionObserver(
    (entries) => { // Fonction de callback qui est appelée chaque fois qu'une intersection est observée.
    
    // 'entries' est un tableau d'objets représentant chaque élément observé (ici chaque <section>).
    entries.forEach(entry => {
        // Si l'élément est dans le viewport (c'est-à-dire qu'il est visible à l'écran à plus de 40%).
        if (entry.isIntersecting) {
            // Ajoute la classe 'active' à l'élément (pour appliquer un style spécifique ou déclencher une animation, par exemple).
            entry.target.classList.add('active');
        } else {
            // Sinon, si l'élément sort de la vue, retire la classe 'active'.
            entry.target.classList.remove('active');
        }
    });
}, 
{
    // Définition des options de l'observateur. 
    // Ici, la propriété 'threshold' définit le pourcentage de visibilité de l'élément nécessaire 
    // pour que l'observateur déclenche la fonction.
    // '0.4' signifie que lorsque 40% de l'élément est visible, l'observateur déclenche une intersection.
    threshold: 0.4
});

// Boucle sur chaque section de la page (chaque élément <section> précédemment sélectionné)
sections.forEach(section => {
    // Chaque section est observée par l'observateur d'intersection.
    observer.observe(section);
});

// Fin Test Parallax -------------------------------------------------------------------------------------//
