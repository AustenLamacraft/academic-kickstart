// Based on https://editor.p5js.org/lemonsquares/sketches/XtLvUvgAF
// All sketches in instance mode, to keep variables out of global scope
// https://p5js.org/examples/instance-mode-instantiation.html

const elementary = function(p) {

    let col, rw, gen;
    const cellSize = 4
    let cells = [];
    
    let ruleNumber = 120
    
    p.setup = function() {
        p.createCanvas(800, 500);
        p.noStroke();

        col = p.floor(p.windowWidth / cellSize);
        rw = p.floor(p.windowHeight / cellSize);

        let inp = p.createInput(ruleNumber);
        inp.style('font-size', '40px')
        inp.parent("elementary-ca")
        inp.position(-80, -15);
        inp.style('position', 'relative')
        inp.size(70);

        const setRule = function() {
            ruleNumber = Number(this.elt.value)
        }

        inp.input(setRule);
        reset();

        

    }

    function reset() {
        // set cell to random val
        for (let i = 0; i < col; i++) {
            cells[i] = p.floor(p.random(2));
        }

        gen = 0;
    }

    p.draw = function() {
        for (let i = 0; i < col; i++) {
            let cell = cells[i];
            p.fill(cell * 255, cell * 150, 255);
            p.rect(i * cellSize, gen * cellSize, cellSize, cellSize );
        }
        gen++;

        // if the screen is not filled
        if (gen < rw) {
            let newcells = [];
            // convert rule to rule set 
            const rule = ruleNumber.toString(2).padStart(8, '0').split("").reverse()
            for (let i = 0; i < col; i++) {
                let left = i > 0 ? cells[i - 1] : cells[cells.length - 1]
                let centre = cells[i];
                let right = i < cells.length - 1 ? cells[i + 1] : cells[0]
                
                newcells[i] = rule[parseInt(String(left) + String(centre) + String(right), 2)];
            }
            
            cells = newcells;
        } else {
            reset();
        }
    }

}

new p5(elementary, "elementary-ca");
