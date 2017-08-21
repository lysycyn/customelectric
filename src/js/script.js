var md = 768;
/*
* Маска для телефона
* Фиксация хедера
*/
(function() {
  $('.phone-mask').mask('+7-(999)-999-99-99', {placeholder: '_'});

  function fixed_header() {
    var $header = $('#header');
    if (window.pageYOffset > 0) {
      $header.addClass('fixed');
    } else {
      if ($header.hasClass('fixed')) {
        $header.removeClass('fixed');
      }
    }
  }

  function resize_header() {
    var $header = $('#header');
    if (window.pageYOffset > 100) {
      $header.addClass('small_header');
    } else {
      if ($header.hasClass('small_header')) {
        $header.removeClass('small_header');
      }
    }
  }

  window.addEventListener('scroll', fixed_header);
  window.addEventListener('load', fixed_header);
  window.addEventListener('scroll', resize_header);
  window.addEventListener('load', resize_header);
})();

/*
* Хедер для мобилки.
*/
(function() {
  //Обработчик нажатия пункта "Комплектации"
  $('#js-nesting-list-btn').click(function() {
    var btn = document.getElementById('js-nesting-list-btn');
    if (btn.classList.contains('main-nav__list__item__btn_active')) {
      btn.classList.remove('main-nav__list__item__btn_active');
    } else {
      btn.classList.add('main-nav__list__item__btn_active');
    }
  });

  function menu_mobile_open_close() {
    var $nav = $('#nav');
    if ($nav.hasClass('main-nav_active')) {
      $nav.removeClass('main-nav_in');
      setTimeout(function() {
        $nav.removeClass('main-nav_active');
      }, 500);
    } else {
      nav.classList.add('main-nav_active');
      setTimeout(function() {
        nav.classList.add('main-nav_in');
      }, 10);
    }
  }

  //Обработчик нажатия кнопки меню мобилки
  $('#menu-button').click(menu_mobile_open_close);
  $('#menu-button-mask').click(menu_mobile_open_close);

  //свайп для меню
  var nav = document.getElementById('nav');
  var tStart = {};
  var tEnd = {};
  nav.addEventListener('touchstart', function(e) {
    tStart.X = e.changedTouches[0].clientX;
    tStart.Y = e.changedTouches[0].clientY;
  });

  nav.addEventListener('touchend', function(e) {
    tEnd.X = e.changedTouches[0].clientX;
    tEnd.Y = e.changedTouches[0].clientY;

    if (
      tEnd.X - tStart.X > 0 &&
      Math.abs(tEnd.X - tStart.X) > Math.abs(tEnd.Y - tStart.Y)
    ) {
      menu_mobile_open_close();
    }
  });

  $('.js-phone-button').click(function(e) {
    if ($('.main-nav_active')) {
      var $nav = $('#nav');
      if ($nav.hasClass('main-nav_active')) {
        $nav.removeClass('main-nav_in');
        setTimeout(function() {
          $nav.removeClass('main-nav_active');
        }, 500);
      }
    }
    e.preventDefault();
    var id = $(this).attr('href');
    var top = 0;
    if (id != '#') {
      top = $(id).offset().top - $('#header').height();
    }
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.js-close-phone-menu').click(function(e){
    if ($('.main-nav_active')) {
      var $nav = $('#nav');
      if ($nav.hasClass('main-nav_active')) {
        $nav.removeClass('main-nav_in');
        setTimeout(function() {
          $nav.removeClass('main-nav_active');
        }, 500);
      }
    }
    e.preventDefault();
  });

  $('.js-more-button').click(function(e) {
    if ($('.main-nav_active')) {
      var $nav = $('#nav');
      if ($nav.hasClass('main-nav_active')) {
        $nav.removeClass('main-nav_in');
        setTimeout(function() {
          $nav.removeClass('main-nav_active');
        }, 500);
      }
    }
    e.preventDefault();
    var id = $(this).attr('href');
    var top = 0;
    if (id != '#') {
      top = $(id).offset().top - $('#header').height();
    }
    $('body,html').animate({scrollTop: top}, 1500);
  });
})();

/*
* характеристики
*/
(function() {
  function close_wrapper(e) {
    $('.active').removeClass('active');
  }

  function open_wrapper(e) {
    if ($(this).hasClass('main-chars__features__a')) {
      var $num = parseInt(this.classList[1].replace(/\D+/g, ''));
      $('.main-chars__features__a_' + $num).addClass('active');
      $('.main-chars__features__wrapper__img-block_' + $num).addClass('active');
    }
  }

  $('#chars-wrapper').click(close_wrapper);
  $('.main-chars__features__wrapper__img-block__close').click(close_wrapper);
  $('.main-chars__features__a').click(open_wrapper);

  $('#more-chars').click(function() {
    var $block = $('#more-chars-block');
    if ($(this).hasClass('main-chars__table__title__arrow_active')) {
      $(this).removeClass('main-chars__table__title__arrow_active');
      $block.removeClass('main-chars__table__block_active');
    } else {
      $(this).addClass('main-chars__table__title__arrow_active');
      $block.addClass('main-chars__table__block_active');
    }
  });
})();

/*
* Блок с велосипедами
*
*/
(function() {
  $('.main-velo__container__block__image')
    .click(function(e) {
      e.preventDefault();
      e.stopPropagation();

      var $mask = $('.main-velo__container__block__image__mask', this);
      if (
        $mask.hasClass('main-velo__container__block__image__mask_active-mobile')
      ) {
        $mask.removeClass(
          'main-velo__container__block__image__mask_active-mobile'
        );
      } else {
        $(
          '.main-velo__container__block__image__mask_active-mobile'
        ).removeClass('main-velo__container__block__image__mask_active-mobile');
        $mask.addClass(
          'main-velo__container__block__image__mask_active-mobile'
        );
      }
    })
    .on('click', 'a', function(e) {
      e.stopPropagation();
    });
})();

//Переключатель галереи
(function() {
  $('#gallery_view3').click(function() {
    if ($('#gallery-container').hasClass('gallery-container_one-column')) {
      $('#gallery-container').removeClass('gallery-container_one-column');
    }
  });
  $('#gallery_view1').click(function() {
    if ($('#gallery-container').hasClass('gallery-container_one-column')) {
      return;
    } else {
      $('.gallery__block__img-block__mask').removeClass(
        'gallery__block__img-block__mask_active-mobile'
      );
      $('#gallery-container').addClass('gallery-container_one-column');
    }
  });

  if (window.innerWidth < md)
    $('.gallery__block__img-block')
      .click(function(e) {
        e.preventDefault();
        if ($('#gallery-container').hasClass('gallery-container_one-column')) {
          return;
        }
        //e.stopPropagation();

        var $mask = $('.gallery__block__img-block__mask', this);
        if ($mask.hasClass('gallery__block__img-block__mask_active-mobile')) {
          $mask.removeClass('gallery__block__img-block__mask_active-mobile');
        } else {
          $('.gallery__block__img-block__mask_active-mobile').removeClass(
            'gallery__block__img-block__mask_active-mobile'
          );
          $mask.addClass('gallery__block__img-block__mask_active-mobile');
        }
      })
      .on('click', 'a', function(e) {
        // e.stopPropagation();
      });
})();

//свайпер на странице карточки товара
(function() {
  if ($('.swiper-container').length > 0) {
    var swiper = new Swiper('.swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      loop: true,
    });
  }
})();

(function() {
  $('.velo__chars__title-plus').click(function() {
    if ($(window).innerWidth() >= md) {
      if (
        $('.velo__chars__title-chars').hasClass(
          'velo__chars__title-chars_active'
        )
      ) {
        $('.velo__chars__title-chars').removeClass(
          'velo__chars__title-chars_active'
        );
        $('.velo__chars__title-plus').addClass(
          'velo__chars__title-plus_active'
        );
      } else {
        $('.velo__chars__title-chars').addClass(
          'velo__chars__title-chars_active'
        );
        $('.velo__chars__title-plus').removeClass(
          'velo__chars__title-plus_active'
        );
      }
    } else {
      if (
        $('.velo__chars__title-chars').hasClass(
          'velo__chars__title-chars_active'
        )
      ) {
        $('.velo__chars__title-chars').removeClass(
          'velo__chars__title-chars_active'
        );
        $('.velo__chars__title-plus').addClass(
          'velo__chars__title-plus_active'
        );
      }
    }
  });

  $('.velo__chars__title-chars').click(function() {
    if ($(window).innerWidth() < md) {
      if (
        $('.velo__chars__title-plus').hasClass('velo__chars__title-plus_active')
      ) {
        $('.velo__chars__title-plus').removeClass(
          'velo__chars__title-plus_active'
        );
        $('.velo__chars__title-chars').addClass(
          'velo__chars__title-chars_active'
        );
      }
    }
  });
})();

$(function() {
  $('input').on("click", function(e){
    if($(e.target).hasClass("form__error")){
      $(e.target).removeClass("form__error");
    }
  });

  function showAlert(status, text){
    var div = document.createElement('div');
    div.classList.add('popup', 'popup-'+status);
    div.innerText = text;
    div.id="form_popup";
    document.body.appendChild(div);

    setTimeout(function(){
      document.getElementById("form_popup").remove();
    }, 3000);
  }


  $('.js-outer-form').click(function(e) {
    if ($('.main-nav_active')) {
      var $nav = $('#nav');
      if ($nav.hasClass('main-nav_active')) {
        $nav.removeClass('main-nav_in');
        setTimeout(function() {
          $nav.removeClass('main-nav_active');
        }, 500);
      }
    }
    e.preventDefault();
    var target = $(this).data("target");
    if(target == "ticket"){
      var container = document.getElementById('rental-form-outer');
      if(container){
        container.classList.add("rental-form-show");
        var form = document.getElementById('rental-form-outer-container');
        if(form){
          form.classList.add("rental-form-show");
        }
      }
      return;
    }
    if(target == "buy"){
      var container = document.getElementById('rental-form-outer');
      if(container){
        container.classList.add("rental-form-show");
        var form = document.getElementById('form-buy-container');
        if(form){
          form.classList.add("rental-form-show");
        }
      }
    }
  });

  function closeRentalForm(){
    var outer = document.getElementById('rental-form-outer');
    if(outer){
      outer.classList.toggle('rental-form-show');
    }
    if($("#rental-form-outer-container").hasClass('rental-form-show')){
      $("#rental-form-outer-container").removeClass('rental-form-show');
    }
    if($('#form-buy-container').hasClass('rental-form-show')){
      $('#form-buy-container').removeClass('rental-form-show');
    }
  }

  $('#rental-form-outer').click(function(e){
    closeRentalForm();
  });

  $('.js-form-close').click(function(e){
    closeRentalForm();
  });

  function formHandler(){
    var error = false;
    if(form_name.val() == ''){
      error = true;
      form_name.addClass('form__error');
    }
    if(form_phone.val() == ''){
      error = true;
      form_phone.addClass('form__error');
    }
    if(error){
      return;
    }
    var formData = $('#ticket-form').serialize();
    $.ajax({
        type: 'POST',
        url: $(form_ticket).attr('action'),
        data: formData
    }).done(function(response) {
        form_name.val('');
        form_phone.val('');
        form_message.val('');
        $('.checkbox').removeAttr('checked');
        closeRentalForm();
        showAlert("success", "Мы скоро свяжемся с Вами!");
      }).fail(function(data) {
        showAlert("cancel", "Ошибка! Попробуйте отправить заявку сегодня или свяжитесь с нами по телефону");
        closeRentalForm();
    });
  }

  function formHandlerBuy(){
    var error = false;
    if(form_name_buy.val() == ''){
      error = true;
      form_name_buy.addClass('form__error');
    }
    if(form_phone_buy.val() == ''){
      error = true;
      form_phone_buy.addClass('form__error');
    }
    if(error){
      return;
    }
    var formData = $('#buy-form').serialize();
    $.ajax({
        type: 'POST',
        url: $(form_buy).attr('action'),
        data: formData
    }).done(function(response) {
        form_name_buy.val('');
        form_phone_buy.val('');
        $('.checkbox').removeAttr('checked');
        closeRentalForm();
        showAlert("success", "Мы скоро свяжемся с Вами!");
      }).fail(function(data) {
        showAlert("cancel", "Ошибка! Попробуйте отправить заявку сегодня или свяжитесь с нами по телефону");
        closeRentalForm();
    });
  }
    // Get the form.
  var form_ticket = $('#ticket-form');

  var form_name = $('#form_name');
  var form_phone = $('#form_phone');
  var form_message = $('#form_message');

  $(form_ticket).submit(function(event) {
      event.preventDefault();
      $(".form__error").removeClass('form__error');
      setTimeout(formHandler, 10);
  });

  var form_buy = $('#buy-form');
  var form_name_buy = $('#form_name_buy');
  var form_phone_buy = $('#form_phone_buy');

  $(form_buy).submit(function(event){
    event.preventDefault();
    $(".form_error").removeClass('form_error')
    setTimeout(formHandlerBuy, 10);
  });

});

$(function(){

});
