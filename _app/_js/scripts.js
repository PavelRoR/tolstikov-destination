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
		var clock;
		var dates = new Array(
			new Date("February 21, 2020 00:00 UTC+3"),
			new Date("February 22, 2020 00:00 UTC+3")
		);

		var currentDate = new Date();

		var sale1 = {
			name: $('#sale-1'),
			saleText: new Array('500р.')
		};
		var sale2 = {
			name: $('#sale-2'),
			saleText: new Array('1 000р.')
		};

		var today1 = {
			name: $('#today-1'),
			todayText: new Array('7 900р.')
		};
		var today2 = {
			name: $('#today-2'),
			todayText: new Array('15 900р.')
		};

		var link1 = {
			name: $('#link-1'),
			linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4503&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4504&clean=true&lg=ru')
		};
		var link2 = {
			name: $('#link-2'),
			linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4506&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4507&clean=true&lg=ru')
		};


		if (currentDate < dates[0]) {
			var futureDate = dates[0];
			var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
			clock = $('.clock').FlipClock(diff, {
				clockFace: 'HourlyCounter',
				countdown: true,
				language: 'ru',
				callbacks: {
					stop: function () {
						$('.clock-stop').addClass("alert-danger");
						("alert-danger");
						$('.clock-stop').html("Скидка уменьшилась!");
						sale1.name.text(sale1.saleText[0]);
						sale2.name.text(sale2.saleText[0]);
						today1.name.text(today1.todayText[0]);
						today2.name.text(today2.todayText[0]);
						link1.name.attr('href', link1.linkText[0]);
						link2.name.attr('href', link2.linkText[0]);
					}
				}
			});
		} else {
			var futureDate = dates[1];
			var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
			clock = $('.clock').FlipClock(diff, {
				clockFace: 'HourlyCounter',
				countdown: true,
				language: 'ru',
				callbacks: {
					stop: function () {
						$('.prepayment, .timer,  .cost-sale, .cost-today').remove();
						$('.cost-full span').addClass('unbroken');
						link1.name.attr('href', link1.linkText[1]);
						link2.name.attr('href', link2.linkText[1]);
					}
				}
			});
		}
	});
	/*Конец документа*/
});