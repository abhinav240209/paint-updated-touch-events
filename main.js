canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var last_position_of_x,last_position_of_y;
var color="black";
var width_of_line=1;
var widthofscreen=screen.width;
console.log("widthof the screen is " + widthofscreen);
var new_width=widthofscreen-20;
var new_height=screen.height-50;
console.log("width of the new canvas is" + new_width + "," + new_height);
if (widthofscreen < 992) {
    canvas.width=new_width;
    canvas.height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    console.log("my touchstart");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

  canvas.addEventListener("touchmove", my_touchmove) 
   function my_touchmove(e) {
    console.log("my touchmove");
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.lineWidth=width_of_line;
    ctx.strokeStyle=color;
    console.log("last position of x - " + last_position_of_x + "last position of y - " + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current position of x - " + current_position_of_x + "current position of y - " + current_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();


    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
     
   }

   function cleararea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}