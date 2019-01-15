$( document ).ready(function() {
createLines();
animateLines();
animateChange();
changeBackground();

/*$("#line11").text('<body>');
$("#line12").text('<h1>como eee</h1>');*/



});

function createLines(){
	var linesSize = $(".textTyping").length;
	for(var i=1;i<linesSize+1; i++){

var size = $("#line"+i).width();
$("#hideLine"+i).width(size+200);
}
// for(var i=1;i<11; i++){
// var size = $("#line"+i).width();
// var duration = size * 6;	
// if(i%2!=0){
// $('#hideLine'+i).animate({left:size},duration, function() {
// $('#hideLine'+i+1).animate({left:size},duration)
// });
// }
// }
	

}
// function animateLines(){
// $(".hide").each(function(index) {
// 	debugger
// 	var size = $(this).width();
// 	var duration;
// 	if(size<115){
// duration=500;
// 	}else{
// duration=1000;
// 	}
// 	var delayTime = index *1000;	
//     $(this).delay(delayTime).animate({left:size},duration)
// });
// }
var delay = 0;
function animateLines(){
$(".hide").each(function(index) {
    var size = $(this).siblings("span").width();
	var duration= size/300*1000;
	
    $(this).delay(delay).animate({left:size},duration,"linear");
    delay += duration;    
});
}
var delayAfter = 0;
function animateChange(){
	var size = $("#line12").width();
$("#hideLine12").delay(delay).animate({left:size+1},500)
.delay(1000).animate({left:0},500, function(){
$("#line12").text("<h1>Informação Pessoal</h1>");
var newSize = $("#line12").width();
$("#hideLine12").width(newSize);
$("#hideLine12").delay(200).animate({left:newSize+1},700, function (){
$(".hideChange").each(function(index) {
    var size = $(this).siblings("span").width();
	var duration= size/300*1000;
	
    $(this).delay(delayAfter).animate({left:size},duration,"linear");
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
		$(".hideChange").css("background-color", "#ffffff");
		$("#hideLine12").css("background-color", "#ffffff");
		$("#line12").text("Informação Pessoal").addClass("title");
		$("#line15").text("Tiago do Carmo Vinagre").css("font-weight", "bold");
		$(".LineTextDiv").css("display", "none");
	},9000);
}





/*
.delay(30000)
   .animate({left:'185px'},{ duration: 2800})                 //ao movimentar-se, as letras vão aparecendo
   .delay(10)
    .animate({left:'50px'},{ duration: 1100})
    .delay(400)
    .animate({left:'245px', width:'150px'},{ duration: 2800})  //como está a ir muito para a direita teve-se que diminuir o width para não sobrepor a caixa de pesquisa
    .delay(400)
    .animate({left:'390px'},{ duration: 2800});
$('.texto')
    .delay(34000)
    .animate({opacity: '0' });
     $('.texto2')
    .delay(34000)
    .animate({opacity: '1' });*/