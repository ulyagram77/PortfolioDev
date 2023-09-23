window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuItem = document.querySelector('.menu__list'),
        closeOverl = document.querySelector('.menu__overlay'),
        closeElem = document.querySelector('.menu__close'),
        contactsForm = document.querySelector('.contacts__form');

    //menu script

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });

    menuItem.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });

    closeOverl.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });

    //EmailJS message sender

    contactsForm.addEventListener('submit', sendEmail);

    function sendEmail(e) {
        e.preventDefault();

        (function () {
            emailjs.init('hXWAYZ3n629K_UaQV');
        })();

        let params = {
            senderName: document.querySelector('#name').value,
            fromEmail: document.querySelector('#email').value,
            message: document.querySelector('#text').value,
        };

        const serviceID = 'service_q9dkt5r';
        const templateID = 'template_x8vam2q';

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                alert('Email sended succesfully!');
            })
            .catch();
    }

    //counters realization
    const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });
});

new WOW().init();
