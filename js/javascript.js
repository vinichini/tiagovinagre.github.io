$( document ).ready(function() {
	debugger;
createLines();

$("#line1").text('<!DOCTYPE html>');
$("#line2").text('<head>');
$("#line3").text('<meta charset="utf-8">');
$("#line4").text('<meta name="viewport" content="width=device-width, initial-scale=1">');
$("#line5").text('<script src="js/javascript.js"></script>');
$("#line6").text('<link href="css/styles.css" rel="stylesheet">');
$("#line7").text('<title>Tiago Page</title>');
$("#line8").text('</head>');
$("#line9").text('<body>');
$("#line10").text('<h1>como eee</h1>');
/*$("#line11").text('<body>');
$("#line12").text('<h1>como eee</h1>');*/



});
function createLines(){
	for(var i=1;i<11; i++){
$('#linesDiv').append("<div class="+"LineTextDiv"+"><span id="+"line"+i+" class="+"textTyping"+"></span><div id="+"hideLine"+i+" class="+ "hide"+"></div></div>");
	}
}