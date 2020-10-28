window.addEventListener('load', function () {
    console.log('page is loaded');
       fetch('color.json')
       .then(response => response.json())
       .then(data => {

   console.log(data.colors[0].color);
   console.log(data.colors[0].hex);
  
   let colorArray = data.colors;
   let randomNumber=Math.floor(Math.random()*colorArray.length);
   let nameELement = document.getElementById('color-hex');
    nameELement.innerHTML = data.colors[randomNumber].color;
    

     let button=document.getElementById('color-button');
     button.addEventListener('click',function(){
      console.log("botton was clicked");
     let inputText=document.getElementById('c-input').value;

        console.log("the text avalible is:"+inputText);
  //https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json"+inputText;
 // let API_URL="//https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json"+inputText;
 //fetch(API_URL);
   fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json")
      .then(response => response.json())
      .then(data => {
      console.log(data);
    let headingElement=document.getElementById('c-hex');
    //let headingELement = document.getElementById('c-hex');
    headingElement.innerHTML=data.colors[randomNumber].hex;
    console.log(data.colors[randomNumber].hex);

    })
   })
  }) 
})


//*------p5 Code-------*
var x = [];
var dx;
var vx = [];
var fx;
var y = [];
var dy;
var vy = [];
var fy;
var m = [];
var dt; 
var N;
var I;
var r;
let p5data;

function setup() {  
  createCanvas(1000, 400);
  N=1000;
  I=1;
  dt = 0.001;
  for (var i=0;i<N; i++){
  x[i] = random(1,200);
  x[0]=200;
  dx = 0;
  fx=0;
  vx[i] = random(-1,1);
  y[i] = random(1,200);
  y[0]=200;
  dy = 0;
  fy=0;
  vy[i] = random(-1,1);
  m[i] = random(5,20);
  m[0]=10;
  r=0;

  console.log('Setup!!!')
  }
}

function draw() {
  
background(0,0,0,5);
for (var i=0; i<I; i++) {
 fx=0;
 fy=0;
for (var j=0; j<I; j++) {
  dx = x[i]-x[j];
  dy = y[i]-y[j];
  r = pow(dx,2)+pow(dy,2);
  r =sqrt(r);
  fx = fx - m[i]*m[j]*1000000*dx/pow(r+10,3);
  fy = fy - m[i]*m[j]*1000000*dy/pow(r+10,3);
}
//update velocities
vx[i]=vx[i]+fx*dt/m[i];
vy[i]=vy[i]+fy*dt/m[i];
//reflect at walls
if(x[i] <= 0 || x[i] >= 400)
	vx[i] = -vx[i];
if(y[i] <= 0 || y[i] >= 400)
	vy[i] = -vy[i];
//update positiions
x[i]=x[i]+vx[i]*dt;
y[i]=y[i]+vy[i]*dt;
//fill((20*i) % 255 + 40,(40*i) % 255 + 40,(255-20*i) % 255 + 40);
fill('p5data');

console.log('p5data');

noStroke();
//plot with certain trace
ellipse(x[i],y[i],m[i],m[i]);
}
}
//add celestial bodies
function mousePressed() {
  x[I]=mouseX;
  y[I]=mouseY;
  I=I+1
}
