$(document).ready(function() {
	console.log("Script included!");

	$(".reveal").hide();
	$(".tracker").hide();

	$(".ingredient").click(function() {
			$(this).toggleClass("clickedOn");
	});

	$(".ingredient").click(function() {
		$(this).toggleClass("ingredient");
	});

	$(".button").mousedown(function() {
			$(this).css("background-color", "#ff9933")
	});		

	$(".button").mouseup(function() {
			$(this).css("background-color", "#e67300")		
	});

	$(".button").click(function() {
		$(".imageContainer").toggle();
	});

	$(".button").click(function() {
		$(".container").toggle();
	});


	$(".expand").click(function() {
		$(".reveal").toggle();
	});

		$(".expand").click(function() {
		$(this).hide();
	});

	$(".recipe").click(function() {
		$(".tracker").show();
	});

	$(".recipe").click(function() {
		$(".tracker").animate({top:(event.pageY)});
	});
});