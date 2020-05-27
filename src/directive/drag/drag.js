export default {
  bind(el, binding, vnode) {
    // el = e || window.event; //事件对象
    // const x_down = e.clientX; //鼠标按下X的坐标
    // const y_down = e.clientY; //鼠标按下Y的坐标
    // const leftDown = this.offsetLeft; //获取盒子的初始left值
    // const topDown = this.offsetTop; //获取盒子的初始top值
    // document.onmousemove = function(e) { //鼠标移动事件
    //   e = e || window.event;
    //   const x_move = e.clientX; //鼠标移动X的坐标
    //   const y_move = e.clientY; //鼠标移动Y的坐标
    //   //移动的坐标减去按下的坐标 = 移动的距离
    //   const x_now = x_move - x_down;
    //   const y_now = y_move - y_down;
    //   //赋值给left和top
    //   el.style.top = topDown + y_now + 'px';
    //   el.style.left = leftDown + x_now + 'px';
    // }
    // document.onmouseup = function() { //鼠标抬起事件
    // }
    // return false //阻止默认事件
  },
};
