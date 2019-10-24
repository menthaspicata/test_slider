$(document).ready(function () {

    var $slick = $('.slider');

    function slickForPhones() {
        $slick.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            dots: true,
            arrows: false,
            appendDots: $(".slider__buttons_dot"),
            customPaging: function (slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<span></span>';
            }
        });
    }

    function slickForTablets() {
        $slick.slick({
            arrows: true,
            rows: 2,
            slidesPerRow: 2,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            appendDots: $(".slider__buttons_dot"),
            customPaging: function (slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<span></span>';
            },
            prevArrow: $('.slider__buttons_prev'),
            nextArrow: $('.slider__buttons_next')
        });
    }

    function slickForPC() {
        $slick.slick({
            infinite: false,
            rows: 2,
            slidesPerRow: 3,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            appendDots: $(".slider__buttons_dot"),
            customPaging: function (slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<span></span>';
            },
            arrows: true,
            prevArrow: $('.slider__buttons_prev'),
            nextArrow: $('.slider__buttons_next')
        });

    }

    function checkSize() {
        var width = window.innerWidth || document.body.clientWidth;
        if (width <= 600) {
            $slick.filter('.slick-initialized').slick('unslick');
            slickForPhones();

        } else if (width > 600 && width <= 1160) {
            $slick.filter('.slick-initialized').slick('unslick');
            slickForTablets();

        } else {
            $slick.filter('.slick-initialized').slick('unslick');
            slickForPC();
        }
    }

    checkSize();
    jQuery(window).resize(checkSize);
    $(window).on( "orientationchange", checkSize);
});
