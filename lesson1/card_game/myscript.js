window.onload = function(){
	document.getElementById("run").onclick = function(){
		//create array with names of cards
		var array = startdeck();
		//creates random number between 0-51
		var ndx = Math.floor(Math.random() * 51);
		var ndx2 = Math.floor(Math.random() * 51);
		var ndx3 = Math.floor(Math.random() * 51);
		var ndx4 = Math.floor(Math.random() * 51);
		
		var card1 = document.getElementById("card1");
		var card2 = document.getElementById("card2");
		var ccard1 = document.getElementById("ccard1");
		var ccard2 = document.getElementById("ccard2");
		
		var str = array[ndx];
		var str2 = array[ndx2];
		
		var suit = array[ndx];
		var suit2 = array[ndx2];
 		
		
		
		var str3 = array[ndx];
		var str4 = array[ndx2];
		
		card1.src = "cards/" + array[ndx];
		card2.src = "cards/" + array[ndx2];
		ccard1.src = "cards/" + array[ndx3];
		ccard2.src = "cards/" + array[ndx4];
		
		str = str.split("_")[0];
		str2 = str2.split("_")[0];
		
		suit = (suit.split("_")[2]).split(".")[0];
		suit2 = (suit2.split("_")[2]).split(".")[0];
		
		
		alert(suit);
		alert(suit2);
		
		var myobject = card(str, suit);
		alert(myobject.getNumber());
		
		var myobject2 = card(str2, suit2);
		alert(myobject2.getNumber());
		
		var c = "";
		
		if(isNumeric(str)&&isNumeric(str2)){
			document.getElementById("txt").innerHTML = str + " - AND - " + str2 + "<br />" + (parseInt(str) + parseInt(str2));
		}else if(!isNumeric(str)&&!isNumeric(str2)){
			document.getElementById("txt").innerHTML = "DOUBLE TROUBLE";
		}else{
			if(isNumeric(str)){
						switch(str2){
							case "ace":
							c = "Mr. Ace";
							break;
							case "king":
							c = "The King";
							break;
							case "queen":
							c = "The Queen";
							break;
							case "jack":
							c = "The Jack";
							break;
						}
						document.getElementById("txt").innerHTML = "The suit is: " + c;
			}else{
				switch(str){
							case "ace":
							c = "Mr. Ace";
							break;
							case "king":
							c = "The King";
							break;
							case "queen":
							c = "The Queen";
							break;
							case "jack":
							c = "The Jack";
							break;
						}
						document.getElementById("txt").innerHTML = "The suit is: " + c;
			}
			//document.getElementById("txt").innerHTML = str + " - AND - " + str2;
		}
		
		
		
		
		
		
	}
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function startdeck(){
	var img = [
"2_of_clubs.png",
"2_of_diamonds.png",
"2_of_hearts.png",
"2_of_spades.png",
"3_of_clubs.png",
"3_of_diamonds.png",
"3_of_hearts.png",
"3_of_spades.png",
"4_of_clubs.png",
"4_of_diamonds.png",
"4_of_hearts.png",
"4_of_spades.png",
"5_of_clubs.png",
"5_of_diamonds.png",
"5_of_hearts.png",
"5_of_spades.png",
"6_of_clubs.png",
"6_of_diamonds.png",
"6_of_hearts.png",
"6_of_spades.png",
"7_of_clubs.png",
"7_of_diamonds.png",
"7_of_hearts.png",
"7_of_spades.png",
"8_of_clubs.png",
"8_of_diamonds.png",
"8_of_hearts.png",
"8_of_spades.png",
"9_of_clubs.png",
"9_of_diamonds.png",
"9_of_hearts.png",
"9_of_spades.png",
"10_of_clubs.png",
"10_of_diamonds.png",
"10_of_hearts.png",
"10_of_spades.png",
"jack_of_clubs.png",
"jack_of_diamonds.png",
"jack_of_hearts.png",
"jack_of_spades.png",
"queen_of_clubs.png",
"queen_of_diamonds.png",
"queen_of_hearts.png",
"queen_of_spades.png",
"king_of_clubs.png",
"king_of_diamonds.png",
"king_of_hearts.png",
"king_of_spades.png",
"ace_of_clubs.png",
"ace_of_diamonds.png",
"ace_of_hearts.png",
"ace_of_spades.png"
]
return img;
}


/*
create an object of a card.
*/

function card(number, symbol){
	this.number = parseInt(number);
	this.symbol = symbol;
	this.getNumber = function(){
		return this.number;
	}
}













