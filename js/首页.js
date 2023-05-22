window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
window.onload = function () {
  var allDiv = document.querySelectorAll("#wrapinner");
  var allNavLi = document.querySelectorAll("#nav li");
  /**
   * 滚动一定距离时，返回顶部按钮出现    滚动页面改变导航li的弹出
   */
  function toTopIcon() {
    window.onscroll = function () {
      var d = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动条高度
      for (var i = 0; i < allDiv.length; i++) {
        allDiv[i].index = i;
        if (d >= allDiv[i].offsetTop - 200 && d < allDiv[i].offsetTop + 10) {
          for (var j = 0; j < allDiv.length; j++) {
            allNavLi[j].className = "";
            allNavLi[i].className = "on";
          }
        }
      }
    };
  }
  /**
   * 点击导航li  li颜色改变  页面跳转到相应div位置
   * scrollTo默认的是瞬间滚动到坐标位置，把behavior属性设置为smooth就可以支持平滑滚动了，不过缺点是无法设置滚动速率
   */
  function navLiPop() {
    for (var i = 0; i < allNavLi.length; i++) {
      allNavLi[i].index = i;
      allNavLi[i].onclick = function () {
        for (var j = 0; j < allNavLi.length; j++) {
          window.scrollTo({
            top: allDiv[this.index].offsetTop,
            behavior: "smooth",
          });
        }
      };
    }
  }
  navLiPop();
  toTopIcon();
};
