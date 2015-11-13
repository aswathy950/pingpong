var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


function updateBall() {
  radians = angle * Math.PI / 180;
  xunits = Math.cos(radians) * speed;
  yunits = Math.sin(radians) * speed;
}

var speed = 5;
var p1 = {
  x: 20,
  y: 20
};
var ball = {
  x: p1.x,
  y: p1.y
};


var angle = 40 ;
var radians = 0;
var xunits = 0;
var yunits = 0;

updateBall();


function draw() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, 15, 0, Math.PI * 2, true);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}



function drawBall() {
  requestAnimationFrame(drawBall);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  if (ball.x > canvas.width - 15 || ball.x < 15) {
    angle = 180 - angle;
    updateBall();
  } else if (ball.y > canvas.height - 15 || ball.y < 15) {
    angle = 360 - angle;
    updateBall();
  }
  ball.x += xunits;
  ball.y += yunits;
}

drawBall();


function drawPaddle() {
  // body...
}
