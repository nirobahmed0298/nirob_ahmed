(function($){
    'use strict';
    // Mobile Menu //
    $(".menuicon").on('click',function(){
        $(".navlist").animate({left:0})
    });
    $(".x-mark i").on('click',function(){
        $(".navlist").animate({left:-250})
    });
    })(jQuery);