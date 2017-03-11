$(document).ready(function(){

	$(".add").click(function(){
		var recipeId = ($('.add').attr('id'));
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