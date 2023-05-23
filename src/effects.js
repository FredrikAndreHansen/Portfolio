import { preventScroll, enableScroll, enableTabWebsite, disableTabWebsite, enableMobileTab, disableMobileTab } 
    from './selectorsFunctions.js';

export const mainMenu = document.querySelector('.main-menu-back');
export const skillsAlign = document.querySelector('.skills-align');
export const projectWrapper1 = document.querySelector('.project-wrapper1');
export const loading = document.querySelector('.loading');
const pageLoader = document.querySelector('.page-loader');
const phoneWrapperRight = document.querySelector('.phone-wrapper-right');
const monitorWrapperRight = document.querySelector('.monitor-wrapper-right');
const phoneWrapperLeft = document.querySelector('.phone-wrapper-left');
const monitorWrapperLeft = document.querySelector('.monitor-wrapper-left');
const phoneWrapperRight2 = document.querySelector('.phone-wrapper-right2');
const monitorWrapperRight2 = document.querySelector('.monitor-wrapper-right2');
const pointer = document.querySelector('.pointer-intro');
const projectWrapper2 = document.querySelector('.project-wrapper2');
const projectWrapper3 = document.querySelector('.project-wrapper3');
const mobileMenuSection = document.querySelector('.mobile-menu-section');

// Removes the page loader screen
export const pageLoaderRemove = function() {
    pageLoader.style.left = 100 + '%';
};

// Main menu toggle
export const mainMenuToggle = function() {
    if (window.scrollY <= 200 && !mainMenu.classList.contains('hide-menu')) {
        mainMenu.classList.add('hide-menu');
    }
    if (window.scrollY > 200 && mainMenu.classList.contains('hide-menu')) {
        mainMenu.classList.remove('hide-menu');
    }
};

// Open mobile menu
export const mobileMenuOpen = function() {
    if (mobileMenuSection.classList.contains('hide-mobile')) {
        mobileMenuSection.classList.remove('hide-mobile');
        preventScroll();
        enableMobileTab();
        disableTabWebsite();
    }
};

// Close mobile menu
export const mobileMenuClose = function(enable = true) {
    if (!mobileMenuSection.classList.contains('hide-mobile')) {
        mobileMenuSection.classList.add('hide-mobile');
        if (enable == true) {
            enableScroll();
            enableTabWebsite();
        }
        disableMobileTab();
    }
};

// Projects parallax
export const projectParallax = function() {
    phoneWrapperRight.style.top = (window.scrollY - 1400)/3 + 'px';
    monitorWrapperRight.style.top = (window.scrollY - 1900)/4.5 + 'px';
    phoneWrapperLeft.style.top = (window.scrollY - 2300)/3 + 'px';
    monitorWrapperLeft.style.top = (window.scrollY - 2800)/4.5 + 'px';
    phoneWrapperRight2.style.top = (window.scrollY - 3200)/3 + 'px';
    monitorWrapperRight2.style.top = (window.scrollY - 3700)/4.5 + 'px';
};

// Toggle skills sections
export const skillSectionToggle = function() {
    // Remove the skills section when you are at the top!
    if (window.scrollY === 0 && !skillsAlign.classList.contains('hide')) {
        skillsAlign.classList.add('hide');
        pointer.classList.remove('hide');
    }
    // Guard for when scrolling below top that the skills section always appear (bug fix!)
    if (window.scrollY > 0 && skillsAlign.classList.contains('hide')) {
        skillsAlign.classList.remove('hide');
        pointer.classList.add('hide');
    }
};

// Toggle all projects
export const projectFadeToggle = function(project) {
    // Get the position of all projects
    const projectWrapper1Rect = projectWrapper1.getBoundingClientRect();
    const projectWrapper2Rect = projectWrapper2.getBoundingClientRect();
    const projectWrapper3Rect = projectWrapper3.getBoundingClientRect();
    const pRectArr = [projectWrapper1Rect, projectWrapper2Rect, projectWrapper3Rect];
    const pWrapArr = [projectWrapper1, projectWrapper2, projectWrapper3];
    const pTopBottom = [750, 600, 550];
    
    // The a variable will prevent the last project to fade out!
    let a = 0;
    if (pRectArr.length === project) {a = 1;}
    // Fade in
    if (pRectArr[project-1].top < pTopBottom[project-1] && pRectArr[project-a].top > pTopBottom[project-a]-a*9999) {
        pWrapArr[project-1].classList.remove('hide');
    } else {
        // Fade out
        pWrapArr[project-1].classList.add('hide');
    }
};

// Show the loading bar
export const showLoading = function() {
    if (loading.classList.contains('hide')) {
        loading.classList.remove('hide');
    }
};

// Remove the loading bar
export const removeLoading = function() {
    if (!loading.classList.contains('hide')) {
        loading.classList.add('hide');
    }
};