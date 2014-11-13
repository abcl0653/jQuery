$(function(){

	$("input").focus(function(){
		$(this).css("background-color","#cccccc");
	});
	
	$("input").blur(function(){
		  $(this).css("background-color","#ffffff");
		});
	
	$("#hide").click(function(){
		$("p").hide(1000);
	});
	
	$("#show").click(function(){
		$("p").show();
	});
	$("#slideToggle").click(function(){
		$(".c1").slideToggle();
	});
	
	$("#animate").click(function(){
		$("#blue").animate({width:'200px',left:'250px',opacity:'0.5'},"slow");
		$("#blue").animate({width:'200px',left:'50px',opacity:'0.8'},"slow");
		$("#blue").animate({fontSize:'3em'},"slow");
	});
	$("#stop").click(function(){
		$("#blue").stop();
	});
});