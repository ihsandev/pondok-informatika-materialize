

$(document).ready(function(){
    $('.slider').slider({
    	height: 600,
    	indicators : false
    });

    $('.parallax').parallax();

    $('.materialboxed').materialbox();

    $('.tabs').tabs();

    $('.sidenav').sidenav();

    $('.collapsible').collapsible();

    // form

	    $('select').formSelect();
	     $('.datepicker').datepicker();

      // smooth scroll

    $('.page-scroll').on('click', function(){
		//ambil attr href
		let href = $(this).attr('href');
		let elemenHref = $(href);

		$('html').animate({
			scrollTop : elemenHref.offset().top -55
		},1000, 'easeInOutExpo');

		$('nav ul a').removeClass('active-nav');
		$(this).addClass('active-nav');
	});

	// end

  });


// efek parallax

//parallax
	$(window).scroll(function(){

		let wScroll = $(this).scrollTop();

		if(wScroll > $('section.about').offset().top -250){
			$('section.about').css({
				'opacity' :'1',
				'transform' : 'translate(0,0)'
			});	

			$('.about .cp_1, .cp_2').css({
				'transform' : 'translateX(0)'
			});
		}

		if(wScroll > $('section.testimoni').offset().top -250){
			$('section.testimoni').css({
				'opacity' :'1',
				'transform' : 'translate(0,0)'
			});

			$('.testi-1, .testi-2, .testi-3').css({
				'transform' : 'translate(0,0)'
			});
		}

		if(wScroll > $('section .content-contact').offset().top -250){
			$('section, .content-contact').css({
				'opacity' : '1',
				'transform' : 'translate(0,0)'
			});
		}

	});  