import { MAX_PROJECTS, TRANSITION_TIME } 
    from './helpers.js';

import { allProjectObjects } 
    from './projectObjects.js';

import { disableInnerProjectsTab, enableProjectsContainerTab, disableProjectsContainerTab, disableTabWebsite, enableAboutTab, preventScroll, enableScroll, enableTabWebsite } 
    from './selectorsFunctions.js';

import { mainMenu, mainMenuToggle } 
    from './effects.js';

// Select DOM elements
export const aboutSection = document.querySelector('.about');
export const projectsSection = document.querySelector('.projects');
export const projectSortBtn = document.querySelectorAll('.wrap-projects-sort');
export const exitBtn = document.querySelectorAll('.exit-img');
const allProjects = document.querySelector('.all-projects');
const projectInfo = document.querySelector('.project-info');
const pb = document.getElementById('projects-blur');
const page = document.getElementById('page');
const elementGuard = document.querySelector('.element-guard');

// Clear projects
const clearProjectContainer = function() {
    // Clear all projects
    allProjects.innerHTML = '';
};

// Used after rendering projects, so that you re-add eventlisteners on them!
const projectContainerListen = function() {
    // Select the project containers after it is rendered to HTML!
    const projectContainer = document.querySelectorAll('.project-container');

    // Project click
    projectContainer.forEach(p => {
        p.addEventListener('click', function() {
            addProjectInfo(p.id);
        });
    });
};

// Render projects
export const renderProjectContainers = function() {
    // First clear all projects
    clearProjectContainer();
 
    // Render projects to HTML!
    for (let i = 0; i < allProjectObjects.length && i < MAX_PROJECTS; i++) {
        allProjects.innerHTML += allProjectObjects[i].container;
    };

    // Enable tab for all projects
    enableProjectsContainerTab();

    // Add eventlisteners for the projects
    projectContainerListen();
};

// Sort projects
export const sortProjectContainers = function(type) {
    // Get the element id (removes the "-sort" from the id!)
    const typeTrim = type.split('-sort').join('');

    // Fade the projects out
    allProjects.classList.add('hide');

    // After the project is faded out, then run all funtionalities!
    setTimeout(() => {
        // Clear all projects
        clearProjectContainer();
        // Render sorted projects to HTML!
        for (let i = 0; i < allProjectObjects.length && i < MAX_PROJECTS; i++) {
            for (let a = 0; a < allProjectObjects[i].type.length; a++) {
                if (allProjectObjects[i].type[a] === typeTrim) {
                    allProjects.innerHTML += allProjectObjects[i].container;
                }
            };
        };
        // Add eventlisteners for the projects
        projectContainerListen();
    }, TRANSITION_TIME);

    // Fade projects back in again
    setTimeout(() => {allProjects.classList.remove('hide');}, TRANSITION_TIME);
};

// Reset all sorting icons back to default!
export const resetSortingIcons = function() {
    projectSortBtn.forEach(d => {
        if (d.classList.contains('de-select')) {
            d.classList.remove('de-select');
        }
        if (d.classList.contains('selected')) {
            d.classList.remove('selected');
        }
    });
};

// Deselcting all sorting icons, except for the one you clicked!
export const deSelectSortingIcons = function(id) {
    // First, clear all sorting icons back to default!
    resetSortingIcons();

    // Then highlight the correct icon
    projectSortBtn.forEach(d => {
        if (d.id !== id) {
            d.classList.add('de-select');
        } else {
            d.classList.add('selected');
        }
    });
};

// Add project info
const addProjectInfo = function(id) {
    // Disable tab for the project section
    disableProjectsContainerTab();
    // Remove project info
    if (projectInfo.classList.contains('hide-info')) {
        projectInfo.classList.remove('hide-info');
        projectInfo.style.zIndex = 3;
        pb.classList.add('blur');
        
        // Loop through all projects and render the info based on the id argument!
        for (let i = 0; i < allProjectObjects.length; i++) {
            if (allProjectObjects[i].id === id) {
                // Render the selected project
                projectInfo.innerHTML = allProjectObjects[i].info;

                // Render exit project
                exitProjectListener();
            }
        };
    }
};

// Exit the project info
const exitProjectListener = function() {
    // Render exit button
    projectInfo.innerHTML += `<button class="nobtnMargin exit-img-inner tab-project-inner"><img class="exit-img-inner" src="/icons/exit.svg" alt="Exit icon" /></button>`;

    // Hide the other exit button
    exitBtn.forEach(b => {
        b.classList.add('hide');
    });

    // Render onclick class
    const exitImgInner = document.querySelector('.exit-img-inner');

    // Exit project on click
    exitImgInner.addEventListener('click', function() {
        // Enable tab for the project section
        enableProjectsContainerTab();

        removeProjectInfo();
    });
};

// Remove project info and clear the HTML
const removeProjectInfo = function() {
    // Disable tab elements for inner projects
    disableInnerProjectsTab();

    // Remove project blur
    pb.classList.remove('blur');
    // Remove the hide class from the exit button
    exitBtn.forEach(b => {
        b.classList.remove('hide');
    });
    
    // Remove project info
    if (!projectInfo.classList.contains('hide-info')){
        projectInfo.classList.add('hide-info');
        projectInfo.style.zIndex = -2;
    }
};

// Add sections
export const addSection = function(section) {

    // Prevent scrolling
    preventScroll();

    // Add the main menu if it is not already there!
    if (mainMenu.classList.contains('hide-menu')) {
        mainMenu.classList.remove('hide-menu');
    }
    // show the section if it is not there!
    if (section.classList.contains('hide')) {
        section.classList.remove('hide');
        section.style.zIndex = 3;
        page.classList.add('blur');
        elementGuard.style.zIndex = 3;

        // Remove project info
        removeProjectInfo();

        if (section === projectsSection) {
            renderProjectContainers();
        }

        if (section === aboutSection) {
            enableAboutTab();
        }

    }
    // Disable to tab on the website when the menu is opened
    disableTabWebsite();
};

// Remove all sections
export const removeAllSections = function() {
    
    const section = [aboutSection, projectsSection];
    for (let i = 0; i < section.length; i++) {
        // If the section is there, then remove it!
        if (!section[i].classList.contains('hide')) {
            section[i].classList.add('hide');
            section[i].style.zIndex = -1;
        }  
    };
    
    // Reset all sorting icons
    resetSortingIcons();

    if (page.classList.contains('blur')) {
        page.classList.remove('blur');
    }

    mainMenuToggle();
    // Enable scrolling
    enableScroll();

    elementGuard.style.zIndex = -1;

    enableTabWebsite();
};