$(function() {
  if ($(window).width() > 992) {
    var $el, leftPos, newWidth;
    $("#main-menu").append("<span id='navigation-hover-line'></span>");
    var $hoverLine = $("#navigation-hover-line");

    $hoverLine
      .width($(".header__link--active").outerWidth())
      .css("left", $(".header__link--active span").position().left)
      .data("origLeft", $hoverLine.position().left)
      .data("origWidth", $hoverLine.width());

    $("#main-menu")
      .find(".header__link")
      .not('.js-disable-hover-line')
      .hover(
        function() {
          $el = $(this);
          $elWidth = $el.find('span');
          leftPos = $el.position().left;
          newWidth = $elWidth.outerWidth();

          $hoverLine.stop().animate({
            left: leftPos,
            width: newWidth
          });
        },
        function() {
          $hoverLine.stop().animate({
            left: $hoverLine.data("origLeft"),
            width: $hoverLine.data("origWidth")
          });
        }
      );
  }
});
