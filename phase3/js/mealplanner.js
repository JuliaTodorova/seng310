$(document).ready(function(){
	
	$(".add").click(function(event){
		var recipeId = event.currentTarget.id;
		$("#recipeList").data("current-recipe-id",recipeId);
	});	
  
	
	$("#addRecipe").click(function(){
		var week = $("#week option:selected").text();
		var meal = $("#meal-type option:selected").text();
		var currentRecipe = $("#recipeList").data("current-recipe-id");
		
		
		localStorage.setItem("day", week);
		localStorage.setItem("meal", meal);
		localStorage.setItem("recipe",currentRecipe);

		
		console.log(localStorage.getItem("recipe"));
		console.log(localStorage.getItem("day"));
		console.log(localStorage.getItem("meal"));
		
		
	});
});