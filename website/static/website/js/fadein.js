$(document).ready(function(e) {
    var $input = $('#refresh');

    $input.val() == 'yes' ? location.reload(true) : $input.val('yes');
});
$(document).ready(function() {
    $('.fade').each(function(){
        if($(this).css('display') != 'none')
        {
        
        var top_of_object = $(this).position().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
         
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > top_of_object + 100){
                
            $(this).animate({'opacity':'1'},0);
                    
        }
        else{
            $(this).fadeTo('fast', 0);
        }
        }
    });
});
$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $(".fade").each( function(i){
            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object + 100){
                $(this).animate({'opacity':'1'},500);
            }  
        }); 
    
    });
    
});