//intro to objects

window.onload = function(){
document.getElementById('run').onclick = 	function(){
	var person1 = new person(180,72);
	var person2 = new person(190,80);
	var person3 = new person(142,60);
	
	
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
		alert(person1.getBMI());
	}
}