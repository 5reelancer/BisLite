$(document).ready(function () {


  $('.slider__inner').slick({
    arrows: false,
    dots: true,

  });
  
  $('.works__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../files/left-arrow.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="../files/right-arrow.svg" alt=""></button>',

    responsive: [
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 671,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
  });

  $('.header__drop-down.dropdown').on('click', function(){
    $(this).children ('.drop-down__list').toggleClass('active');
    $(this).children ('.dropdown__link').toggleClass('active');
  });

  
});