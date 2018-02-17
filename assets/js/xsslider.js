
;
(function ($) {

    /*-----------------------------------------------------------------*/
     /* Demo Scripts for Bootstrap Carousel and Animate.css article on SitePoint by Maria Antonietta Perna
     /*-----------------------------------------------------------------*/
    "use strict";
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elems.each(function () {
            var $this = $(this),
                    $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }
    //Variables on page load
    var $paradiseSlider = $('.carousel'),
            $firstAnimatingElems = $paradiseSlider.find('.item:first').find("[data-animation ^= 'animated']");
    //Initialize carousel
    $paradiseSlider.carousel();
    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);
    //Other slides to be animated on carousel slide event
    $paradiseSlider.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

    /*-----------------------------------------------------------------*/
    /* CAROUSEL SLIDING DURATION
     /*-----------------------------------------------------------------*/
    var slideDuration = $(".carousel").attr("data-duration");

    if (isNaN(slideDuration) || slideDuration <= 0) {
        $.fn.carousel.Constructor.TRANSITION_DURATION = 1000;
        $(".carousel-inner > .item").css({
            '-webkit-transition-duration': slideDuration + '1000ms',
            '-moz-transition-duration': slideDuration + '1000ms',
            'transition-duration': slideDuration + '1000ms'
        });
    } else {
        $.fn.carousel.Constructor.TRANSITION_DURATION = slideDuration;
        $(".carousel-inner > .item").css({
            '-webkit-transition-duration': slideDuration + 'ms',
            '-moz-transition-duration': slideDuration + 'ms',
            'transition-duration': slideDuration + 'ms'
        });
    }


    /*-----------------------------------------------------------------*/
    /* MOBILE SWIPE
     /*-----------------------------------------------------------------*/
    //Enable swiping...

    $(".xsswipe .carousel-inner").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next');
        },
        swipeRight: function () {
            $(this).parent().carousel('prev');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0
    });



})(jQuery);