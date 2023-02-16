$(function(){
    $('#nav li').hover(function(){
        $(this).children('ul').stop(false, true).fadeIn(500);
    }, function(){
        $(this).children('ul').stop(false, true).fadeOut(500);
    });
});
