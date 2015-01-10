$(function() {
    $('#full-menu').bind('click', 'ul li a', function(event) {
        $.scrollTo(event.target.hash, 250);
    });
});