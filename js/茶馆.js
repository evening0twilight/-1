(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img",
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function () {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        min = $(this).offset().top;
        // 被选元素相对于文档的偏移坐标
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        // 滚动的偏移top的量>元素相对于页面的偏移量+元素的高度/2
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" + selectors.item.last().find(selectors.img).attr("src") + ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        }
        //  滚动的偏移top的量<=元素的高+相对于页面的偏移量-40并且大于元素相对于页面的偏移量
        else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" + $(this).find(selectors.img).attr("src") + ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);
$("#timeline-1").timeline();
