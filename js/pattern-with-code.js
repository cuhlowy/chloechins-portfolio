let sketch = (p) => {
    let colors;
  
    p.setup = () => {
      let canvas = p.createCanvas(600, 600);
      canvas.parent("pattern-sketch-container");
      p.background(255);
      p.noLoop();
  
      colors = new Colors([
        p.color(255, 0, 0),
        p.color(255, 165, 0),
        p.color(0, 128, 0)
      ]);
    };
  
    p.draw = () => {
      p.background(255);
      let numShapes = 20;
      for (let i = 0; i < numShapes; i++) {
        for (let j = 0; j < numShapes; j++) {
          let x = i * (p.width / numShapes);
          let y = j * (p.height / numShapes);
          let shapeSize = p.random(10, 50);
          let randomShape = p.floor(p.random(3));
  
          p.push();
          p.translate(x, y);
  
          let c = colors.getRandomColor();
          p.stroke(c);
          p.strokeWeight(p.random(1, 3));
          p.noFill();
  
          let shape = new Shape(randomShape, shapeSize, p);
          shape.draw();
          p.pop();
        }
      }
    };
  
    p.mousePressed = () => {
      p.redraw();
    };
  
    class Colors {
      constructor(colorArray) {
        this.colors = colorArray;
      }
  
      getRandomColor() {
        return p.random(this.colors);
      }
    }
  
    class Shape {
      constructor(type, size, pRef) {
        this.type = type;
        this.size = size;
        this.p = pRef;
      }
  
      draw() {
        if (this.type === 0) {
          this.drawCross();
        } else if (this.type === 1) {
          this.drawGrid();
        } else {
          this.drawCirclePattern();
        }
      }
  
      drawCross() {
        this.p.line(-this.size / 2, 0, this.size / 2, 0);
        this.p.line(0, -this.size / 2, 0, this.size / 2);
      }
  
      drawGrid() {
        for (let i = -this.size / 2; i < this.size / 2; i += this.size / 5) {
          this.p.line(i, -this.size / 2, i, this.size / 2);
          this.p.line(-this.size / 2, i, this.size / 2, i);
        }
      }
  
      drawCirclePattern() {
        for (let i = 0; i < 5; i++) {
          this.p.ellipse(0, 0, (i + 1) * (this.size / 5), (i + 1) * (this.size / 5));
        }
      }
    }
  };
  
  new p5(sketch);
  