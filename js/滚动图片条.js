let container1 = document.querySelector("#container1");
// 获取ul元素，并为其追加一组相同图片（为了做到无缝衔接）
let ul1 = container1.querySelector("ul");
ul1.innerHTML = ul1.innerHTML + ul1.innerHTML;
// 获取所有的li元素和.btn元素
let lis1 = container1.querySelectorAll("li");
// let btns1 = container1.querySelectorAll(".btn");
// 每次滚动的跨度（正数向右，负数向左，默认向左滚动）
let spa1 = -2;
// 计算并设置ul的总宽度
ul1.style.width = lis1[0].offsetWidth * lis1.length + "px";

// 滚动函数
function move1() {
  if (ul1.offsetLeft < -ul1.offsetWidth / 2) {
    // 向左走时，判断图片是否走完（这里本来时n张图片，加上后面追加的n张相同的，共有2n张，所以需要用ul的总宽度来除以2进行判断），走完时重新开始
    ul1.style.left = "0";
  }
  if (ul1.offsetLeft > 0) {
    // 向右走时，判断图片是否走完
    ul1.style.left = -ul1.offsetWidth / 2 + "px";
  }
  // 设置偏移位置
  ul1.style.left = ul1.offsetLeft + spa1 + "px";
}

// 定时器，每100毫秒执行一次move函数
let timer1 = setInterval(move1, 100);

// 为ul绑定事件，悬停停止，移开滚动
ul1.addEventListener("mousemove", function () {
  clearInterval(timer1);
});
ul1.addEventListener("mouseout", function () {
  timer1 = setInterval(move1, 100);
});

let container2 = document.querySelector("#container2");
let ul2 = container2.querySelector("ul");
ul2.innerHTML = ul2.innerHTML + ul2.innerHTML;
let lis2 = container2.querySelectorAll("li");
let spa2 = 2;
ul2.style.width = lis2[0].offsetWidth * lis2.length + "px";
function move2() {
  if (ul2.offsetLeft < -ul2.offsetWidth / 2) {
    ul2.style.left = "0";
  }
  if (ul2.offsetLeft > 0) {
    ul2.style.left = -ul2.offsetWidth / 2 + "px";
  }
  ul2.style.left = ul2.offsetLeft + spa2 + "px";
}
let timer2 = setInterval(move2, 100);
ul2.addEventListener("mousemove", function () {
  clearInterval(timer2);
});
ul2.addEventListener("mouseout", function () {
  timer2 = setInterval(move2, 100);
});
