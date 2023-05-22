let box = document.getElementById("box"); //小图盒子
let bigBox = document.getElementById("bigBox"); //大图盒子
let img = bigBox.getElementsByTagName("img")[0]; //大图
let mark; //放大镜
//鼠标滑入小图盒子，大盒子显示，放大镜显示
box.onmouseenter = function () {
  //动态创建mark，然后把mark添加到box中
  mark = document.createElement("div");
  mark.id = "mark";
  box.appendChild(mark);
  //让大盒子显示
  bigBox.style.display = "block";
};
//放大镜跟随鼠标移动
box.onmousemove = function (e) {
  //先求出当前mark主要移动的距离
  let left = e.clientX - box.offsetLeft - mark.offsetWidth / 2;
  let top = e.clientY - box.offsetTop - mark.offsetHeight / 2;
  //边界
  let maxW = box.offsetWidth - mark.offsetWidth;
  let maxH = box.offsetHeight - mark.offsetHeight;
  left = left <= 0 ? 0 : left >= maxW ? maxW : left;
  top = top <= 0 ? 0 : top >= maxH ? maxH : top;

  //把当前求出来的距离赋值给mark的left即可
  mark.style.left = left + "px";
  mark.style.top = top + "px";

  //大图的left根据公式得出，并且与放大镜的left符号相反
  //公式 mark.style.left/box.offsetWidth=img.style.left/bigBox.offsetWidth
  img.style.left = -2 * left + "px";
  img.style.top = -2 * top + "px";
};
//鼠标移出小图盒子，放大镜消失，大图盒子消失
box.onmouseleave = function () {
  //当鼠标滑出的时候，让mark移除，让大盒子隐藏
  box.removeChild(mark);
  bigBox.style.display = "none";
};
