$(document).ready(function() {

    // effet fondu en entrée à l'ouverture de la page
    $('body').fadeIn(2000);

    // effet fondu en sortie de la page entière par un clique sur un bouton
    $('.btn_project').click(function(event) {
    event.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(2000, newpage);
    });
    function newpage() {
    window.location = newLocation;
    }
    $('.logo_link').click(function(event) {
    event.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(2000, newpage);
    });
    function newpage() {
    window.location = newLocation;
    }
});
