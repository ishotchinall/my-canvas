var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
dragging=false;
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
context.lineWidth=2*radius;

var putpoint=function(e){
if(dragging)
{
context.lineTo(e.clientX,e.clientY);
context.stroke();

context.beginPath();
//context.arc(e.offsetX,e.offsetY,radius,0,Math.PI*2);
context.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
context.fill();
context.beginPath();
context.moveTo(e.clientX,e.clientY);
}
}
var engage=function()
{
dragging=true;

}
var disengage=function()
{
dragging=false;
context.beginPath();
}
canvas.addEventListener("mousedown",engage);
canvas.addEventListener("mousemove",putpoint);
canvas.addEventListener("mouseup",disengage);


