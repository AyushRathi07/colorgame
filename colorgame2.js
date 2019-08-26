// var x = Math.floor(Math.random() * 256);
// var y = Math.floor(Math.random() * 256);
// var z = Math.floor(Math.random() * 256);
// var pickedcolor="rgb("+x+", "+y+", "+z+")";
var tdlist = document.querySelectorAll(".square");
var colordisplay=document.querySelector("#currentcolor");
var head1=document.querySelector("h1");
var head2=document.querySelectorAll("h3");
head1.style.transition="all 0.3s";
head2[0].style.transition="all 0.3s";
head2[1].style.transition="all 0.3s";
var easy=document.querySelector("#leveleasy");
var hard=document.querySelector("#levelhard");
function active(level){
	level.style.background="#3366ff";
	level.style.transition="all 0.3s";
	level.style.color="white";
}
function deactive(level){
	level.style.background="white";
	level.style.color="black";
}
active(hard);

easy.addEventListener("click",function(){
	active(easy);
	deactive(hard);
});

hard.addEventListener("click",function(){
	active(hard);
	deactive(easy);
});



for(var i=0 ; i<tdlist.length ; i++)
{
	var x0 = Math.floor(Math.random() * 256);
	var y0 = Math.floor(Math.random() * 256);
	var z0 = Math.floor(Math.random() * 256);
	var appliedcolor="rgb("+x0+", "+y0+", "+z0+")";
	tdlist[i].style.background=appliedcolor;
	tdlist[i].style.transition="all 0.3s";
}
var indexoftd=Math.floor(Math.random() * tdlist.length);
pickedcolor=tdlist[indexoftd].style.background;
colordisplay.textContent = pickedcolor;
for(var i=0;i<tdlist.length;i++)
{
	tdlist[i].addEventListener("click",function(){
		var clickedcolor = this.style.background;
		// console.log(clickedcolor);
		// console.log(pickedcolor);
		if(clickedcolor == pickedcolor)
		{
			display.textContent="Correct!";
			for(var k=0;k<tdlist.length;k++)
			{
				tdlist[k].style.background=pickedcolor;
			}
			head1.style.background=pickedcolor;
			head2[0].style.background=pickedcolor;
			head2[1].style.background=pickedcolor;
		}
		else
		{
			display.textContent="Try Again!";
			this.style.background="black";
			// this.disabled=true;
		}
	});
}


