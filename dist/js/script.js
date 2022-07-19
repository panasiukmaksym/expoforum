$(function(){

    $('.overflou__close').click(function(){
        $('.overflou').fadeOut(500);
    });

    $('.header__menu').click(function(){
        $('.overflou').fadeIn(500);
    });

    $('body').click(function(e){
        if ( e.target.className == 'overflou' ) {
            $('.overflou').fadeOut(500);
        }
    });

    $('.first__card .first__arrow').each(function(item){
        $(this).click(function(){
            $($('.first__descr')[item]).slideToggle(1000);
        });
    });

    $('.first__card').each(function(){
        $(this).click(function(){
            if ( $(this).css('background-color') !== 'rgb(0, 0, 0)' ) {
                $(this).css('background', 'black');
            } else {
                $(this).css('background', 'orange');
            }
        });
    });
});