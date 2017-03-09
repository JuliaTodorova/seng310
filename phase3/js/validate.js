function validateUser(){
	user = document.getElementById('Email').value;
	pass = document.getElementById('Password').value;
	if($.isEmptyObject(user) || $.isEmptyObject(pass)){
		alert("Please enter your username and password")
		return;
	}
	else{
    	window.location.href="profile.html";
	}
}

function clickedMe(){
	document.getElementById("signIn").addEventListener("click", validateUser);
}

clickedMe();