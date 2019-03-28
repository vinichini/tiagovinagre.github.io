$( document ).ready(function() {
createLines();
animateIntro();
animateChange();
changeBackground();


});

function createLines(){
	$(".textTyping").each(function(index) {
var size = $(this).width();
$(this).siblings("div").width(size+200);
});
}
// function createNewLines(){
// 	var linesSize = $(".textNew").length;
// 	for(var i=1;i<linesSize+1; i++){
// var size = $("#lineNew"+i).width();
// $("#hideNew"+i).width(size);
// }
// }
var delay = 0;
function animateIntro(){
$(".anim1").each(function(index) {
    var size = $(this).siblings("span").width();
	var duration= size/300*1000;
	
    $(this).delay(delay).animate({left:size},duration,"linear");
    delay += duration;    
});
}
// var delayNew = 0;
// function animateNewLines(){
// 	debugger
// $(".hideNew").each(function(index) {
//     var size = $(this).siblings("span").width();
// 	var duration= size/300*1000;
	
//     $(this).delay(delayNew).animate({left:size},duration,"linear");
//     delayNew += duration;    
// });
// }
var delayAfter = 0;
function animateChange(){
	var size = $("#line12").width();
$("#hideLine12").delay(delay).animate({left:size+1},500)
.delay(1000).animate({left:0},500, function(){
$("#line12").text("<h1>Informação Pessoal</h1>");
var newSize = $("#line12").width();
$("#hideLine12").width(newSize);
$("#hideLine12").delay(200).animate({left:newSize+1},700, function (){
$(".anim2").each(function(index) {
    var size = $(this).siblings(".textTyping").width();
	var duration= size/300*1000;
	
    $(this).delay(delayAfter).animate({left:size+16},duration,"linear");
    delayAfter += duration;    
});
      });
	

});

}
function changeBackground(){
	debugger
	setTimeout(function(){
		$("body").css("background-color", "#ffffff");
		$("body").css("color", "black");
		$(".hide").css("background-color", "#ffffff");
		$("#line12").text("Informação Pessoal").addClass("title");
		$("#changeTextDiv").append('<hr style="width:71%">');
		$("#line15").text("Tiago do Carmo Vinagre").css("font-weight", "bold");
		$(".LineTextDiv").css("display", "none");
		$("#hideLine12").css("display", "none");
		$(".information").addClass("info");
		$(".main").addClass("section");
		$("#photo").css("opacity", "1");

	},9000);
}
