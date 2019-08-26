$('ul').on("click","li",function(){
	$(this).toggleClass("done");

});

$("input").keypress(function(event){
	if(event.which==13)
	{
		$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+$("input").val()+"</li>");
		$(this).val("");
	}
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$(".fa-plus").on("click",function(){
	$("input").fadeToggle(300);
});