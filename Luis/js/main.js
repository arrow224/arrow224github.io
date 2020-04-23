$(document).ready(function () {

    var slowlyScroll = function () {

        $('a[href^="#"]').click(function () {
            var id = $(this).attr('href');
	    console.log(id);
            height = $(id).offset().top;
            $('html, body').animate({ scrollTop: height }, 1500);
        });
    }

    var scrolling = function () {
        var btn = $('.btn-scroll');
        
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.about').offset().top) {
                btn.fadeIn('slow', 'linear');
                if ($(window).scrollTop() >= $('.testimonials__bottom').offset().top - 280) {
                    btn.css({ 'color': '#fff', 'border-color': '#fff' })
                } else {
                    btn.css({ 'color': '#4d4d4d', 'border-color': '#4d4d4d' })
                }
            } else {
                btn.fadeOut('slow', 'linear');

            }
        });

        btn.click(function () {
            $('html, body').animate({ scrollTop: 0 }, 1500);
        });
    }

    var showHiden = function () {
        var item = $('.portfolio-hiden');
        var clicker = false;

        $('.btns-portfolio').on('click', function (event) {
            event.preventDefault();
            item.fadeToggle(1500, 'linear');
            if (clicker == false) {
                $('.btns-portfolio').text('hide');
                clicker = true;
            } else{
                $('.btns-portfolio').text('load more');
                clicker = false;
            }
            
        });
    }


    showHiden();
    scrolling();
    slowlyScroll();

    $('.testimonials__body').slick({
        arrows: false,
        dots: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });

});