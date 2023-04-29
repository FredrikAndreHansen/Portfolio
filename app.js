// Select DOM elements
//const allSections = document.querySelectorAll('.reveal');
const skillsAlign = document.querySelector('.skills-align');
const pointer = document.querySelector('.pointerIntro');
const skillSectionPointer = document.querySelector('.skill-section-pointer');
const phoneWrapperRight = document.querySelector('.phone-wrapper-right');
const monitorWrapperRight = document.querySelector('.monitor-wrapper-right');
const phoneWrapperLeft = document.querySelector('.phone-wrapper-left');
const monitorWrapperLeft = document.querySelector('.monitor-wrapper-left');
const phoneWrapperRight2 = document.querySelector('.phone-wrapper-right2');
const monitorWrapperRight2 = document.querySelector('.monitor-wrapper-right2');
const projectWrapper1 = document.querySelector('.project-wrapper1');
const projectWrapper2 = document.querySelector('.project-wrapper2');
const projectWrapper3 = document.querySelector('.project-wrapper3');

// Add classes to DOM elements!
skillsAlign.classList.add('hide');
projectWrapper1.classList.add('hide');

// Remove the skills section if you are at the top of the page!
window.addEventListener('scroll', () => {
    if (window.scrollY === 0 && !skillsAlign.classList.contains('hide')) {
        skillsAlign.classList.add('hide');
        pointer.classList.remove('hide');
        setTimeout(() => {skillSectionPointer.style.display = 'block';}, 100);
    } else {
        //pointer.classList.add('hide');
        setTimeout(() => {skillSectionPointer.style.display = 'none';}, 100);
    }
    // Guard for when scrolling below top that the skills section always appear (bug fix!)
    if (window.scrollY > 0 && skillsAlign.classList.contains('hide')) {
        skillsAlign.classList.remove('hide');
        setTimeout(() => {skillSectionPointer.style.display = 'none';}, 100);
    }

    // Get position of all projects
    const projectWrapper1Rect = projectWrapper1.getBoundingClientRect();
    const projectWrapper2Rect = projectWrapper2.getBoundingClientRect();
    const projectWrapper3Rect = projectWrapper3.getBoundingClientRect();

    // --------- PROJECT 1 ------------
    // Fade in
    if (projectWrapper1Rect.top < 750 && projectWrapper2Rect.top > 600) {
        projectWrapper1.classList.remove('hide');
    } else {
        projectWrapper1.classList.add('hide');
    }
    phoneWrapperRight.style.top = (window.scrollY - 1400)/3 + 'px';
    monitorWrapperRight.style.top = (window.scrollY - 1450)/4.5 + 'px';

     // --------- PROJECT 2 ------------
    // Fade in
    if (projectWrapper2Rect.top < 600 && projectWrapper3Rect.top > 550) {
        projectWrapper2.classList.remove('hide');
    } else {
        projectWrapper2.classList.add('hide');
    }

    phoneWrapperLeft.style.top = (window.scrollY - 2300)/3 + 'px';
    monitorWrapperLeft.style.top = (window.scrollY - 2350)/4.5 + 'px';

    // --------- PROJECT 3 ------------
    // Fade in
    if (projectWrapper3Rect.top < 550) {
        projectWrapper3.classList.remove('hide');
    } else {
        projectWrapper3.classList.add('hide');
    }

    phoneWrapperRight2.style.top = (window.scrollY - 3200)/3 + 'px';
    monitorWrapperRight2.style.top = (window.scrollY - 3250)/4.5 + 'px';
});