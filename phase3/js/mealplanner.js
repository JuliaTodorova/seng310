$(document).ready(function(){
	$(".add").click(function(event){
		var recipeId = event.currentTarget.id;
		$("#recipeList").data("current-recipe-id",recipeId);
	});		
	
	$("#addRecipe").click(function(){
		var week = $("#week option:selected").text();
		var meal = $("#meal-type option:selected").text();
		var currentRecipe = $("#recipeList").data("current-recipe-id");
		console.log(week);
		console.log(meal);
		console.log(currentRecipe);
	});
});