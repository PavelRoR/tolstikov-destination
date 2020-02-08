//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend flipclock.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}

$(document).ready(function () {
    /* Якорь */
    $("a[href='#prices']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    $(function () {
        $("[data-fancybox]").fancybox({
            buttons: [
                'slideShow',
                'share',
                'zoom',
                'fullScreen',
                // 'download',
                'close'
            ],
            speed: 330,
            loop: true,
            opacity: "auto",
            // autoScale: true,
            mouseWheel: true,
            transitionEffect: 'slide'
        });
    });
    $(function () {
        /* Таймер */
        var clock;
        var futureDate = new Date("January 28, 2020 00:00 AM UTC+3");
        var currentDate = new Date();
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

        function dayDiff(first, second) {
            return (second - first) / (1000 * 60 * 60 * 24);
        }
        if (dayDiff(currentDate, futureDate) < 100) {
            $('.clock').addClass('twoDayDigits');
        } else {
            $('.clock').addClass('threeDayDigits');
        }
        if (diff < 0) {
            diff = 0;
            // $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4403&clean=true&lg=ru');
            // $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4405&clean=true&lg=ru');
            // $('.prepayment, .timer,.cost-sale, .cost-today').remove();
            // $('.cost-full span').addClass('unbroken');
        }
        clock = $('.clock').FlipClock(diff, {
            clockFace: 'HourlyCounter',
            countdown: true,
            language: 'ru',
            callbacks: {
                stop: function () {
                    // $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4403&clean=true&lg=ru');
                    // $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4405&clean=true&lg=ru');
                    // $('.prepayment, .timer,.cost-sale, .cost-today').remove();
                    // $('.cost-full span').addClass('unbroken');
                }
            },
        });
    });
    /*Конец документа*/
});