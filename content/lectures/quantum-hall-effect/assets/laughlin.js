// Simulation of Laughlin state

const particlesQ = 1024;
var slider;
let c = 1024;

const beta = 10;
const step = 0.2;	
const gamma = 1 // beta * step**2 / 8;

const radius = 100

const x = new Array(particlesQ);
const y = new Array(particlesQ);
const vx = new Array(particlesQ);
const vy = new Array(particlesQ);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
	let canvas = createCanvas(windowWidth, displayHeight);
	canvas.parent('p5div')
	// canvas.position(-100, -50);
	noStroke();

	// slider = createSlider(0, 0.000005, 0.0000025, 0);
	// slider.position(0, height - 32);
	// slider.style('width', width - 8 + 'px');

	for (var a = 0; a < c; a++) {
		x[a] = random(0,windowWidth);
		y[a] = random(0,windowHeight);
		vx[a] = 0;
		vy[a] = 0;
	}

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
	// var g = slider.value();

	for (let a = 0; a < c; a++) {
		let ax = 0, ay = 0;

		for (let b = 0; b < c; b++) {
			if (a != b) {
				dx = x[b] - x[a];
				dy = y[b] - y[a];

				const d_ab = sqrt(dx*dx + dy*dy);
				//if (d < 1) d = 1;

				//var f = (d - 256) * m[b] / d;
        		const f =  1 / d_ab**2

				ax += -f * dx;
				ay += -f * dy;
			}
		}

		// var d = sqrt((x[a] - windowWidth / 2)**2 + (y[a] - windowHeight / 2)**2);
		// if (d < 1) {
		// 	d = 1;
		// }

		ax +=  - (x[a] - windowWidth / 4) / radius;
		ay +=  - (y[a] - windowHeight / 4) / radius;

		dx = mouseX - x[a];
		dy = mouseY - y[a];

		const d_ab = sqrt(dx*dx + dy*dy);
		//if (d < 1) d = 1;

		//var f = (d - 256) * m[b] / d;
		const f =  10 / d_ab**2

		ax += -f * dx;
		ay += -f * dy;

		vx[a] = vx[a] * exp(-gamma) + ax + step * randomGaussian();
		vy[a] = vy[a] * exp(-gamma) + ay + step * randomGaussian();
	}

	for (let a = 0; a < c; a++) {
		x[a] += vx[a];
		y[a] += vy[a];

		if ((x[a] < 0    &&    vx[a] < 0)    ||    (x[a] > width    &&    vx[a] > 0))    vx[a] = -vx[a];
		if ((y[a] < 0    &&    vy[a] < 0)    ||    (y[a] > height   &&    vy[a] > 0))    vy[a] = -vy[a];
	}

	background(255);

	fill(0, 128);
	for (let i = 0; i < c; i++) {
		circle(x[i], y[i], 8);
	}
	
	fill('red');
	circle(mouseX, mouseY, 20);

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }

function addNewParticle() {
	// if (mouseY < height - 50) {
	// 	x[c] = mouseX;//random(0,windowWidth); //mouseX;
	// 	y[c] = mouseY;//random(0,windowHeight); //mouseY;
	// 	vx[c] = 0;
	// 	vy[c] = 0;

	// 	c++;
	// 	c = c % particlesQ;
	// }
	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseClicked() {
	addNewParticle();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseDragged() {
	addNewParticle();
}
