function setup() {
  // Code here runs only once
  createCanvas(800, 600);
}

function draw() {
  // Code here runs continuously
  background(255);

  //drawGrid() is referenced to the function at the bottom of this screen. You can hide the grid by adding "//" in front of it. If you want to see the grid OVER your sketch, move it to the line before }.
  drawGrid()
  stroke(0)


  //Begin and End Point for Reference
  strokeWeight(10)
  stroke("red")
  point(120,220)
  point(320,220)

  //Curve Points for Reference
  point(160,160)
  point(220,140)
  point(280,160)
  
  strokeWeight(1)

  //curve line
  noFill()
  stroke("black")
    beginShape();
  //Repeat BEGIN point TWICE and END point TWICE
        curveVertex(120,220);
        curveVertex(120,220);
        curveVertex(160,160);
        curveVertex(220,140);
        curveVertex(280,160);
        curveVertex(320,220);
        curveVertex(320,220);
    endShape();




  

}

