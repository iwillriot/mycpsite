window.onload = function(){




document.getElementById('btn').onclick = function(){
	
	var random = Math.round(Math.random()*10) + 1; //10
	var myguess = document.getElementById('myguess').value; //10
	
	random = parseInt(random);
	myguess = parseInt(myguess);
	
	
	if(random==myguess){
		document.getElementById('random').innerHTML = "YOU ARE CORRECT";
	}else{
		document.getElementById('random').innerHTML = "YOU ARE WRONG";
	}
	
}

}