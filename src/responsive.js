(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.haclaresponsive = {
    attach: function attach(context) {
      const refresh = Drupal.debounce(() => {
        if ($(window).width() < 1080) {
          $(window).trigger('toMobile');
          $('html').addClass('is-mobile');
        } else {
          $(window).trigger('toWeb');
          $('html').removeClass('is-mobile');
        }
      }, 250);
      $(window).once('res').resize(refresh);
      refresh();
    }
  };
})(jQuery, Drupal, drupalSettings);
