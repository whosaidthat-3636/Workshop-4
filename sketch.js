let slider;
let theInput;

function setup() {
  createCanvas(500, 500);
  noStroke();
  
  fill(0);
  textSize(15);
  text('My name is', 0, 510);
  text('Color', 0, 530);
  
  slider = createSlider(0, 255, 127);
  slider.position(20, 550);
  slider.size(210);
  
  theInput = createInput();
  theInput.position(20, 520);
  theInput.size(200);
  
  selection = createSelect();
  selection.position(430, 510);
  selection.option('rabbit');
  selection.option('bear');
  selection.option('dog');
  selection.option('cat');
  
}

function draw() {
  background(255); 
  
  let words = theInput.value();
  fill(0);
  textAlign(CENTER);
  textSize(32);
  text(words, 230, 120);

  let val = slider.value();
   //for lighter brown
  fill(210 - val / 4, 180 - val / 4, 130); 
  ellipse(250, 350, 208, 200);
  ellipse(250, 370, 210, 180);
  
  let x = selection.selected();
  if(x === 'cat'){
    triangle(160, 300, 150, 170, 250, 300);
    triangle(340, 300, 350, 170, 250, 300);
   } else if (x === 'dog') {
    // darker brown for ears
    fill(150, 100, 50); 
    ellipse(180, 310, 60, 120); 
    ellipse(320, 310, 60, 120); 
  } else if (x === 'bear') {
    fill(150, 100, 50); 
    ellipse(150, 260, 90, 90); 
    ellipse(350, 255, 90, 90);    
  } else if (x === 'rabbit') {
    fill(255, 200, 180);
     push();
    translate(170, 300); 
    rotate(-PI / 6); 
    ellipse(0, -60, 70, 200); 
    pop();
    push();
    translate(330, 300); 
    rotate(PI / 6); 
    ellipse(0, -60, 70, 200); 
    pop();
    
  }
}