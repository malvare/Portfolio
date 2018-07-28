$(function() {


/*-------------------------------------------
Load Page
---------------------------------------------*/

	$('body').waitForImages({
		finished: function() {
				Website();
				$('body').jKit();
		},
		waitForAll: true
	});


/*-------------------------------------------
Ajax link page transitions
---------------------------------------------*/

	$("a.ajax-link").live("click", function(){
		$this = $(this);
		var link = $this.attr('href');
		var current_url = $(location).attr('href');

		if( link != current_url && link != '#' ) {
		$.ajax({
			url:link,
			processData:true,
			dataType:'html',
			success:function(data){
				document.title = $(data).filter('title').text();
				current_url = link;
        if (typeof history.pushState != 'undefined') history.pushState(data, 'Page', link);

          setTimeout(function(){
          $('#preloader').delay(50).fadeIn(600);
          $('html, body').delay(1000).animate({ scrollTop:  0  },1000);

					setTimeout(function(){

            $('#ajax-content').html($(data).filter('#ajax-content').html());
            $('#ajax-sidebar').html($(data).filter('#ajax-sidebar').html());

						$('body').waitForImages({
							finished: function() {
								Website();
								backLoading();
								$('.opacity-nav').delay(50).fadeOut(600);
              },
              waitForAll: true
						});
					},1000);
					},0);
			}
		});
    }
    return false;
	});


/*-------------------------------------------
When you click back arrow
---------------------------------------------*/


function backLoading() {
    $(window).on("popstate", function () {
        $('body').fadeOut('slow',function(){
            location.reload();
        });
        $('body').fadeIn();
    });
}

/*-------------------------------------------
Load Page - next Open Site
---------------------------------------------*/

function Website() {
		CheckScripts();
		Masonry();
		$('body').jKit();
		backgroundmenu();
		setTimeout(function(){
			$(".preloader").fadeOut(500);
		},2000);
		setTimeout(function(){
			$('header').fadeIn();
		},500);
}


/*-------------------------------------------
Init and check list scripts
---------------------------------------------*/

function CheckScripts() {

  $(document).ready(function(){
    preloaderCheck();
    Typewriting();
    sidebarhero();
  });

}


/*-------------------------------------------
Masonry Check Script
---------------------------------------------*/

function Masonry() {
       var $container = $('.portfolio-grid');

       $container.imagesLoaded( function(){
         $container.masonry({
           itemSelector : 'li'
         });
       });
}


/*-------------------------------------------
Multi purpose init Background menu
---------------------------------------------*/

function backgroundmenu() {

  $(document).ready(function(){
     if($("#header-fade").length) {

         $(window).scroll(function(){
            if ($(this).scrollTop() > 10) {
                $('header').fadeOut();
            } else {
                $('header').fadeIn();
            }
        });
     }

     if($("#header-white").length) {

         $(window).scroll(function(){
            if ($(this).scrollTop() > 10) {
                $('header').css( "background", "white" );
                $('header .logo > a').css( "borderBottom", "0" );

            } else {
                $('header').css( "background", "none" );
            }
        });
     }


  });

}

/*-------------------------------------------
Typewriting init script
---------------------------------------------*/

function Typewriting() {

$(document).ready(function(){
	setTimeout( function(){
		if($("#quote").length) {
        $(".typewrite2 span").typed({
            //strings: ["Developer ", "Designer "],
            strings: ["Hi! My name is Malvi. <br /> Welcome to my Portfolio. <br /> Here's a fun fact! <br /> Did you know?"],
            // <br /> Our eyes physically are a bundle of receptors that connect to the nerves at the back of the eyeballs that connect into our brain. <br /> The brain interprets the signals. <br /> However, there are no receptors in a black spot where the nerves go back to the brain, a REALLY BIG spot.<br /> Do you know what that means? It means that the very center of our vision is actually blank - constantly interpreting what we're seeing and filling in this gap.<br /> <br /> This gap needs to be filled with design that can be understood."],
            typeSpeed: 10,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });
    }
	}, 7000);
});

$(document).ready(function(){
  setTimeout( function(){
    if($("#site-type").length) {
        $(".typewrite span").typed({
            strings: ["Developer ", "Designer "],
            typeSpeed: 100,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });
    }
  }, 3000);
});
}


$("#bulb").hover(function(){
    $("#fact").toggle();
});
/*-------------------------------------------
Net canvas
---------------------------------------------*/


/*-------------------------------------------
Amazing Fade with scroll Sidebar
---------------------------------------------*/

function sidebarhero() {

  if($("#hero").length) {
    var fadeStart=100,fadeUntil=800,fading = $('#hero');

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity=0
        ;
        if( offset<=fadeStart ){
            opacity=1;
        }else if( offset<=fadeUntil ){
            opacity=1-offset/fadeUntil;
        }
        fading.css('opacity',opacity);
    });
  }
}


/*-------------------------------------------
Open Check Scription
---------------------------------------------*/

function OpenCheck() {
    setTimeout(function() {
        hidePreloader();
    }, 1000);
}


/*-------------------------------------------
Check Preloader
---------------------------------------------*/

function preloaderCheck() {
    showPreloader();
    $(window).load(function() {
        hidePreloader();
    });
}

/*-------------------------------------------
Functions Show / Hide Preloader
---------------------------------------------*/

function showPreloader() {
  $(".preloader").fadeIn("slow");
}

function hidePreloader() {
  $(".preloader").delay(2000).fadeOut("slow");
}



})//End