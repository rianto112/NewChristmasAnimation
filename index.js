// 获取画布元素和上下文
const canvas = document.getElementById('christmasCanvas');
const ctx = canvas.getContext('2d');

// 设置画布尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 创建圣诞树
function drawTree() {
  ctx.fillStyle = '#228B22';
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height);
  ctx.lineTo(canvas.width / 4, canvas.height / 2);
  ctx.lineTo((canvas.width * 3) / 4, canvas.height / 2);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(canvas.width / 3, canvas.height / 4);
  ctx.lineTo((canvas.width * 2) / 3, canvas.height / 4);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 4);
  ctx.lineTo(canvas.width / 3, canvas.height / 8);
  ctx.lineTo((canvas.width * 2) / 3, canvas.height / 8);
  ctx.closePath();
  ctx.fill();
}

// 创建礼物
function drawGift(x, y, width, height) {
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(x, y, width, height);

  ctx.fillStyle = '#FFFF00';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width / 2, y - height / 2);
  ctx.lineTo(x + width, y);
  ctx.closePath();
  ctx.fill();
}

// 动画循环
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTree();

  const time = new Date().getTime() * 0.002;

  // 礼物的运动路径
  const giftX = canvas.width / 2 + Math.cos(time) * (canvas.width / 2 - 50);
  const giftY = canvas.height / 2 + Math.sin(time) * (canvas.height / 2 - 50);

  drawGift(giftX, giftY, 30, 30);

  requestAnimationFrame(animate);
}

// 开始动画
animate();
