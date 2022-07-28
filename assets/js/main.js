$(document).ready(function() {
    $("#hm__menu__btn_link").click(function(event) {
        event.preventDefault();
        $('.hm__nav').toggleClass('hm__nav__triggered');
        $('.fa-bars').toggleClass('fa-times');
        $('.hm__menu__btn_link').toggleClass('hm__menu__btn__trig');
        // $('.menu_wrd').toggleClass('menu_wrd_trigg');

    })


});