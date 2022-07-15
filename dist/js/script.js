$(function(){
    var visi = [true, true, true, true, true];
    
    $('.first__img').each(function(i, item){
        console.log(i);
        $(this).on('click', function(){
            $('.first__descr').fadeOut(1000);
        });
    });
});