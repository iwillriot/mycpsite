//intro to objects
window.onload = function(){
document.getElementById('run').onclick = function(){
	//get the inputs from the html file
	//then create a person objects
	//then return bmi into span tag in html file
	//var person1 = new person();	
		function person(weight, height){
			const KILO2POUND = 0.453592;
			const INT2METER = 0.0254;
			this.weight = weight;
			this.height = height;
			this.convert_weight = function(){
				return (this.weight * KILO2POUND);
			}
			this.convert_height = function(){
				return (this.height * INT2METER);
			}
			this.getBMI = function(){
				return (this.convert_weight()/Math.sqrt(this.convert_height())).toFixed(2);
			}
		}
	}
}