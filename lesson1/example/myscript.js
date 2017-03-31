window.onload = function(){

document.getElementById('btn').onclick = function(){

	var random = Math.round(Math.random()*10) + 1;
	var myguess = document.getElementById('myguess').value;

	random = parseInt(random);
	myguess = parseInt(myguess);


	if(random==myguess){
		document.getElementById('random').innerHTML = "YOU ARE CORRECT";
	}else{
		document.getElementById('random').innerHTML = "YOU ARE WRONG";
	}
}

document.getElementById('enter').onclick = function(){
var month = document.getElementById('month').value;

var randomdice = Math.floor(Math.random() * 6) + 1;

switch(month){
	case "1":
		alert("ONE")
		break;
	case "2":
		alert("TWO")
		break;
	case "3":
		alert("THREE")
		break;
	case "4":
		alert("FOUR")
		break;
	default:
		alert("DEFAULT")
		break;

}




}

}
