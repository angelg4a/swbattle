
$(document).ready(function(){
 $(".chosen-select").chosen({no_results_text: "Oops, nothing found!"}); 
  /*$('.boton-f').bind('click', function(){
        validarEmail($('.inpt-red').val());
    });
*/
var hash = window.location.hash;


$(".tab_content").hide(); 
$("ul.tabs li:first").addClass("active").show(); 
$(".tab_content:first").show(); 
if (hash) {
    $(".tab_content:first").hide();
    $("ul.tabs li").removeClass("active"); 
    $(hash.replace("#",".")).addClass("active");
$(hash).fadeIn(); 
}
$("ul.tabs li").click(function() { 
    $("ul.tabs li").removeClass("active"); 
    $(this).addClass("active"); 
    $(".tab_content").hide(); 
    var activeTab = $(this).find("a").attr("href"); 
    $(activeTab).fadeIn(); 
  history.pushState(null, null, $(this).find("a").attr("href"));
   // window.location.hash = $(this).find("a").attr("href");
     //e.preventDefault();
     return false;
});





var pathArray = window.location.pathname.split( '/' );
var secondLevelLocation = pathArray[0];
var newPathname = "";
var name_page
for ( i = 0; i < pathArray.length; i++ ) {
  newPathname = pathArray[i];
  if(newPathname == 'prizes'){
    name_page = newPathname;
  }
}
$('.slug').each(function(){
    if(name_page != "" && newPathname == 'prizes'){
        // window.location = window.location.pathname+"/"+$(this).data('name');        
    }
    if($(this).data('name') == newPathname){
        $(this).addClass('active');
        $(this).after('<div class="triangulo_sup"></div>');
    }else{
        $(this).removeClass('active');
    }
});





  $window = $(window);
    $window.scroll(function() {
        if ($(window).scrollTop()>225) {
            $('.sticky').css('margin-top', $(window).scrollTop()+'px');
        };
        
    });
    $('.hsclctn').hover(function(){
        $('.hscl').addClass('hdn').removeClass('shw');
        $('.hsclshrd').addClass('shw').removeClass('hdn');
    },function() {
   
    $('.hsclshrd').addClass('hdn').removeClass('shw');
     $('.hscl').addClass('shw').removeClass('hdn');
  });
           $('.scndsticky').hover(function(){
        $('.ctnrstyc').addClass('hdn').removeClass('shw');
        $('.sharedsticky').addClass('shw').removeClass('hdn');
    },function() {
   
    $('.sharedsticky').addClass('hdn').removeClass('shw');
     $('.ctnrstyc').addClass('shw').removeClass('hdn');
  });
});
$('.banner').css('height', ($(window).height()-73));

$(function() {
    $('.banner').unslider({
        speed: 1500,               //  The speed to animate each slide (in milliseconds)
        delay: 8000,              //  The delay between slide animations (in milliseconds)
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });
});
var op_dat_st ="<option value='1'>Select a weekend</option>";
$(document).ready(function(){
    $('.top-ctn').click(function() {
       $('body,html').animate({ scrollTop: 0 });
    });
    $('.frststicky').click(function() {
       $('body,html').animate({ scrollTop: 0 }); 
    });
    if($('.img-ue').length > 0){
        var top = $(this).find('.img-ue').position().top;
            var top_menu = ($(this).find('#menu-second').position().top)-40;
            $('.arrows').click(function() {
               $('body,html').animate({ scrollTop: top_menu });
            });
            
            var open=true;
            $window = $(window);
            $window.scroll(function() {
               

                if (($(window).scrollTop()>=top_menu)&&(open)){

                    $('#menu-second').addClass('fixed');

                    open=false;

                }
                if (($(window).scrollTop()<top_menu)&& (!open)){
                    $('#menu-second').removeClass('fixed');
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
        }
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
        closeEffect : 'none',
        type: "iframe",
    iframe : {
      preload: false
    }
    });
    
    generate_dd();
    check_row_empty();
});

    var flag, date, auxdate='', option_city="<option value=''>Type city name</option>", option_date="<option value='1'>Select a weekend</option>",country_selected;
    $('#country').change(function(){
        $('.cty-ft').show(500);
        country_selected = $("#country option:selected").val();
        $('.m-btm').each(function(){
            acr_country = $(this).data("name");
            if(acr_country != country_selected &&  country_selected != ""){
               $('.m-btm[data-name="'+acr_country+'"]').hide(500);
            }else{
                $('.m-btm[data-name="'+acr_country+'"]').show(500);
                var dates = [];
                $('.m-btm[data-name="'+acr_country+'"]').find('.cty-ft').each(function(){
                    city = $(this).text();
                    url = $(this).find('.cty-url').attr('href');
                    date = $(this).find('.cty-date').val();
                    option_city += '<option value = '+url+' class="center">'+city+'</option>';
                    dates.push(date);
                });
                 if(country_selected!=""){
                    var uniqueDates = [];
                    $.each(dates, function(i, el){
                        if($.inArray(el, uniqueDates) === -1){
                            uniqueDates.push(el);
                             option_date += '<option value = "">'+el+'</option>';
                        }
                    });
                    $('#date').html(option_date);
                }
            }
            
        });
        $('#city').html(option_city);
        if(country_selected==""){
           var dates = [];
            var aux = 0;
           $('#date').children().each(function(){
                if(aux != 0){
                    dates.push($(this).text());
                }else{
                    aux = 1;
                }
            });
            $('#date').html(op_dat_st);
            check_row_empty();
        }
        option_city="<option value=''>Type city name</option>";
        option_date="<option value='1'>Select a weekend</option>";
        auxdate='';
         $(".chosen-select").trigger("chosen:updated");
         country_selected = "";
    });

    $('#date').change(function(){
        var date_selected = $("#date option:selected").text();
        var date_selectedval = $("#date option:selected").val();
        $('.cty-ft').each(function(){
            date = $(this).find('.cty-date').val();
            name_city = $(this).data("name");
            if(date_selected != date && date_selectedval != "1"){
                $('.cty-ft[data-name="'+name_city+'"]').hide(500);
                $('.cty-ft[data-name="'+name_city+'"]').addClass('aux');
            }else{
                 $('.cty-ft[data-name="'+name_city+'"]').show(500);
                 $('.cty-ft[data-name="'+name_city+'"]').removeClass('aux');
            }
            auxdate = date;
        });
        check_row_empty();
    });

function validarEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) ){
        $('.error-email').slideDown();
    }else{
        $('.error-email').slideUp();
    }
}

function generate_dd(){
    var dates = [];
    var aux = 0;
    $('#date').children().each(function(){
        if(aux != 0){
            dates.push($(this).text());
        }else{
            aux = 1;
        }
    });
    dates.sort()
    var uniqueDates = [];
    $.each(dates, function(i, el){
        if($.inArray(el, uniqueDates) === -1){
            uniqueDates.push(el);
             op_dat_st += '<option value = "">'+el+'</option>';
        }
    });
   $('#date').html(op_dat_st);
     $(".chosen-select").trigger("chosen:updated");
}

function check_row_empty(){
    $('.m-btm').each(function(){
       // console.log($(this).find('.cty-ft').text());
        if($(this).find('.cty-ft').text() == "")
            $(this).css('display','none');
        if($(this).find('.cty-ft').hasClass('aux')){
            console.log('aaa');
            $(this).css('display','none');
        }
    });
}