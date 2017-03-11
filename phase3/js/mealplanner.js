$(document).ready(function(){

	$(".add").click(function(event){
		var recipeId = event.currentTarget.id;
		console.log(recipeId);
	});
	
	$("").click(function(event){
		alert(event.target.id);
	});

	$("#addRecipe").click(function(){
		var week = $("#week option:selected").text();
		var meal = $("#meal-type option:selected").text();
		console.log(week);
		console.log(meal);
	});
});