const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflake() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 4 + 1,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.5 + 0.5
  };
}

function drawSnowflake(snowflake) {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
  ctx.fill();
}

function updateSnowflake(snowflake) {
  snowflake.y += snowflake.speed;
  if (snowflake.y > canvas.height) {
    snowflake.y = -snowflake.radius;
    snowflake.x = Math.random() * canvas.width;
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

for (let i = 0; i < 200; i++) {
  snowflakes.push(createSnowflake());
}

update_canvas();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
