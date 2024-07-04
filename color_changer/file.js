const randomn = function () {
  const hexno = "123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexno[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomn());
let intervalID;

const startChangingColor = function () {
  intervalID = setInterval(bgcolor, 500);

  function bgcolor() {
    document.body.style.backgroundColor = randomn();
  }
};

document.querySelector(".b1").addEventListener("click", startChangingColor);

const stopColorChanginng = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector(".b2").addEventListener("click", stopColorChanginng);

// const btn1 = document.getElementsByClassName('b1')[0];
// // console.log(btn1);
// btn1.addEventListener('click' , function(){
// document.body.style.backgroundColor = randomn();
// });
