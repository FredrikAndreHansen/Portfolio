const websiteTab = document.querySelectorAll('.website-tab');
const aboutTab = document.querySelector('.about-tab');
const mobileTab = document.querySelectorAll('.mobile-menu-tab');

export const disableInnerProjectsTab = function() {
    // Disable tab elements for inner projects
    const tabProjectInner = document.querySelectorAll('.tab-project-inner');
    tabProjectInner.forEach((t) => {t.setAttribute('tabindex', '-1');});
};

export const enableProjectsContainerTab = function() {
    // Disable tab elements for projects
    const projectsTab = document.querySelectorAll('.projects-tab');
    projectsTab.forEach((p) => {p.setAttribute('tabindex', '0');});
}

export const disableProjectsContainerTab = function() {
    // Disable tab elements for projects
    const projectsTab = document.querySelectorAll('.projects-tab');
    projectsTab.forEach((p) => {p.setAttribute('tabindex', '-1');});
}

// Disable tab indexes for elements on the main site
export const disableTabWebsite = function() {
    // Disable all tab elements for main site
    websiteTab.forEach((w) => {w.setAttribute('tabindex', '-1');});
};

// Enable tab for about and disable it for projects
export const enableAboutTab = function() {
    aboutTab.setAttribute('tabindex', '0');
    disableInnerProjectsTab();
};

// Enable tab indexes for elements on the main site
export const enableTabWebsite = function() {
    // Enable all tab elements for main site
    websiteTab.forEach((w) => {w.setAttribute('tabindex', '0');});

    // Disable tab elements for projects
    disableProjectsContainerTab();
    aboutTab.setAttribute('tabindex', '-1');

    // Disable tab elements for inner projects
    disableInnerProjectsTab();
};

// Enable tab for mobile menu
export const enableMobileTab = function() {
    mobileTab.forEach((m) => {m.setAttribute('tabindex', '0');});
};

// Disable tab for mobile menu
export const disableMobileTab = function() {
    mobileTab.forEach((m) => {m.setAttribute('tabindex', '-1');});
};

// Prevent scrolling
export const preventScroll = function() {
    if (!document.body.classList.contains('prevent-scroll')){
        document.body.classList.add('prevent-scroll');
    }
};

// Enable scrolling
export const enableScroll = function() {
    if (document.body.classList.contains('prevent-scroll')){
        document.body.classList.remove('prevent-scroll');
    }
};