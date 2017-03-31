//BMI = weight(kilograms) / (height^2)(meters)
window.onload = function(){
const KILO2POUND = 0.453592;
const INT2METER = 0.0254;
document.getElementById('run').onclick = 	function(){
	var weight = prompt("Enter your weight");//make this an input tag in the html file
	var height = prompt("Enter your height");
	weight = parseFloat(weight);//clean this up as much as u can.
	height = parseFloat(height);
	weight = convert_weight(weight);
	height = convert_height(height);
	var bmi = calc(weight,height)
	alert(bmi);//instead of alert box have a span tag field change <span id="example">MY BMI?</span>
	}
	//function to convert numbers;
	function convert_weight(param1){
		var weight = param1 * (KILO2POUND/1);
		return weight;
	}
	
	function convert_height(param1){
		var height = param1 * (INT2METER/1);
		return height;	
	}
	
	function calc(param1, param2){
		return (param1/Math.sqrt(param2)).toFixed(2);
	}
}