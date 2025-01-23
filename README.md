# Workshop-4

## Tasks
- Create an interactive p5js sketch with at least 3 different kinds of user input events
- Experiment with ways to record and redeploy inputs from the user

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
