$(function(){
    let con1 = $('#sushi');
    let con2 = $('#curry');
    let con3 = $('#bento');
    let con4 = $('#onigiri');
    let con5 = $('#ramen');

    let l1 = con1.offset().top - 800;
    let l2 = con2.offset().top - 800;
    let l3 = con3.offset().top - 800;
    let l4 = con4.offset().top - 800;
    let l5 = con5.offset().top - 800;

    $('.food').addClass('hide');

    $(window).scroll(function(){
        if ($(this).scrollTop() > l1) {
            con1.fadeIn();
        }
        if ($(this).scrollTop() > l2) {
            con2.fadeIn();
        }
        if ($(this).scrollTop() > l3) {
            con3.fadeIn();
        }
        if ($(this).scrollTop() > l4) {
            con4.fadeIn();
        }
        if ($(this).scrollTop() > l5) {
            con5.fadeIn();
        }
    })
})

