$(document).ready(function() {
    $("#btn_hmb").click(function(e) {
        e.preventDefault();
        end_effect();
        $('header').toggleClass('roll');
        $('.navBar').toggleClass('view_nav');
        $('.logo_min').toggleClass('view_nav');
        $('#btn_hmb').toggleClass('is-active');
        $('.projects_roll').slideUp(600);
    });
    $("#contact_roll").click(function(e) {
        e.preventDefault();
        end_effect();
        $('#projects_roll_contact').fadeIn(600);
        $('#projects_roll_about').fadeOut(600);
        $('#projects_roll_projet').fadeOut(600);
        $('#contact_roll').addClass('active_a');
        $('#about_roll').removeClass('active_a');
        $('#projet_roll').removeClass('active_a');
        setTimeout(function() {
            $('.sidebar_icons').addClass('up_down_css');
            $('form').addClass('up_down_css');
        }, 600);
    });
    $("#about_roll").click(function(e) {
        e.preventDefault();
        end_effect();
        $('#projects_roll_about').fadeIn(600);
        $('#projects_roll_contact').fadeOut(600);
        $('#projects_roll_projet').fadeOut(600);
        $('#about_roll').addClass('active_a');
        $('#contact_roll').removeClass('active_a');
        $('#projet_roll').removeClass('active_a');
        setTimeout(function() {
            $('.first__part').addClass('up_down_css');
        }, 600);
        setTimeout(function() {
            $('hr').addClass('up_down_css');
        }, 1200);
        setTimeout(function() {
            $('.second_one').addClass('up_down_css');
        }, 1800);
        setTimeout(function() {
            $('.second_two').addClass('up_down_css');
        }, 2400);
    });
    $("#projet_roll").click(function(e) {
        e.preventDefault();
        end_effect();
        $('#projects_roll_projet').fadeIn(600);
        $('#projects_roll_about').fadeOut(600);
        $('#projects_roll_contact').fadeOut(600);
        $('#projet_roll').addClass('active_a');
        $('#about_roll').removeClass('active_a');
        $('#contact_roll').removeClass('active_a');
        setTimeout(function() {
            $('.projet').addClass('up_down_css');
        }, 600);
    });

    $(".gallery_infos").hide();
    $(".gallery_thumb").mouseenter(function(e) {
        $(this).find('.gallery_infos').fadeIn(600);
        $(this).find('.infos__ p').addClass('up_down_css');
        $(this).find('.btn_project').addClass('up_down_css');
    });
    $(".gallery_thumb").mouseleave(function(e) {
        $(this).find('.gallery_infos').fadeOut(600);
        $(this).find('.infos__ p').removeClass('up_down_css');
        $(this).find('.btn_project').removeClass('up_down_css');
    });
    $('.btn_project').mouseenter(function(e) {
        e.preventDefault();
        $('.btn_project img').attr("src", "images/arrow_btn_blue.png");

    });
    $('.btn_project').mouseleave(function(e) {
        e.preventDefault();
        $('.btn_project img').attr("src", "images/arrow_btn.png");

    });
});

////////// FONCTION EFFETCS //////////////
function end_effect() {
    $('.sidebar_icons').removeClass('up_down_css');
    $('form').removeClass('up_down_css');
    $('.projet').removeClass('up_down_css');
    $('.first__part').removeClass('up_down_css');
    $('hr').removeClass('up_down_css');
    $('.second_one').removeClass('up_down_css');
    $('.second_two').removeClass('up_down_css');

}
