var tdlist = document.querySelectorAll(".square");
var colordisplay=document.querySelector("#currentcolor");
var head1=document.querySelector("h1");
var head2=document.querySelectorAll("h3");
head1.style.transition="all 0.3s";
head2[0].style.transition="all 0.3s";
head2[1].style.transition="all 0.3s";
var easy=document.querySelector("#leveleasy");
var act;
var hard=document.querySelector("#levelhard");
var t = document.querySelector("#newcolor");
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
fun(1);
act=1;
reset(6);
easy.addEventListener("click",function(){
	if(act==1){
		active(easy);
		deactive(hard);
		fun(0);
		reset(3);
		if(t.textContent=="Play Again?")
		t.textContent="New Colors";
		head1.style.background="#3366ff";
		head2[0].style.background="#3366ff";
		head2[1].style.background="#3366ff";
		display.textContent="";
	}
});

hard.addEventListener("click",function(){
	if(act==0){
		active(hard);
		deactive(easy);
		fun(1);
		reset(6);
		if(t.textContent=="Play Again?")
		t.textContent="New Colors";
		head1.style.background="#3366ff";
		head2[0].style.background="#3366ff";
		head2[1].style.background="#3366ff";
		display.textContent="";
	}
	
});

t.addEventListener("click",function(){
	if(act==0)
		reset(3);
	else
		reset(6);
	if(t.textContent=="Play Again?")
		t.textContent="New Colors";
	fun(act);
	head1.style.background="#3366ff";
	head2[0].style.background="#3366ff";
	head2[1].style.background="#3366ff";
	display.textContent="";

});

function fun(activated)
{
	
	if(activated==0){
		act=0;
		for(var x=3; x<6;x++){
			tdlist[x].style.background="black";
			tdlist[x].disabled="true";
		}
	}
	else
	{
		act=1;
		for(var x=3; x<6;x++){
			tdlist[x].disabled="false";
		}
	}
}

function reset(noOfBlocks)
{
	for(var i=0 ; i<noOfBlocks ; i++)
	{
		var x0 = Math.floor(Math.random() * 256);
		var y0 = Math.floor(Math.random() * 256);
		var z0 = Math.floor(Math.random() * 256);
		var appliedcolor="rgb("+x0+", "+y0+", "+z0+")";
		tdlist[i].style.background=appliedcolor;
		tdlist[i].style.transition="all 0.3s";
	}

	var indexoftd=Math.floor(Math.random() * noOfBlocks);
	pickedcolor=tdlist[indexoftd].style.background;
	colordisplay.textContent = pickedcolor;

	// if(act==0) noOfBlocks=3;
	// else noOfBlocks=6;
	for(var i=0;i<noOfBlocks;i++)
	{
		tdlist[i].addEventListener("click",function(){
			var clickedcolor = this.style.background;
			// console.log(clickedcolor);
			// console.log(pickedcolor);
			if(clickedcolor == pickedcolor)
			{
				display.textContent="Correct!";
				t.textContent="Play Again?";
				if(act==0) noOfBlocks=3;
				else noOfBlocks=6;
				for(var k=0;k<noOfBlocks;k++)
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
			}
		});
	}
}


