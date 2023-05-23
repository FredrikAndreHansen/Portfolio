import { loading, showLoading, removeLoading } from './effects.js';
import { TRANSITION_TIME, TOKEN, EMAIL, HOST } from './helpers.js';

const popupInner = document.querySelector('.popup-inner');

// Show email popup
const showPopup = function(message) {
    removeLoading();
    if (popupInner.classList.contains('hide')) {
        popupInner.classList.remove('hide');
    }
    let transitionTime = 5000;

    // Clear html
    popupInner.innerHTML = '';

    // Success, if not then show the error message
    if (message === 'OK') {
        popupInner.innerHTML = `
            <img class="skill-icon" src="/icons/paperairplane.svg" alt="Email sent icon" />
            <p class="white-p-mid">Thank you for your email</p>
            <p class="white-p">I will get back to you as soon as I can!</p>`;
    } else {
        popupInner.innerHTML = `
            <img class="skill-icon" src="/icons/error.svg" alt="Error icon" />
            <p class="white-p-mid">Something went wrong!</p>
            <p class="white-p">${message}</p>
            <p class="white-p">Please try again later!</p>`;
            transitionTime = 10000;
    }

    // Remove popup
    setTimeout(() =>{
        removePopup();
    }, transitionTime);
};

// Remove popup
export const removePopup = function() {
    if (!popupInner.classList.contains('hide')) {
        removeLoading();
        popupInner.classList.add('hide');
        setTimeout(() =>{popupInner.innerHTML = '';}, TRANSITION_TIME);   
    }
};

export const sendEmail = function(name, email, message) {
    loading.style.zIndex = 2;
    showLoading();
    Email.send({
        Host: HOST,
        Username: EMAIL,
        Password: TOKEN,
        To: EMAIL,
        From: EMAIL,
        Subject: `FPH Portfolio - From: ${name}`,
        Body: `
            From: ${name}<br>
            Email: ${email}<br>
            -----------------------<br>
            ${message}`,
    }).then((message) => {
        showPopup(message);
    }
    ).catch((err) => {
        showPopup(err);
    });
};