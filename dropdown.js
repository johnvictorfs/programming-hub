'use strict';

$(function () {
  /**
   * Dropdown on hover
   * https://stackoverflow.com/a/54796521/10416161
   */
  $('.dropdown-hover').hover(
    function () {
      $(this).addClass('show');
      $(this).find('[data-toggle="dropdown"]').attr('aria-expanded', true);
      $(this).find('.dropdown-menu').addClass('show');
    },
    function () {
      $(this).removeClass('show');
      $(this).find('[data-toggle="dropdown"]').attr('aria-expanded', false);
      $(this).find('.dropdown-menu').removeClass('show');
    }
  );
});