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
		
		//write code to put it in schedule
		//monday
		if(week=="Monday" && meal=="Breakfast"){
			document.getElementById("td-M-B")=currentRecipe;
		}
		else if(week=="Monday" && meal=="Lunch"){
			document.getElementById("td-M-L")=currentRecipe;
		}
		else if(week=="Monday" && meal=="Dinner"){
			document.getElementById("td-M-D")=currentRecipe;
		}
		
		//tuesday
		else if(week=="Tuesday" && meal=="Breakfast"){
			document.getElementById("td-T-B")=currentRecipe;
		}
		else if(week=="Tuesday" && meal=="Lunch"){
			document.getElementById("td-T-L")=currentRecipe;
		}
		else if(week=="Tuesday" && meal=="Dinner"){
			document.getElementById("td-T-D")=currentRecipe;
		}
		
		//wednesday
		else if(week=="Wednesday" && meal=="Breakfast"){
			document.getElementById("td-W-B")=currentRecipe;
		}
		else if(week=="Wednesday" && meal=="Lunch"){
			document.getElementById("td-W-L")=currentRecipe;
		}
		else if(week=="Wednesday" && meal=="Dinner"){
			document.getElementById("td-W-D")=currentRecipe;
		}
		
		//thursday
		else if(week=="Thursday" && meal=="Breakfast"){
			document.getElementById("td-TH-B")=currentRecipe;
		}
		else if(week=="Thursday" && meal=="Lunch"){
			document.getElementById("td-TH-L")=currentRecipe;
		}
		else if(week=="Thursday" && meal=="Dinner"){
			document.getElementById("td-TH-D")=currentRecipe;
		}
		
		//friday
		else if(week=="Friday" && meal=="Breakfast"){
			document.getElementById("td-F-B")=currentRecipe;
		}
		else if(week=="Friday" && meal=="Lunch"){
			document.getElementById("td-F-L")=currentRecipe;
		}
		else if(week=="Friday" && meal=="Dinner"){
			document.getElementById("td-F-D")=currentRecipe;
		}
		
		//saturday
		else if(week=="Saturday" && meal=="Breakfast"){
			document.getElementById("td-S-B")=currentRecipe;
		}
		else if(week=="Saturday" && meal=="Lunch"){
			document.getElementById("td-S-L")=currentRecipe;
		}
		else if(week=="Saturday" && meal=="Dinner"){
			document.getElementById("td-S-D")=currentRecipe;
		}
		
		//sunday
		else if(week=="Sunday" && meal=="Breakfast"){
			document.getElementById("td-Su-B")=currentRecipe;
		}
		else if(week=="Sunday" && meal=="Lunch"){
			document.getElementById("td-Su-L")=currentRecipe;
		}
		else if(week=="Sunday" && meal=="Dinner"){
			document.getElementById("td-Su-D")=currentRecipe;
		}
		
	});
});