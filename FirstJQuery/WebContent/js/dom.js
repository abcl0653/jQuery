$(function(){
	$("#btn1").click(function(){
		$("#p1").text("Hello World!");
	});
	$("#btn2").click(function(){
		$("#p2").html("<b>Hello World!</b>");
	});
	$("#btn3").click(function(){
		$("#inp1").val("IBM");
	});
	$("#btn4").click(function(){
		$("#list1").prepend("<li>Appended list</li>");
	});
	$("#btn5").click(function(){
		$("#list1").toggleClass("blue");
		$("#list1").toggleClass("important");
	});
	

		  $("span").parentsUntil("div").css({"color":"red","border":"2px solid red"});
		
});