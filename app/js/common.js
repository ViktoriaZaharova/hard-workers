$(document).ready(function() {
    $('.workers-slider').owlCarousel({
        items: 3,
        nav: true,
        navText: ['', ''],
        dots: false,
        loop: true,
        responsive : {
            0 : {
                items : 1
            },
            480 : {
                items : 2
            },
            576 : {
                items : 3
            }
        }
    });


    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });

    $('.list-question-answer li').on('click', function () {
        $('.list-question-answer li').removeClass('active');
       $(this).addClass('active');
    });

    function postsCarousel() {
        var checkWidth = $(window).width();
        var owlPost = $(".list-of-works");
        if (checkWidth > 1041) {
            if(typeof owlPost.data('owl.carousel') != 'undefined'){
                owlPost.data('owl.carousel').destroy();
            }
            owlPost.removeClass('owl-carousel');
        } else if (checkWidth < 1040) {
            owlPost.addClass('owl-carousel');
            owlPost.owlCarousel({
                items : 1,
                dots: true,
                loop: true,
                nav: false
            });
        }
    }

    postsCarousel();
    $(window).resize(postsCarousel);

    function postsCarousel2() {
        var checkWidth = $(window).width();
        var owlPost = $(".advantages-content");
        if (checkWidth > 769) {
            if(typeof owlPost.data('owl.carousel') != 'undefined'){
                owlPost.data('owl.carousel').destroy();
            }
            owlPost.removeClass('owl-carousel');
        } else if (checkWidth < 768) {
            owlPost.addClass('owl-carousel');
            owlPost.owlCarousel({
                items : 1,
                dots: false,
                loop: true,
                nav: true,
                navText: ['', '']
            });
        }
    }

    postsCarousel2();
    $(window).resize(postsCarousel2);


    if ($(window).width() < 650) {
        $('.logo-developer .logo-text .logo-text__description').text('Создание сайтов');
    } else {
        $('.logo-developer .logo-text .logo-text__description').text('Создание и продвижение сайтов на Wordpress');
    }


});
