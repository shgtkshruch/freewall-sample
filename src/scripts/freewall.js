(() => {
  'use strict';

  let loadedImgs = 0;

  $('.gallery__img').each((i, el) => {
    const img = new Image();
    img.src = $(el).attr('src');

    img.onload = function () {
      loadedImgs++;
      $(el).parent().css({
        width: img.width,
        height: 210,
      });
    }
  });

  const id = setInterval(() => {

    if (loadedImgs === 20) {
      clearInterval(id);

      $('.js-container').fadeIn();
      $('.spinner').fadeOut();

      const wall = new Freewall('.js-container');
      wall.reset({
        selector: '.gallery__item',
        cellW: 20,
        cellH: 210,
        gutterX: 5,
        gutterY: 5,
        onResize() {
          wall.fitWidth();
        }
      });
      wall.fitWidth();
      $(window).trigger('resize');
    }
  }, 100);


})();
