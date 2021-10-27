const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;
ctx.shadowColor = "black";
let hue = 0;
let drawing = false;
//ctx.globalCompositeOperation = "difference";

function drawShape(x, y, radius, innerradius, n) {
	ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
	ctx.beginPath();
	ctx.save();
	ctx.translate(x, y);
	ctx.moveTo(0, 0 - radius);

	for (let i = 0; i < n; i++) {
		ctx.rotate(Math.PI / n);
		ctx.lineTo(0, 0 - radius * innerradius);
		ctx.rotate(Math.PI / n);
		ctx.lineTo(0, 0 - radius);
	}

	ctx.restore();
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}
const radius = 20;
const innerradius = 0.5;
const n = 20;
drawShape(130, 130, radius, innerradius, n);

let angle = 0;
window.addEventListener("mousemove", function (e) {
	if (drawing) {
		ctx.save();
		ctx.translate(e.x, e.y);
		ctx.rotate(angle);
		hue += 3;
		angle += 0.2;
		drawShape(0, 0, radius, innerradius, n);
		ctx.restore();
	}
});

window.addEventListener("mousedown", function () {
	drawing = true;
});

window.addEventListener("mouseup", function () {
	drawing = false;
});
