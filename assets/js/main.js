"use strict";
jQuery(document).ready(function ($) {

    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $( '.navbar-collapse' ).find( 'a[href*="#"]:not([href="#"])' ).on( 'click', function ( ) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    $( '.dropdown-menu' ).on( 'click', function ( e ) {
        e.stopPropagation();
    });

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $("").localScroll();

    $(".faq_defaul_top_text").localScroll();

    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

// magnificPopup

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.video-link').magnificPopup({
        type: 'iframe'
    });



// slick slider active Home Page Tow
    $(".slider_home2").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
        nextArrow: "<i class='fa fa-angle-right nextprevright'></i>",
        autoplay: true,
        autoplaySpeed: 2000
    });


//    team slider home1 

    $(".main_team_slider").slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
        nextArrow: "<i class='fa fa-angle-right nextprevright'></i>",
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
//    team slider home2

    $(".main_team_slider2").slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
        nextArrow: "<i class='fa fa-angle-right nextprevright'></i>",
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


// Carousel slider 

    $('.carousel').carousel({
        interval: 2000,
        beforeUpdate: true,
        autoplay: false
    });

//---------------------------------------------
// Counter 
//---------------------------------------------

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

// main-menu-scroll


// scroll Up


    $( '.scrollup' ).on( 'click', function ( ) {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });







//Accordion 

    $("#extrafeatures_accordion").collapse({
        accordion: true,
        open: function () {
            this.addClass("open");
            this.css({height: this.children().outerHeight()});
        },
        close: function () {
            this.css({height: "0px"});
            this.removeClass("open");
        }
    });





//  Mixitup Portfolio

    $('#mixcontent').mixItUp({
        animation: {
            effects: 'fade translateX(50%)',
            reverseOut: true,
            duration: 1000
        },
        load: {
            filter: 'all'
        }
    } );


    //End


// nav menu
    $( document ).on( "scroll", function () {
        if ( $( document ).scrollTop() > 120 ) {
            $( "nav" ).addClass( "small" );
        } else {
            $( "nav" ).removeClass( "small" );
        }
    } );

});











