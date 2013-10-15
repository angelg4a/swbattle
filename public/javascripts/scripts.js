$(document).ready(function(){
 $(".chosen-select").chosen({no_results_text: "Oops, nothing found!"}); 
});
$(function() {
    $('.banner').unslider({
        speed: 1000,               //  The speed to animate each slide (in milliseconds)
        delay: 8000,              //  The delay between slide animations (in milliseconds)
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });
});

$(document).ready(function(){

	var top = $(this).find('.img-ue').position().top;
	var top_menu = $(this).find('#menu-second').position().top;
	$('.arrows').click(function() {
       $('body').animate({ scrollTop: top_menu });
    });
	var open=true;
    $window = $(window);
    $window.scroll(function() {
    	if (($(window).scrollTop()>=top_menu)&&(open)){

    		$('#menu-second').addClass('fixed').slideDown('600').height(50);

    		open=false;

    	}
    	if (($(window).scrollTop()<top_menu)&& (!open)){
    		$('#menu-second').removeClass('fixed').height(1);
    		open= true;
    	}
    });





    $('.img-ue').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $window.scroll(function() {
        	if ($(window).scrollTop()>(top-100)) {
            
            var coords = '0% '+ (($(this).scrollTop()-(top-95))/ 6)  + '%';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }

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