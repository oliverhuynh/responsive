(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.haclaresponsive = {
    attach: function attach(context) {
      const viewports = drupalSettings.viewports || {
        'toMobile': [0, 1080, 'is-mobile'],
        'toWeb': [1080, 1111111, 'is-web']
      };
      const refresh = Drupal.debounce(() => {
        const w = $(window).width();
        // Clear
        for (const vp of Object.keys(viewports)) {
          const [min, max, cl] = viewports[vp];
          $('html').removeClass(cl);
        }

        for (const vp of Object.keys(viewports)) {
          const [min, max, cl] = viewports[vp];
          if (w < max && w >= min) {
            $(window).trigger(vp);
            $('html').addClass(cl);
          }
        }
      }, 250);
      $(window).once('res').resize(refresh);
      refresh();
    }
  };
})(jQuery, Drupal, drupalSettings);
