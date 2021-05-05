canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car2Width=100;
car2Height=90;
car2X=10;
car2Y=10;
car2image="car1.png";
car1Width=100;
car1Height=90;
car1X=10;
car1Y=500;
car1image="car1 (1).png";
canvasbg="https://i.postimg.cc/bv5d35nK/racing.jpg";

function add(){
bgimage=new Image();
bgimage.onload=uploadbackground;
bgimage.src=canvasbg;
car1img=new Image();
car1img.onload=uploadcar1;
car1img.src=car1image;

car2img=new Image();
car2img.onload=uploadcar2;
car2img.src=car2image;
}

function uploadbackground(){
ctx.drawImage(bgimage, 0, 0, canvas.width, canvas.height);

}
function uploadcar1(){
ctx.drawImage(car1img, car1X, car1Y, car1Width, car1Height);

}

function uploadcar2(){
    ctx.drawImage(car2img, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keypress=e.keyCode;
if(keypress=='38')
{
car1up();
console.log("Anshul just pressed the car1 up key")
}
if(keypress=='40')
{
car1down();
console.log("Anshul just pressed the car1 down key")
}
if(keypress=='37')
{
car1left();
console.log("Anshul just pressed the car1 left key")
}
if(keypress=='39')
{
car1right();
console.log("Anshul just pressed the car1 right key")
}
if(keypress=='87')
{
    car2up();
    console.log("anshul just pressed car2 W key");
}
if(keypress=='83')
{
car2down();
console.log("anshul just pressed the car2 S key");
}
if(keypress=='65')
{
car2right();
console.log("anshul just pressed the car2 A key");
}
if(keypress=='68')
{
car2left();
console.log("anshul just pressed the D key");
}
}
function car1up()
{
if(car1Y>=0)
{
    car1Y=car1Y-10;
uploadbackground();
uploadcar1();
uploadcar2();
}
}
function car1down()
{
if(car1Y<=500)
{
    car1Y=car1Y+10;
uploadbackground();
uploadcar1();
uploadcar2();
}
}
function car1left()
{
if(car1X>=0)
{
    car1X=car1X-10;
uploadbackground();
uploadcar1();
uploadcar2();
}
}
function car1right()
{
if(car1X<=700)
{
    car1X=car1X+10;
uploadbackground();
uploadcar1();
uploadcar2();
}
}
function car2up()
{
if(car2Y>=0)
{
    car2Y=car2Y-10;
uploadbackground();
uploadcar2();
uploadcar1();
}
}
function car2down()
{
if(car2Y<=500)
{
    car2Y=car2Y+10;
uploadbackground();
uploadcar2();
uploadcar1();
}
}
function car2left()
{
if(car2X>=0)
{
    car2X=car2X-10;
uploadbackground();
uploadcar2();
uploadcar1();
}
}
function car2right()
{
if(car2X<=700)
{
    car2X=car2X+10;
uploadbackground();
uploadcar2();
uploadcar1();
}
}