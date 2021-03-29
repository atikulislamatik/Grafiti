(function($) {
	// preloader
	$(window).load(function() {
		$("#loading").fadeOut(1200);
	}
	) // 
	$(document).on("scroll", function() {
		if ($(document).scrollTop() > 100) {
			$("header").addClass("black");
		}
		else {
			$("header").removeClass("black");
		}
	}
	);
	// wow js
	new WOW( {
		offset: 100, mobile: true
	}
	).init();
	// video popup
	$('.video-pop').magnificPopup( {
		type: 'iframe'
	}
	);
	// scroll top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('.scroll-top').fadeIn();
		}
		else {
			$('.scroll-top').fadeOut();
		}
	}
	);
	$('.scroll-top').click(function() {
		$('html, body').animate( {
			scrollTop: 0
		}
		, 800);
		return false;
	}
	);
	// //slicknav js
	$(document).ready(function() {
		$('#slick_nav_menu').slicknav( {
			'label': '', brand: ' <a href="#"><img src="assets/images/logo.png" alt=""></a>'
		}
		);
	}
	);

	$('.aa').slick( {
		slidesToShow: 1, slidesToScroll: 1, dots:false, centerMode: false,
		autoplay: true,
		autoplaySpeed: 850, speed: 850, fade: true, arrows: false, responsive: [ {
			breakpoint: 1024, settings: {
				slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true
			}
		}
		, {
			breakpoint: 600, settings: {
				slidesToShow: 1, slidesToScroll: 1
			}
		}
		, {
			breakpoint: 480, settings: {
				slidesToShow: 1, slidesToScroll: 1
			}
		}
		],
	}
	);



// 
$('.portfolio-list').isotope( {
	itemSelector: '.item'
}
);
$('.all-portfolio li').click(function() {
	$('.all-portfolio li').removeClass('active-portfolio');
	$(this).addClass('active-portfolio');
	var selector=$(this).attr('data-filter');
	$('.portfolio-list').isotope( {
		filter: selector
	}
	);
	return false;
}
);


 //project magnific
 $('.image-pop').magnificPopup( {
	type: 'image', removalDelay: 300, gallery: {
		// options for gallery
		enabled: true
	}
	,
}
);

	$('#slider').boxSlider( {
		speed: 800, timeout: 3000, perspective: 1000, effect:'scrollHorz'
	}
	);
	$('#slider').boxSlider('showSlide', 1);
	$('#slider').boxSlider('playPause');


	$('#slider1').boxSlider( {
		speed: 800, timeout: 3000, perspective: 1000, effect:'blindDown'
	}
	);
	$('#slider1').boxSlider('showSlide', 1);
	$('#slider1').boxSlider('playPause');



}

(jQuery));