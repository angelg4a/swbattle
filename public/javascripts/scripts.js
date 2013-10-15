$(document).ready(function(){
 $(".chosen-select").chosen({no_results_text: "Oops, nothing found!"}); 
});
$(function() {
    $('.banner').unslider({
        // speed: 1500,               //  The speed to animate each slide (in milliseconds)
        delay: 3000,              //  The delay between slide animations (in milliseconds)
        complete: function() {},  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });
});

$(document).ready(function(){
    $window = $(window);
    $('.img-ue').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $window.scroll(function() {
            var yPos = -($window.scrollTop() / 10); 
             
            // Put together our final background position
            var coords = '0% '+ ($(this).scrollTop() / 7)  + '%';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });

    $(".video").click(function() {
        $.fancybox({
            'padding'       : 0,
            'autoScale'     : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'title'         : this.title,
            'width'         : 640,
            'height'        : 385,
            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'          : 'swf',
            'swf'           : {
            'wmode'             : 'transparent',
            'allowfullscreen'   : 'true'
            }
        });

        return false;
    });    
});

$(document).ready(function() {
    $(".various").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });
});