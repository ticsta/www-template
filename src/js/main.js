$(function() {
  $('a.scroll-to').click(function(evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    $.scrollTo(event.target.hash, 250);
    return false;
  });
});
