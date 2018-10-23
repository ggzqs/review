$(function(){
	// console.log($);
	$(".contain").height($(window).height());
	$(".contain").width($(window).width());

	$("#drop").mouseover(function(){
		$("#dropOl").css("display","block");
	});
	$("#drop").mouseout(function(){
		$("#dropOl").css("display","none");
	});
	$("#shatan").mouseover(function(){
		$(".secondOl1").css("display","block");
	});
	$("#shatan").mouseout(function(){
		$(".secondOl1").css("display","none");
	});
	$("#xilie580").mouseover(function(){
		$(".secondOl2").css("display","block");
	});
	$("#xilie580").mouseout(function(){
		$(".secondOl2").css("display","none");
	});
});
