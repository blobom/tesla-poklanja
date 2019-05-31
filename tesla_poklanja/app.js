(function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.onclick = () => {
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
    }
})();

function get_action(form) {
    var v = grecaptcha.getResponse();
    if (v.length == 0) {
        document.getElementById('captcha').innerHTML = "You can't leave Captcha Code empty";
        return false;
    }
    else {
        document.getElementById('captcha').innerHTML = "Captcha completed";
        return true;
    }
}