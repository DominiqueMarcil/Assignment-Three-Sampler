const canvas = document.getElementById('magicalCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw dreamlike imagery
ctx.fillStyle = 'rgb(135, 206, 250)'; // Light blue color
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Add surreal elements
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(255, 165, 0, 0.5)'; // Orange color with transparency
ctx.fill();

// Add interactive elements
canvas.addEventListener('mousemove', function(event) {
  // Draw sparkles at mouse position
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(135, 206, 250)'; // Light blue color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(event.clientX, event.clientY, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
});
