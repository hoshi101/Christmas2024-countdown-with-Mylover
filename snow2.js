const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
const snowflakeImage = new Image();
snowflakeImage.src = 'image/snowflakes.png';

function createSnowflake() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 10 + 5,
    speedY: Math.random() * 1 + 0.5,
    speedX: Math.random() * 0.5 - 0.25,
    opacity: Math.random() * 0.5 + 0.5,
  };
}

function drawSnowflake(snowflake) {
  ctx.globalAlpha = snowflake.opacity;
  ctx.drawImage(snowflakeImage, snowflake.x, snowflake.y, snowflake.size, snowflake.size);
  ctx.globalAlpha = 1;
}

function updateSnowflake(snowflake) {
  snowflake.y += snowflake.speedY;
  snowflake.x += snowflake.speedX;

  if (snowflake.y > canvas.height) {
    snowflake.y = -snowflake.size;
    snowflake.x = Math.random() * canvas.width;
  }

  if (snowflake.x > canvas.width) {
    snowflake.x = -snowflake.size;
  } else if (snowflake.x < -snowflake.size) {
    snowflake.x = canvas.width;
  }
}

function update_canvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((snowflake) => {
    updateSnowflake(snowflake);
    drawSnowflake(snowflake);
  });

  requestAnimationFrame(update_canvas);
}

function initializeSnowflakes(count) {
  for (let i = 0; i < count; i++) {
    snowflakes.push(createSnowflake());
  }
}

snowflakeImage.onload = () => {
  initializeSnowflakes(200);
  update_canvas();
};

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
