function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(333);
};

$(document).ready(function() {
	/*========Mobile-menu=========*/
  $(".header__burger").on("click", function(event) {
    event.preventDefault();
      $(".header__menu").addClass('show'); 
      $('body').addClass('hidden'); 
  });
  $(".header__close").on("click", function(event) {
    event.preventDefault();
    $(".header__menu").removeClass('show'); 
      $('body').removeClass('hidden'); 
  });
  /*========/mobile-menu=========*/

  /*==========Header-link==========*/
  $( ".header__link" ).not('.active').hover(function() {
    $(".header__link").not(this).toggleClass('unactive');
  });
  /*==========/header-link==========*/

  /*==========Quote (animate)==========*/
  (function(elements) {
  var i = -1;
  if (!elements.length) {
    return false;
  }
  function step() {
    elements.eq(i).hide();
    if (++i >= elements.length) {
      i = 0;
    };
    elements.eq(i).fadeIn();
    setTimeout(step, 2500);
  }
  step();
}($('#general_process').children()));
  /*==========/quote (animate)==========*/

  /*========FAQ=========*/
  $(".faq_main .faq__question").on("click", function(event) {
    event.preventDefault();
      $(this).next().slideToggle(); 
      $(this).parent().parent().toggleClass('active');
      $(".faq_main .faq__question").not(this).next().slideUp();  
      $(".faq_main .faq__question").not(this).parent().parent().removeClass('active');  
  });

  $(".faq_qa .faq__question").on("click", function(event) {
    event.preventDefault();
      $(this).next().slideToggle(); 
      $(this).parent().parent().toggleClass('active');
      $(".faq_qa .faq__question").not(this).next().slideUp();  
      $(".faq_qa .faq__question").not(this).parent().parent().removeClass('active');  
  });
  /*========/FAQ=========*/

  /*========Cars=========*/
  $(".cars__btn").on("click", function(event) {
    event.preventDefault();
      $(this).parents(".cars__item").find(".cars__equipment").fadeToggle();
      $(this).parents(".cars").find(".slider-arrows").addClass('min');
  });

  $(".cars__equipment .btn-plus").on("click", function(event) {
    event.preventDefault();
      $(".cars__equipment").fadeOut();
      $(this).parents(".cars").find(".slider-arrows").removeClass('min');
  });

  $(".cars__play").on("click", function(event) {
    if ($(window).width() > 760){
        event.preventDefault();
        $(this).parents(".cars__item").find(".cars__video").fadeToggle();
    };
  });
  /*========/cars=========*/

  /*============FixedHeader========*/
  let header = $(".header");
  let headerH = $(".header").innerHeight();
  let scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  })

  function checkScroll(scrollOffset) {
    if( scrollOffset >= headerH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  /*============/fixedHeader========*/

/*=========Scrollpage (header show)=====*/
var scrollPos = 0;
$(window).scroll(function() {
 
  var st = $(this).scrollTop();
  if (st > scrollPos){
    $(".header.show .nav").slideUp();
    //$(".burger").removeClass('active');
    $(".header").removeClass('show');
  } else {
    $(".header").addClass('show');
  }
  scrollPos = st;
});
/*=========/scrollpage (header show)=====*/

    /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;
 
    $("html, body").animate ({
      scrollTop: blockOffset - 130
    }, 2000);
  });
/*=========/smooth scroll=============*/

  /*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(111);
        $(".popup."+name_pop+" .popup__inner").fadeIn(111);
        $('body').addClass("hidden");

      /*========Page-slider========*/
		  new Swiper('.page-slider-main', {
		    slidesPerView: 1,
		    loop: true,
		    navigation: {
		      nextEl: '.slider-arrow_next',
		      prevEl: '.slider-arrow_prev',
		    },
		    thumbs: {
		      swiper: {
		        el: '.page-slider-min',
		        loop: true,
		        slidesPerView: 8,
		        spaceBetween: 20,
		        breakpoints: {
		          320: {
		            spaceBetween: 4,
		          },
		          993: {
		            spaceBetween: 16,
                slidesPerView: 5,
		          },
              1361: {
                spaceBetween: 20,
                slidesPerView: 8,
              },
		        },
		      },
		      autoScrollOffset: 1,
		    },
		  });
		/*=======/page-slider========*/
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('111');
        $(".popup__inner").fadeOut(111);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

  /*======Select-styler=============*/
  $(function() {
    $('select').styler();
  });
  /*======/select-styler=============*/

  /*==========Label===========*/
$('.form-input input, .form-input textarea').each(function() {
 
 if($(this).val() == 0)
 {
   $(this).removeClass('active');
   $(this).parent().removeClass('fill');
 }
 else
 {
   $(this).addClass('active');
   $(this).parent().addClass('fill');
 }
});

 $('.form-input input, .form-input textarea').on('input', function() {
 if($(this).val().length == 0)
 {
   $(this).removeClass('active');
   $(this).parent().removeClass('fill');
   
 }
 else
 {
   $(this).addClass('active');
   $(this).parent().addClass('fill');
 }

});
$( "body" ).delegate( "*", "focus blur", function() {
  var elem =  $(this);
  setTimeout(function() {
    if((elem).attr('type') == 'text' || (elem).attr('type') == 'password'
                              || (elem).attr('type') == 'email')

    {
      elem.parent().toggleClass( "active", elem.is( ":focus" ) );
    }
  }, 0 );
});
 /*==========label===========*/

 /*======Selectbox=============*/
  $(".selectbox").on("click", function(event) {
    event.preventDefault();
    $(this).find('.selectbox__dropdown').slideToggle(222);
    $(this).find('.selectbox__select').toggleClass('active');
  });


  $(".selectbox__option").on("click", function(event) {
    event.preventDefault();
    $('.selectbox__select').html($(this).html());
    $('.selectbox__label').addClass('hide');
    $(this).addClass('selected');
    $(".selectbox__option").not(this).removeClass('selected');
  });
  /*==========/selectbox=========*/

  /*=================Sliders===================*/
	/*========Stat__slider========*/
  	new Swiper('.stat__slider', {
    slidesPerView: 3,
    spaceBetween: 22,
    loop: true,
    resizeReInit: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 13,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 13,
        },
        1181: {
          slidesPerView: 3,
        },
      }
  });
/*=======/stat__slider========*/

/*========Car__slider========*/
  new Swiper('.cars__slider', {
    slidesPerView: 1,
    spaceBetween: 206,
    //loop: true,
    resizeReInit: true,
    navigation: {
    	prevEl: '.slider-arrow_prev',
	  	nextEl: '.slider-arrow_next',
	 },
    breakpoints: {
    	320: {
          spaceBetween: 13,
        },
        861: {
          spaceBetween: 50,
        },
        1440: {
          spaceBetween: 115,
        },
        1920: {
          spaceBetween: 154,
        },
        2560: {
          spaceBetween: 206,
        },
      }
  });
/*=======/cars__slider========*/

/*========Steps__slider========*/
  new Swiper('.steps__slider', {
    slidesPerView: 1.265,
    spaceBetween: 111,
    loop: true,
    resizeReInit: true,
    navigation: {
	  	nextEl: '.slider-arrow_next',
	},
    breakpoints: {
    	320: {
          spaceBetween: 13,
          slidesPerView: 1,
        },
    	760: {
          spaceBetween: 30,
          slidesPerView: 1.1,
        },
        1200: {
          spaceBetween: 51,
          slidesPerView: 1.265,
        },
        1440: {
          spaceBetween: 62,
          slidesPerView: 1.265,
        },
        1920: {
          spaceBetween: 83,
          slidesPerView: 1.265,
        },
        2560: {
          spaceBetween: 111,
          slidesPerView: 1.265,
        },
      }
  });
/*=======/steps__slider========*/

/*========Social__slider========*/
  new Swiper('.social__slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    resizeReInit: true,
    updateOnWindowResize: true,
    //speed: 500, 
    navigation: {
	  	nextEl: '.slider-arrow_next',
	},
    breakpoints: {
    	320: {
          spaceBetween: 10,
        },
    	760: {
          spaceBetween: 10,
        },
        1200: {
          spaceBetween: 10,
        },
        1440: {
          spaceBetween: 12,
        },
        1920: {
          spaceBetween: 15,
        },
        2560: {
          spaceBetween: 20,
        },
      }
  });
/*========/social__slider========*/

/*========Certificates__slider========*/
  new Swiper('.certificates', {
    slidesPerView: 1.5,
    spaceBetween: 111,
    loop: true,
    resizeReInit: true,
    navigation: {
      nextEl: '.slider-arrow_next',
    },
    breakpoints: {
      320: {
          spaceBetween: 24,
          slidesPerView: 1.2,
        },
        540: {
          spaceBetween: 33,
          slidesPerView: 1.5,
        },
        760: {
          spaceBetween: 33,
          slidesPerView: 1.5,
        },
        1200: {
          spaceBetween: 38,
          slidesPerView: 1.5,
        },
        1440: {
          spaceBetween: 46,
          slidesPerView: 1.5,
        },
        1920: {
          spaceBetween: 62,
          slidesPerView: 1.5,
        },
        2560: {
          spaceBetween: 83,
          slidesPerView: 1.5,
        },
        3000: {
          spaceBetween: 110,
          slidesPerView: 1.5,
        },
      }
  });
/*=======/certificates__slider========*/

/*========Certificates__slider========*/
  new Swiper('.photo-slider__inner', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    resizeReInit: true,
    navigation: {
      prevEl: '.slider-arrow_prev',
      nextEl: '.slider-arrow_next',
    },
    breakpoints: {
      320: {
          spaceBetween: 20,
          slidesPerView: 1.1,
        },
        860: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
      }
  });
/*=======/photo-slider========*/

 /*=================Sliders===================*/

});


