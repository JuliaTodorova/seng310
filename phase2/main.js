// Author Björn Ali Göransson
// Date created: Jun 25 '16 at 15:10
// Title: Smooth scrolling when clicking an anchor link
// URL Code adapted from: http://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
// Date accessed: Feb 8th 2017

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});