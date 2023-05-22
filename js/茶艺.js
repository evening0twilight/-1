$(function () {
  var timelineSwiper = new Swiper(".timeline .swiper-container", {
    // 垂直切换选项
    direction: "vertical",

    // 循环模式选项
    loop: false,

    speed: 1200,

    pagination: ".swiper-pagination",
    // 渲染分页器小点。这个参数允许完全自定义分页器的指示点
    paginationBulletRender: function (swiper, index, className) {
      var year = document
        .querySelectorAll(".swiper-slide")
        [index].getAttribute("data-year");
      return '<span class="' + className + '">' + year + "</span>";
    },
    // 点击分页圆点是否切换
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    // 响应式布局
    // breakpoints: {
    //   768: {
    //     direction: "horizontal",
    //   },
    // },
  });
});
