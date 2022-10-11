// Simulation of Laughlin state with a non-potential drift contribution
// All sketches in instance mode, to keep variables out of global scope
// https://p5js.org/examples/instance-mode-instantiation.html
const laughlin = function(p) {

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

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.displayHeight);
        
        // canvas.position(-100, -50);
        p.noStroke();

        // slider = createSlider(0, 0.000005, 0.0000025, 0);
        // slider.position(0, height - 32);
        // slider.style('width', width - 8 + 'px');

        for (var a = 0; a < c; a++) {
            x[a] = p.random(0, p.windowWidth);
            y[a] = p.random(0, p.windowHeight);
            vx[a] = 0;
            vy[a] = 0;
        }

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    p.draw = function() {
        // var g = slider.value();

        for (let a = 0; a < c; a++) {
            let ax = 0, ay = 0;

            for (let b = 0; b < c; b++) {
                if (a != b) {
                    dx = x[b] - x[a];
                    dy = y[b] - y[a];

                    const d_ab = p.sqrt(dx*dx + dy*dy);
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

            ax +=  - (x[a] - p.windowWidth / 4) / radius;
            ay +=  - (y[a] - p.windowHeight / 4) / radius;

            dx = p.mouseX - x[a];
            dy = p.mouseY - y[a];

            const d_ab = p.sqrt(dx*dx + dy*dy);
            //if (d < 1) d = 1;

            //var f = (d - 256) * m[b] / d;
            const f =  10 / d_ab**2

            ax += -f * dx;
            ay += -f * dy;

            vx[a] = vx[a] * p.exp(-gamma) + ax + step * p.randomGaussian();
            vy[a] = vy[a] * p.exp(-gamma) + ay + step * p.randomGaussian();
        }

        for (let a = 0; a < c; a++) {
            x[a] += vx[a];
            y[a] += vy[a];

            if ((x[a] < 0    &&    vx[a] < 0)    ||    (x[a] > p.width    &&    vx[a] > 0))    vx[a] = -vx[a];
            if ((y[a] < 0    &&    vy[a] < 0)    ||    (y[a] > p.height   &&    vy[a] > 0))    vy[a] = -vy[a];
        }

        p.background(255);

        p.fill(0, 128);
        for (let i = 0; i < c; i++) {
            p.circle(x[i], y[i], 8);
        }
        
        p.fill('red');
        p.circle(p.mouseX, p.mouseY, 20);

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    p.windowResized = function() {
        resizeCanvas(p.windowWidth, p.windowHeight);
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

    p.mouseClicked = function() {
        addNewParticle();
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    p.mouseDragged = function() {
        addNewParticle();
    }

}

new p5(laughlin, "laughlin");
