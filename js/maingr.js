/**
 * If the user scrolls down, the header will be hidden. If the user scrolls up, the header will be
 * shown.
 * @returns false if the header is not found.
 */
var lastScrollTop = 0;

function scrollHeader() {
	var $header = $('.header');
	if ($header.length) {
		var st = $(this).scrollTop();

		if (st > 0) {
			$header.addClass('fixed');
		} else {
			$header.removeClass('fixed');
		}

		// if (st <= 2) {
		// 	$header.css({
		// 		top: '0'
		// 	}); //.show();
		// } else if (st < lastScrollTop) {
		// 	$header
		// 		.css({
		// 			top: '0'
		// 		})
		// 		.show();
		// } else {
		// 	$header.css({
		// 		top: '-250px'
		// 	}); //.hide();
		// }

		lastScrollTop = st;
	} else {
		return false;
	}
}

function mobileScrollHeader() {
	var $header = $('.header');
	if ($header.length) {
		var st = $(this).scrollTop();

		// if (st == 0) {
		// 	$header.css({
		// 		top: '0'
		// 	}); //.show();
		// } else {
		// 	$header.css({
		// 		top: '-250px'
		// 	}); //.hide();
		// }

		if (st <= 2) {
			$header.css({
				top: '0'
			}); //.show();
		} else if (st < lastScrollTop) {
			$header
				.css({
					top: '0'
				})
				.show();
		} else {
			$header.css({
				top: '-250px'
			}); //.hide();
		}

		lastScrollTop = st;
	} else {
		return false;
	}
}

function gioithieuLink() {
	var wrapper = $('.home-gioithieu-nav');
	var btn = wrapper.find('.gioithieu-navlink');
	var li = wrapper.find('li');



	if (btn.length) {
		var content = $('.home-gioithieu-section-wrapper');
		var contentH = content.outerHeight();
		var content_pos = content.offset().top;

		btn.on('click', function (e) {
			var link = $(this).attr('href');
			var link_pos = $(link).offset().top;
			e.preventDefault();
			li.removeClass('active');
			$(this).parent().addClass('active');

			$('html, body').animate(
				{
					scrollTop: link_pos
				},
				700,
				'linear'
			);
		});

		$(window).scroll(function () {
			let scrollTop = $(window).scrollTop();

			btn.each(function (index, value) {
				let href = $(value).attr('href');
				let target = $(href);
				let targetOffSet = target.offset().top;

				if (scrollTop > targetOffSet - 100) {
					li.removeClass('active');
					$(this).parent().addClass('active');
				}
			});

			if ($(window).width() >= 1200 && wrapper.offset().top >= contentH - 50) {
				wrapper.css({
					'opacity': '0',
					'pointer-events': 'none'
				});
			} else if ($(window).width() < 1200 && wrapper.offset().top + wrapper.outerHeight() >= contentH + content_pos - 150) {
				wrapper.css({
					'opacity': '0',
					'pointer-events': 'none'
				});
			} else {
				wrapper.css({
					'opacity': '1',
					'pointer-events': 'all'
				});
			}
		});
	} else {
		return false;
	}
}

function studyAnimated() {
	var wrapper = $('.detail-study-animated');
	var target = wrapper.find('.detail-study-image--item');
	var endpoint = wrapper.find('.study-level-gr');

	if (wrapper.length) {
		target.on('mouseenter', function () {
			var link = $(this).attr('data-target');
			$('#' + link).addClass('hovered');
		});

		target.on('mouseleave', function () {
			endpoint.removeClass('hovered');
		});
	} else {
		return false;
	}
}

function openMenuMb() {
	var target = $('.hamburger');
	if (target.length) {
		target.on('click', function () {
			$('.header-mb').find('.header-content').addClass('show');
			$('.header-mb').find('.backdrop-overlay').addClass('show');
		});
	}
}

function closeMenuMb() {
	var target = $('.mb-close-menu');
	if (target.length) {
		target.on('click', function () {
			$('.header-mb').find('.header-content').removeClass('show');
			$('.header-mb').find('.backdrop-overlay').removeClass('show');
		});

		$('.backdrop-overlay').on('click', function () {
			$('.header-mb').find('.header-content').removeClass('show');
			$(this).removeClass('show');
		})
	}
}

function searchInput() {
	var $wrapper = $('.header-search');

	if ($wrapper.length && $(window).width() >= 1200) {
		var $target = $wrapper.find('input');
		$target.each(function (index, value) {
			$(value).on('click', function () {
				if ($(this).val() == '' && !$(this).hasClass('show')) {
					$(this).addClass('show');
				} else if ($(this).val() !== '' && !$(this).hasClass('show')) {
					$(this).addClass('show');
				}
			});
		});

		$(document).on('click', function (e) {
			if ($(e.target).closest('.header-search').length === 0) {
				$target.removeClass('show');
			}
		});
	}
}

/**
 * If the element has the class 'outside-container-left' or 'outside-container-right', then set the
 * width of the element to the width of the browser minus the space on either side of the container,
 * and set the margin to the space on either side of the container.
 * @returns false.
 */
function outsideContainer() {
	var container;
	var broswerW = $(document).width();
	var space;
	var layoutW;
	var spaceL = $('.outside-container-left');
	var spaceR = $('.outside-container-right');

	if (spaceL.length) {
		if (spaceL.hasClass('outside-1170') || $(window).width() < 1680) {
			console.log(true);
			container = 1170;
		} else {
			container = 1500;
			console.log(false);
		}

		space = Math.floor((broswerW - container) / 2);
		layoutW = broswerW - space;

		if ($(window).width() > 1200) {
			spaceL.each(function () {
				$(this).css({
					width: layoutW,
					'margin-left': space
				});
			});
		}
	}

	if (spaceR.length) {
		if (spaceR.hasClass('outside-1170') || $(window).width() < 1680) {
			console.log(true);
			container = 1170;
		} else {
			container = 1500;
			console.log(false);
		}

		space = Math.floor((broswerW - container) / 2);
		layoutW = broswerW - space;

		if ($(window).width() > 1200) {
			spaceR.each(function () {
				$(this).css({
					width: layoutW,
					'margin-right': space
				});
			});
		}
	}
}

/* This function is used to scroll to the element that has the same id as the href of the clicked element. */
function navScrollToActive(elementDOM) {
	let navScrollClick = $(elementDOM);

	navScrollClick.click(function (e) {
		e.preventDefault();
		let thisHref = $(this).attr('href');
		let elementIndex = $(thisHref);
		let elementIndexOffset = elementIndex.offset().top - 120;

		navScrollClick.removeClass('active');
		$(this).addClass('active');

		$('html, body').animate(
			{
				scrollTop: elementIndexOffset
			},
			'linear'
		);
	});

	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();

		navScrollClick.each(function (index, value) {
			let thisHref = $(value).attr('href');
			let element = $(thisHref);
			let elementOffset = element.offset().top;

			if (scrollTop > elementOffset - 350) {
				navScrollClick.not(this).removeClass('active');
				$(this).addClass('active');
			}
		});
	});
}

const iconInterval = () => {
	let wrapper = document.querySelector('#getInterval');
	let item = document.querySelectorAll('#getInterval img');

	const runInterval = () => {
		for (var i = 0; i < item.length; i++) {
			setTimeout(() => {
				item[0].classList.add('active');
			}, 0);

			setTimeout(() => {
				item[0].classList.remove('active');
			}, 500);

			setTimeout(() => {
				item[1].classList.add('active');
			}, 1000);

			setTimeout(() => {
				item[1].classList.remove('active');
			}, 1500);

			setTimeout(() => {
				item[2].classList.add('active');
			}, 2000);

			setTimeout(() => {
				item[2].classList.remove('active');
			}, 2500);
		}
	};

	const runningUp = setInterval(runInterval, 3000);
};

const fixedsocialPopup = () => {
	const itemclicked = document.querySelector('.js-item-single');

	itemclicked.addEventListener('click', (e) => {
		let clicked = e.currentTarget;

		clicked.nextElementSibling.classList.add('active');
	});

	var ignoreMe = document.querySelector('#fixedSocialList');
	window.addEventListener('mouseup', function (event) {
		if (
			event.currentTarget != ignoreMe &&
			event.currentTarget.parentNode != ignoreMe
		) {
			ignoreMe.classList.remove('active');
		}
	});
};

function triggerFixedEle() {
	var sideEle = $('#sidefixed-ele');
	var footerEle = $('#fixedScreen');
	var wHeight = $(window).height();

	if (sideEle.length) {
		let eleoffset = sideEle.offset().top;
		sideEle.css({
			opacity: '0'
		});

		$(window).scroll(function () {
			let scrollTop = $(window).scrollTop();

			if (scrollTop > eleoffset - 100) {
				sideEle.addClass('fixed');
			} else {
				sideEle.removeClass('fixed');
			}

			if (scrollTop > wHeight / 3) {
				sideEle.css({
					opacity: '1'
				});
			} else {
				sideEle.css({
					opacity: '0'
				});
			}
		});
	}

	if (footerEle.length) {
		var backTop = footerEle.find('#backTop');

		backTop.on('click', function () {
			$('html, body').animate(
				{
					scrollTop: 0
				},
				'linear'
			);
		});

		$(window).scroll(function () {
			let scrollTop = $(window).scrollTop();

			if (scrollTop > wHeight - 100) {
				footerEle.addClass('show');
			} else {
				footerEle.removeClass('show');
			}
		});
	}
}

function animateHomeProgram() {
	var wrapper = $('.program-item-wrapper');
	var content = wrapper.find('.program-content--inner');

	if (wrapper.length) {
		gsap.set($('#program-2').find('.program-image'), {
			backgroundPosition: '40% 50%'
		});
		gsap.set($('#program-3').find('.program-image'), {
			backgroundPosition: '20% 50%'
		});

		content.each(function (i, el) {
			var id = $(el).parents('.program-item-wrapper').attr('id');
			var content = $('#' + id).find('.program-content');
			var content_main = $('#' + id).find('.content-main');
			var btn = $('#' + id).find('.btn-pill');
			var icon = $('#' + id).find('.content-head-ic');
			var background = $('#' + id).find('.program-background');
			var bigImg = $('#' + id).find('.program-image');
			var offset = $(el).parents('.program-item-wrapper').offset().left;

			var percent = (offset * 100) / $(window).width();

			var tl_fw = gsap.timeline({ paused: true });

			if ($(window).width() > 992) {
				gsap.set($('.gf-home--program-wrapper .content-main'), {
					height: 0,
					opacity: 0,
					margin: '0 0 0 0',
					pointerEvents: 'none',
					autoAlpha: 0,
					ease: 'Linear'
				});
				gsap.set($('.gf-home--program-wrapper .btn-pill'), {
					opacity: 0,
					margin: '0 auto 0 auto',
					pointerEvents: 'none',
					autoAlpha: 0,
					ease: 'Linear'
				});
				gsap.set($('.gf-home--program-wrapper .program-content'), {
					width: 100 / 3 + '%'
				});
				gsap.set($('.gf-home--program-wrapper .program-background'), {
					width: 100 / 3 + '%'
				});
				gsap.set($('.gf-home--program-wrapper .program-image'), {
					width: 100 / 3 + '%'
				});
				gsap.set($(el).parents('.program-item-wrapper'), {
					left: percent + '%'
				});
			}

			if ($(window).width() <= 1366) {
				tl_fw
					.to(content_main, {
						height: 'auto',
						opacity: 1,
						margin: '20 0 0 0',
						pointerEvents: 'all',
						duration: 0.3,
						autoAlpha: 1
					})
					.to(
						btn,
						{
							opacity: 1,
							margin: '20 auto 0 auto',
							pointerEvents: 'all',
							duration: 0.3,
							autoAlpha: 1
						},
						'-=0.3'
					)
					.to(
						$(el).parents('.program-item-wrapper'),
						{ left: 0, duration: 0.3 },
						'-=0.3'
					)
					.to(content, { left: percent + '%', duration: 0.3 }, '-=0.3')
					.to(background, { left: percent + '%', duration: 0.3 }, '-=0.3')
					.to(bigImg, { width: screen.width, duration: 0.3 }, '-=0.3');
			} else {
				tl_fw
					.to(content_main, {
						height: 'auto',
						opacity: 1,
						margin: '40 0 0 0',
						pointerEvents: 'all',
						duration: 0.3,
						autoAlpha: 1
					})
					.to(
						btn,
						{
							opacity: 1,
							margin: '40 auto 0 auto',
							pointerEvents: 'all',
							duration: 0.3,
							autoAlpha: 1
						},
						'-=0.3'
					)
					.to(
						$(el).parents('.program-item-wrapper'),
						{ left: 0, duration: 0.3 },
						'-=0.3'
					)
					.to(content, { left: percent + '%', duration: 0.3 }, '-=0.3')
					.to(background, { left: percent + '%', duration: 0.3 }, '-=0.3')
					.to(bigImg, { width: screen.width, duration: 0.3 }, '-=0.3');
			}

			tl_fw.eventCallback('onComplete', function () {
				icon.addClass('show');
			});

			$(el)
				.on('mouseenter', function () {
					$(el).parents('.program-item-wrapper').css({
						'z-index': 2
					});
					tl_fw.play();
				})
				.on('mouseleave', function () {
					tl_fw.reverse();
					tl_fw.eventCallback('onReverseComplete', function () {
						icon.removeClass('show');
						$(el).parents('.program-item-wrapper').css({
							'z-index': 1
						});
					});
				});
		});
	} else {
		return false;
	}
}

function scrollDown() {
	let target = $('.bf-scroll-down');

	if (target.length) {
		target.on('click', function () {
			$('html, body').animate(
				{
					scrollTop: $(this).parents('.gf-home--banner-wrapper').next().offset()
						.top
				},
				700
			);
		});
	} else {
		return false;
	}
}

function uploadFile() {
	var modal = $('#tuyendungModal');
	if (modal.length) {
		var file = $('#uploadfile');
		var content = modal.find('.upload-text').find('.des');

		file.on('change', function (e) {
			var fileName = e.target.files[0].name;
			content.html(fileName);
		});
	} else {
		return false;
	}
}

function homeEventDeco() {
	var wrapper = $('.home-events-wrapper');

	if (wrapper.length) {
		var image = wrapper.find('.events-image-wrap');
		var imageH = image.outerHeight(true);
		var line_deco = wrapper.find('.line-deco');
		var event_deco = wrapper.find('.events-deco');
		var edecoH = event_deco.height();

		line_deco.css({
			top: imageH + edecoH / 2
		});
	} else {
		return false;
	}
}






