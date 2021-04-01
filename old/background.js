function generatePositions(xpos, ypos, colors) {
	xpos.length = 0;
	ypos.length = 0;
	colors.length = 0;
	let triAmount = 15;
	let dx = canvas.width / triAmount;
	let dy = canvas.height / triAmount;
	for (let y = 0, yItr = 0; y < canvas.height + dy * 4; y += dy, yItr++) {
		for (let x = 0, xItr = 0; x < canvas.width + dx * 4; x += dx, xItr++) {
			// Lazy init of double array
			if (!xpos[yItr]) xpos[yItr] = [];
			if (!ypos[yItr]) ypos[yItr] = [];
			if (!colors[yItr]) colors[yItr] = [];

			let xx = x - dx * 2 + (Math.random() - 0.5) * triAmount * 5;
			let yy = y - dy * 2 + (Math.random() - 0.5) * triAmount * 5;
			xpos[yItr][xItr] = xx;
			ypos[yItr][xItr] = yy;

			// Colors
			// let delta = (Math.random() - 0.5) * 15;
			// colors[yItr][xItr] = `rgb(
			// 	${173 + delta},
			// 	${10 + delta},
			// 	${95 + delta}
			// )`;
			colors[yItr][xItr] = "#080808";
		}
	}
}

var lineColor = "#000000"
function lineTris(posx, posy, x, y) {
	c.beginPath();
	c.strokeStyle = lineColor;
	// Bottom right to top left
	c.moveTo(posx[y][x], posy[y][x]);
	c.lineTo(posx[y - 1][x - 1], posy[y - 1][x - 1]);
	// Bottom right to top right
	c.moveTo(posx[y][x], posy[y][x]);
	c.lineTo(posx[y - 1][x], posy[y - 1][x]);
	// Bottom right to bottom left
	c.moveTo(posx[y][x], posy[y][x]);
	c.lineTo(posx[y][x - 1], posy[y][x - 1]);
	c.stroke();
}

function filledTris(posx, posy, x, y, colors) {
	let color = colors[y][x];

	// Lower triangle
	c.strokeStyle = lineColor;
	c.beginPath();
	c.moveTo(posx[y][x], posy[y][x]);
	c.lineTo(posx[y][x - 1], posy[y][x - 1]);
	c.lineTo(posx[y - 1][x - 1], posy[y - 1][x - 1]);
	c.lineTo(posx[y][x], posy[y][x]);
	c.closePath();
	c.stroke();
	c.fillStyle = color;
	c.fill();

	// Upper triangle
	c.strokeStyle = lineColor;
	c.beginPath();
	c.moveTo(posx[y][x], posy[y][x]);
	c.lineTo(posx[y - 1][x - 1], posy[y - 1][x - 1]);
	c.lineTo(posx[y - 1][x], posy[y - 1][x]);
	c.lineTo(posx[y][x], posy[y][x]);
	c.closePath();
	c.stroke();
	c.fillStyle = color;
	c.fill();
}

function draw(mouse, frame, colors) {
	let currX = [];
	let currY = [];
	let currColors = [];
	for (let i = 0; i < xpos.length; i++) currX[i] = [...xpos[i]];
	for (let i = 0; i < ypos.length; i++) currY[i] = [...ypos[i]];
	for (let i = 0; i < colors.length; i++) currColors[i] = [...colors[i]];
	let mouseRad = 200;

	for (let y = 0; y < currY.length; y++) {
		for (let x = 0; x < currX.length; x++) {
			let distX = currX[y][x] - mouse.x;
			let distY = currY[y][x] - mouse.y;
			let dist = Math.sqrt(distX * distX + distY * distY);
			let offset = 0;
			if (dist < mouseRad) {
				let factor = 1.0 - (dist / mouseRad);
				offset = 10 * factor;
				currColors[y][x] = `rgb(
					${173 * factor + 8 * (1.0 - factor)},
					${10 * factor + 8 * (1.0 - factor)},
					${95 * factor + 8 * (1.0 - factor)}
				)`;
			}
			currX[y][x] += Math.sin(currX[y][x] + frame / 50) * offset;
			currY[y][x] += Math.sin(currY[y][x] + frame / 50) * offset;

			if (mouse.active && dist < mouseRad) {
				let factor = 1.0 - (dist / mouseRad);
				currX[y][x] += (distX / (dist)) * (mouseRad - Math.abs(distX)) * factor;
				currY[y][x] += (distY / (dist)) * (mouseRad - Math.abs(distY)) * factor;

			}

			// Draw mouse area of influence
			// c.beginPath();
			// c.arc(mouse.x, mouse.y, mouseRad, 0, 2 * Math.PI);
			// c.stroke();

			if (x > 0 && y > 0) {
				// lineTris(currX, currY, x, y);
				filledTris(currX, currY, x, y, currColors);
			}
		}
	}
}

var mouse = {
	x: undefined,
	y: undefined,
	active: false
}

window.addEventListener("mousemove", function(event){
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener("mousedown", function() {
	mouse.active = true;
});

window.addEventListener("mouseup", function() {
	mouse.active = false;
});


// Setup canvas
let canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

// Generate positions
let xpos = [];
let ypos = [];
let colors = [];
generatePositions(xpos, ypos, colors);

// console.log(xpos);
// let test = [];
// for (let i = 0; i < xpos.length; i++) test[i] = [...xpos[i]];
// console.log(test)
// console.log(xpos[0] === test[0])

let frame = 0;
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	// Check resize
	if (canvas.width != window.innerWidth || canvas.height != window.innerHeight) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		generatePositions(xpos, ypos, colors);
	}

	// Draw
	draw(mouse, frame, colors);

	frame++;
}
animate();