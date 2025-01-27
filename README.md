# Workshop-4
Link: [https://whosaidthat-3636.github.io/Workshop-4/]
 
In this workshop, it focuses on interactivity allowing users to build their own character 

## Tasks
- Create an interactive p5js sketch with at least 3 different kinds of user input events
- Experiment with ways to record and redeploy inputs from the user

## Documentation
- I thought to execute an idea of allowing user's to build a character with UI elements
  
### 1) Setup 
- I started off with building the head
- Using ellipses
- Didn't want the head to be too circular so added on another ellipses on top to give if a softer, "cuter" look
```
 ellipse(250, 350, 208, 200);
 ellipse(250, 370, 210, 180);
```

### 2) Slider
- Slider used to alter the color of the animal
- I had trouble figuring how to set a sort of brownish tone (cause it would "make sense" for all animal options) colors for the slider
- I only knew how to set for RGB tones
- I turned to ChatGPT using the prompt "How do I set the slider to have a more brown tone" and attaching my lines of code
  * Response: 
``` 
let slider;

// in setup
  slider = createSlider(0, 255, 127);
  slider.position(20, 520);
  slider.size(210);

// ChatGPT response
  let val = slider.value();
  fill(210 - val / 4, 180 - val / 4, 130); 
  ellipse(250, 350, 208, 200);
  ellipse(250, 370, 210, 180);
```

### 3) Input box
- Input box for user to name their character
- Answers to the input box will be displayed on the top half of the sketch
- Having instruction in input box so user has an idea of what it's meant for
```
let theInput;

// in setup
theInput = createInput();
  theInput.attribute('placeholder', 'Name your animal');
  theInput.position(20, 500);
  theInput.size(200);

// in draw
 let words = theInput.value();
  fill(0);
  textAlign(CENTER);
  textSize(32);
  text(words, 230, 120);
```

### 4) Drop down selection box


## Notes 
### 1) location of image based on mousepressed
- preload function with loadImage and array 

**_in SETUP_**
```
function mousePressed() {
let r = random(variable);
image/text/etc(r, mouseX, mouseY);}
// when mouse pressed on x, y coordinate imagery is presented on the coordinated hovered by mouse
```

### 2) button as opposed to mouse click
```
let button = createButton('text display');
```
**_in SETUP_**
```
button.position(x, y);
// custom position of button
button.mousePressed(()=>{
// determine what happens when button is pressed
let r = random(array variable);
image/text/etc(r, specific x, specific y);
// image placed at a specific coordinate/
image/text/etc(r, random(width), random(height));
// image placed at random})
```

### 3) checkbox
- create checkbox variable
```
let checkbox;
```
**_in SETUP_**
```
checkbox = createCheckbox();
checkbox.position(x, y);
// custom position of checkbox
```
**_in DRAW_**
```
if(checkbox.checked()){
conditional statement}
// if checkbox is checked, condition will be executed
ie. let r = random(image/text/etc);
image/text/etc(r, x, y);
else {
conditional statement};
// else = if unchecked condition will occur
```

### 4) slider
```
let slider;
```
**_in SETUP_**
```
slider = createSlider(0, 255);
// 0 min value, 255 max value
slider.postion(x, y);
slider.size(value%);
```
**_in DRAW_**
```
let val = slider.value();
	- in DRAW because its constantly changing 
command(val);/ inputs of other commands ie in images with update pixel
```

### 5) drop down menu
**_in SETUP_**
```
selection = createSelect();
selection.position(x,y);
selection.option('display text');
selection.option('display text');
selection.option('display text');
```

**_in DRAW_**
```
let x = selection.selected();
if(x === selection option){
image(variable, x, y);
} else if(x === selection option){
image(variable, x, y);
} else if(x === selection option){
image(variable, x, y);
// conditions based on option chosen
// three equals: exactly equal to
```

### 6) inputs
- input box 
**_in SETUP_**
```
theInput = createInput();
theInput.position(x, y);
```
**_in DRAW_**
```
let text = theInput.value();
text(words, x, y);
```

### 7) using text
```
function preload(){
variable = loadStrings('texts/txt file name')}
```

### 8) formatting
```
variable = create element('h2, Questions?')
// h2: heading size
// Questions?: display text
greeting.style('color', 'black');
greeting.position();
```

### 9) ask something function
**_in SETUP_**
```
function askSomething(){
question = inputs.value();
inputs.value('');
listQuestions.push(question);}

if(listQuestions.length </> value){
listQuestions.shift();}
// if inputs exceeds value then inputs will shift and allow other inputs to appear
```

**_in DRAW_**
```
for(x=0; x <listQuestions.length; x++){
text(listQuestions[x], x, y,)}
// text into input box to display on set coordinates in the for command
```

### 10) sizing sketch to browser
```
createCanvas(windowWidth, windowHeight);
function windowResized(){
resizeCanvas(windowWidth, windowHeight);}
// windowResized: window size is constant
```
