window.onload = function(){
	document.getElementById("run").onclick = function(){
		var array = startdeck();
		var ndx = Math.floor(Math.random() * 51);
		var ndx2 = Math.floor(Math.random() * 51);
		var card1 = document.getElementById("card1");
		var card2 = document.getElementById("card2");
		var str = array[ndx];
		var str2 = array[ndx2];
		card1.src = "cards/" + array[ndx];
		card2.src = "cards/" + array[ndx2];
		str = str.split("_")[0];
		str2 = str2.split("_")[0];
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
