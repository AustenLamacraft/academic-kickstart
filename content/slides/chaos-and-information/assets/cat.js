// Arnold's cat map
// All sketches in instance mode, to keep variables out of global scope
// https://p5js.org/examples/instance-mode-instantiation.html

const discreteCatMap = function(x, y, N) {
    return [(2 * x + y) % N, (x + y) % N]
}

const width = 3024

export default function catMap(p) {

    let img;
    p.preload = function() {
        img = p.loadImage('assets/lucian.jpeg');
        console.log(img.width, img.height)
    }
    p.setup = function() {
        p.createCanvas(400, 400);
        p.image(img, 0, 0, 400, 400, 0, 0, width, width);
        img.loadPixels()
        p.noLoop()
        
    }

    p.mouseClicked = function() {
        if (p.isLooping()) {
            p.noLoop()
        }
        else {
            p.loop()
        }
        noLoop()
        // for (let y = 0; y < width; y++) {
        //     for (let x = 0; x < width; x++) {
        //         const idx = (x + y * width) * 4
        //         const [newX, newY] = discreteCatMap(x, y, width)
        //         const newIdx = (newX + newY * width) * 4
        //         for (let rgba = 0; rgba < 4; rgba++) {
        //             img.pixels[newIdx + rgba] = img.pixels[idx + rgba]
        //         }
        //     }
        // }
        // img.updatePixels();
        // p.image(img, 0, 0, 400, 400, 0, 0, width, width);
    }

    p.draw = function() {
        if (p.isLooping()) {
            for (let y = 0; y < width; y++) {
                for (let x = 0; x < width; x++) {
                    const idx = (x + y * width) * 4
                    const [newX, newY] = discreteCatMap(x, y, width)
                    const newIdx = (newX + newY * width) * 4
                    for (let rgba = 0; rgba < 4; rgba++) {
                        img.pixels[newIdx + rgba] = img.pixels[idx + rgba]
                    }
                }
            }
            img.updatePixels();
            p.image(img, 0, 0, 400, 400, 0, 0, width, width);
        }

    }

}