$(function(){

  $('.photo__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>'
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $(".menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

});