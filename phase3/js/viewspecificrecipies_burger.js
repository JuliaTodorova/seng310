function updateIngrR1(){
	var x = "i1";
	var initialssize = 4;
	var ingrNumb = [0, 5, 0.25, 0.25, 2, 1, 1, 1, 1.5 , 1.5];
	var y = 0;
	var ssize = document.getElementById("size1").value;
	
	while( y < ingrNumb.length) {
		
		var result = (ingrNumb[y]*ssize/initialssize).toPrecision(2);
		
		if ( parseFloat(result)/parseInt(result) == 1 ){
			document.getElementById(x).value = parseInt(result);
		}else{
			document.getElementById(x).value = result;
		}
		y++;
		x = x[0] + y;
	}
	
}



function clickedMe(){
	document.getElementById("size1").addEventListener("click", updateIngrR1);
}
updateIngrR1();
clickedMe();
