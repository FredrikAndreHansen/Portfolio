import { mainMenu, skillsAlign, projectWrapper1, pageLoaderRemove, mainMenuToggle, mobileMenuOpen, mobileMenuClose, projectParallax, skillSectionToggle, projectFadeToggle, removeLoading } 
    from './effects.js';

import { enableScroll } 
    from './selectorsFunctions.js';

import { removePopup, sendEmail } 
    from './email.js';

import { aboutSection, projectsSection, projectSortBtn, exitBtn, sortProjectContainers, deSelectSortingIcons, addSection, removeAllSections }
    from './contentSections.js';

// Select DOM elements
const landingSelector = document.querySelectorAll('#landing-selector');
const contactSelector = document.querySelectorAll('.contact-selector');
const aboutSelector = document.querySelectorAll('.about-selector');
const projectsSelector = document.querySelectorAll('.projects-selector');
const contactForm = document.querySelector('.contact-form');
const mobileMenu = document.querySelector('.mobile-menu');
const exitMobileMenu = document.querySelectorAll('.ext-mobile-function');

// Add classes to DOM elements!
skillsAlign.classList.add('hide');
projectWrapper1.classList.add('hide');
mainMenu.classList.add('hide-menu');

window.addEventListener('keydown', function(e) {
if(e.key === 'Tab') {console.log(e)}
})

// Scroll functions/effects
window.addEventListener('scroll', function() {
    // Toggle skills section
    skillSectionToggle();

    // Toggle main menu
    mainMenuToggle();

    // Toggle projects
    projectFadeToggle(1);
    projectFadeToggle(2);
    projectFadeToggle(3);

    // Projects scroll parallax
    projectParallax();

    // Remove email popup message
    removePopup();
});

// Toggle the About section
aboutSelector.forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        // Add the about section!
        if (aboutSection.classList.contains('hide')) {
            removeAllSections();
            addSection(aboutSection);
        }
    });
});

// Toggle the Projects section
projectsSelector.forEach(p => {
    p.addEventListener('click', function(e) {
        e.preventDefault();
        // Add the projects section!
        if (projectsSection.classList.contains('hide')) {
            removeAllSections();
            addSection(projectsSection);
        }
    });
});

// Sort projects
projectSortBtn.forEach(p => {
    p.addEventListener('click', function() {
        // Make sure that you can't click on a button that is already selected
        if (!p.classList.contains('selected')) {
            deSelectSortingIcons(p.id);
            sortProjectContainers(p.id);
        }
    });
});

// Exit button
exitBtn.forEach(e => {
    e.addEventListener('click', function() {
        // Remove all sections!
        removeAllSections();
    });
});

// Pressing esc to remove sections
window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        removeAllSections();
    }
});

// When clicking on the landing link, then remove all sections!
landingSelector.forEach(ls => {
    ls.addEventListener('click', function() {
        // Remove all sections!
        removeAllSections();
    });
});

// When clicking on the contact link, then remove all sections!
contactSelector.forEach(c => {
    c.addEventListener('click', function() {
        // Remove all sections!
        removeAllSections();
    });
});

// Open the mobile menu
mobileMenu.addEventListener('click', function() {
    mobileMenuOpen();
});

// Close the mobile menu
exitMobileMenu.forEach(e => {
    e.addEventListener('click', function() {
        if (!projectsSection.classList.contains('hide') || !aboutSection.classList.contains('hide')) {mobileMenuClose(false);} else {mobileMenuClose();}
    });
});

// Close the mobile menu if you resize the window
window.addEventListener('resize', function() {
    mobileMenuClose();
});

// Send email
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    removePopup();

    const name = document.querySelector('.input-name').value;
    const email = document.querySelector('.input-email').value;
    const message = document.querySelector('.message').value;

    contactForm.reset();

    sendEmail(name, email, message);
});

// Load in page
window.addEventListener('load', function() {
    history.scrollRestoration = 'manual';
    pageLoaderRemove();
    enableScroll();
    removeLoading();
});