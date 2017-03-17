
	

$(document).ready(function(){
//make an array to rep the table

	
		//monday
		if(localStorage.getItem("day")=="Monday" && localStorage.getItem("meal")=="Breakfast"){
				//arr[0][0]
				document.getElementById('tg-M-B').innerHTML=localStorage.getItem("recipe")
				
		}
		
		else if(localStorage.getItem("day")=="Monday" && localStorage.getItem("meal")=="Lunch"){
				document.getElementById('tg-M-L').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Monday" && localStorage.getItem("meal")=="Dinner"){
				document.getElementById('tg-M-D').innerHTML=localStorage.getItem("recipe");
		}
		
		//tuesday
		else if(localStorage.getItem("day")=="Tuesday" && localStorage.getItem("meal")=="Breakfast"){
				document.getElementById('tg-T-B').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Tuesday" && localStorage.getItem("meal")=="Lunch"){
				document.getElementById('tg-T-L').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Tuesday" && localStorage.getItem("meal")=="Dinner"){
				document.getElementById('tg-T-D').innerHTML=localStorage.getItem("recipe");
		}
		
		//wednesday
		else if(localStorage.getItem("day")=="Wednesday" && localStorage.getItem("meal")=="Breakfast"){
				document.getElementById('tg-W-B').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Wednesday" && localStorage.getItem("meal")=="Lunch"){
				document.getElementById('tg-W-L').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Wednesday" && localStorage.getItem("meal")=="Dinner"){
				document.getElementById('tg-W-D').innerHTML=localStorage.getItem("recipe");
		}
		
		//thursday
		else if(localStorage.getItem("day")=="Thursday" && localStorage.getItem("meal")=="Breakfast"){
				document.getElementById('tg-TH-B').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Thursday" && localStorage.getItem("meal")=="Lunch"){
				document.getElementById('tg-TH-L').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Thursday" && localStorage.getItem("meal")=="Dinner"){
				document.getElementById('tg-TH-D').innerHTML=localStorage.getItem("recipe");
		}
		
		//friday
		else if(localStorage.getItem("day")=="Friday" && localStorage.getItem("meal")=="Breakfast"){
				document.getElementById('tg-F-B').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Friday" && localStorage.getItem("meal")=="Lunch"){
				document.getElementById('tg-F-L').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Friday" && localStorage.getItem("meal")=="Dinner"){
				document.getElementById('tg-F-D').innerHTML=localStorage.getItem("recipe");
		}
		
		//saturday
		else if(localStorage.getItem("day")=="Saturday" && localStorage.getItem("meal")=="Breakfast"){
				document.getElementById('tg-S-B').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Saturday" && localStorage.getItem("meal")=="Lunch"){
				document.getElementById('tg-S-L').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Saturday" && localStorage.getItem("meal")=="Dinner"){
				document.getElementById('tg-S-D').innerHTML=localStorage.getItem("recipe");
		}
		
	
		else if(localStorage.getItem("day")=="Sunday" && localStorage.getItem("meal")=="Breakfast"){
				document.getElementById('tg-SU-B').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Sunday" && localStorage.getItem("meal")=="Lunch"){
				document.getElementById('tg-SU-L').innerHTML=localStorage.getItem("recipe");
		}
		
		else if(localStorage.getItem("day")=="Sunday" && localStorage.getItem("meal")=="Dinner"){
				document.getElementById('tg-SU-B').innerHTML=localStorage.getItem("recipe");
		}
	
	
	
	
	
});
	
	
