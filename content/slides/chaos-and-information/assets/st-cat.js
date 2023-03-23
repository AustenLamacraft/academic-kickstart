// Spatiotemporal cat
// Illustrate difference between the space time dual and non-dual cases
// All sketches in instance mode, to keep variables out of global scope
// https://p5js.org/examples/instance-mode-instantiation.html

// Image size
const WIDTH = 74;           
const CIRCUIT_WIDTH = 6;
const INITIAL_SITE = 2    
const J = 1;

function modulus(x, y) {
    // Note that the % operator won't do was we don't want negative numbers
    return x - y * Math.floor(x / y)
}

function discreteCatMap([x, y]) {
    return [modulus(2 * x + y, WIDTH), modulus(x + y, WIDTH)]
}

function coupling([s1, s2], J) {
    const [x1, y1] = s1
    const [x2, y2] = s2
    return [[x1, modulus(y1 - J * x2, WIDTH)], [x2, modulus(y2 - J * x1, WIDTH)]]
}

function stCatMap([site1, site2], J) {
    let [s1, s2] = coupling([site1, site2], J)
    s1 = discreteCatMap(s1)
    s2 = discreteCatMap(s2)
    return coupling([s1, s2], J)
}

function update(torus, s1, s2, J) {
    // update sites s1 and s2
    torus.forEach((point) => {
        const {coords} = point
        const [new1, new2] = stCatMap([coords[s1], coords[s2]], J, WIDTH)
        coords[s1] = new1
        coords[s2] = new2
    })
}

const randomPhaseSpacePoint = function(N) {
    return [Math.floor(Math.random() * N), Math.floor(Math.random() * N)]
}

export default function stCat(p) {

    let catImg
    const randomPoints = [...Array(CIRCUIT_WIDTH)].map(() => randomPhaseSpacePoint(WIDTH))

    // This will contain all points on the torus in the following format
    // Each point is an object {color, coords}, where color gives the p5.Color of the point
    // coords are a list of lists, giving the pair of phase space coordinates for each site
    let torus = []

    function makeImages() {
        const imgs = [...Array(CIRCUIT_WIDTH)].map(() => p.createImage(WIDTH, WIDTH))
        imgs.forEach((img) => img.loadPixels())
        torus.forEach(point => {        
            const {color, coords} = point
            imgs.forEach((img, idx) => {
                img.set(coords[idx][0], coords[idx][1], color)
            })
        })
        imgs.forEach((img) => img.updatePixels())
        return imgs
    }

    p.preload = function() {
        catImg = p.loadImage('assets/cherries.jpg');
    }

    p.setup = function() {
        for (let y = 0; y < WIDTH; y++) {
            for (let x = 0; x < WIDTH; x++) {
                const color = catImg.get(x, y)
                const coords = []
                for (let s = 0; s < CIRCUIT_WIDTH; s++) {
                    if (s != INITIAL_SITE) {
                        coords.push(randomPoints[s])
                    }
                    else {
                        coords.push([x,y])
                    }
                    
                }
                torus.push({color, coords})
            }
        }

        p.createCanvas(1000, 500);
        makeImages().forEach((img, idx) => p.image(img, idx * 125, 400, 75, 75, 0, 0, WIDTH, WIDTH));

        update(torus, 0, 1, J)
        update(torus, 2, 3, J)
        update(torus, 4, 5, J)
        makeImages().forEach((img, idx) => p.image(img, idx * 125, 275, 75, 75, 0, 0, WIDTH, WIDTH));

        update(torus, 1, 2, J)
        update(torus, 3, 4, J)
        makeImages().forEach((img, idx) => p.image(img, idx * 125, 150, 75, 75, 0, 0, WIDTH, WIDTH));

        update(torus, 0, 1, J)
        update(torus, 2, 3, J)
        update(torus, 4, 5, J)
        makeImages().forEach((img, idx) => p.image(img, idx * 125, 25, 75, 75, 0, 0, WIDTH, WIDTH));
        
    }

    p.mouseClicked = function() {
        if (p.isLooping()) {
            p.noLoop()
        }
        else {
            p.loop()
        }
        noLoop()
    }


}