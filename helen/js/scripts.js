/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/

// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    if (listHoursArray.length > 0) {
        listHoursArray[new Date().getDay()].classList.add('today');
    }
});


window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const navbar = document.querySelector("#mainNav");

    // Efeito: cabeçalho diminui ao rolar
    if (window.scrollY > 50) {
        header.style.opacity = "0.8";
        header.style.transform = "scale(0.98)";
        if (navbar) navbar.style.backgroundColor = "rgba(0,0,0,0.85)";
    } else {
        header.style.opacity = "1";
        header.style.transform = "scale(1)";
        if (navbar) navbar.style.backgroundColor = "transparent";
    }
});
