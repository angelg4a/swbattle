$(document).ready(function(){
 $(".chosen-select").chosen({no_results_text: "Oops, nothing found!"}); 
  $('.boton-f').bind('click', function(){
        validarEmail($('.inpt-red').val());
    });
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
    $('.top-ctn').click(function() {
       $('body,html').animate({ scrollTop: 0 });
    });
    $('.frststicky').click(function() {
       $('body,html').animate({ scrollTop: 0 }); 
    });
    if($(this).find('.img-ue').lenght > 0){
        var top = $(this).find('.img-ue').position().top;
        var top_menu = $(this).find('#menu-second').position().top;
        $('.arrows').click(function() {
           $('body,html').animate({ scrollTop: top_menu });
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
    }

    $('.img-ue').each(function(){
        var $bgobj = $(this); // assigning the object
        $window = $(window);
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


    $(".various").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none',
        type: "iframe",
    iframe : {
      preload: false
    }
    });


});

    var flag, date, auxdate='', option_city="<option value=''>Type city name</option>", option_date="<option value=''>Select a date range</option>";
    $('#country').change(function(){
        $('.cty-ft').show(500);
        var country_selected = $("#country option:selected").val();
        $('.m-btm').each(function(){
            acr_country = $(this).data("name");
            if(acr_country != country_selected &&  country_selected != ""){
               $('.m-btm[data-name="'+acr_country+'"]').hide(500);
            }else{
                $('.m-btm[data-name="'+acr_country+'"]').show(500);
                $('.m-btm[data-name="'+acr_country+'"]').find('.cty-ft').each(function(){
                    city = $(this).text();
                    url = $(this).find('.cty-url').attr('href');
                    date = $(this).find('.cty-date').val();
                    option_city += '<option value = '+url+'>'+city+'</option>';
                    if(auxdate != date){
                        option_date += '<option value = "">'+date+'</option>';
                    }
                    auxdate = date;
                });
            }
        });
        $('#city').html(option_city);
        $('#date').html(option_date);
        option_city="<option value=''>Type city name</option>";
        option_date="<option value=''>Select a date range</option>";
        auxdate='';
         $(".chosen-select").trigger("chosen:updated");
    });

    $('#date').change(function(){
        var date_selected = $("#date option:selected").text();
        $('.cty-ft').each(function(){
            date = $(this).find('.cty-date').val();
            name_city = $(this).data("name");
            if(date_selected != date && date_selected != "Select a date range"){
                $('.cty-ft[data-name="'+name_city+'"]').hide(500);
            }else{
                 $('.cty-ft[data-name="'+name_city+'"]').show(500);
            }
            auxdate = date;
        });
        $('.m-btm').each(function(){
            $(this).find('.cty').each(function(){
                $(this).find('.cty-ft').each(function(){
                    console.log($(this).is(':hidden'));
                    if($(this).is(':hidden') == false) {
                        flag = 1;
                    }
                    console.log(flag+'a');
                });
                console.log(flag+'b');
                if(flag == 1){
                    $(this).find('.cty').hide();
                    flag = 0;
                }
            });
            console.log(flag+'c');
        });
    });

function validarEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) ){
        $('.error-email').slideDown();
    }else{
        $('.error-email').slideUp();
    }
}