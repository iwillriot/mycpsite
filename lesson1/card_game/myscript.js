window.onload = function(){
	
	document.getElementById("run").onclick = function(){
		var array = deck();
		var ndx = Math.floor(Math.random() * 51);  
		var card1 = document.getElementById("card1");
		
		
		
		card1.src = array[ndx];
		
	}
}
function deck(){
	var img = [
"cards/2_of_clubs.png",
"cards/2_of_diamonds.png",
"cards/2_of_hearts.png",
"cards/2_of_spades.png",
"cards/3_of_clubs.png",
"cards/3_of_diamonds.png",
"cards/3_of_hearts.png",
"cards/3_of_spades.png",
"cards/4_of_clubs.png",
"cards/4_of_diamonds.png",
"cards/4_of_hearts.png",
"cards/4_of_spades.png",
"cards/5_of_clubs.png",
"cards/5_of_diamonds.png",
"cards/5_of_hearts.png",
"cards/5_of_spades.png",
"cards/6_of_clubs.png",
"cards/6_of_diamonds.png",
"cards/6_of_hearts.png",
"cards/6_of_spades.png",
"cards/7_of_clubs.png",
"cards/7_of_diamonds.png",
"cards/7_of_hearts.png",
"cards/7_of_spades.png",
"cards/8_of_clubs.png",
"cards/8_of_diamonds.png",
"cards/8_of_hearts.png",
"cards/8_of_spades.png",
"cards/9_of_clubs.png",
"cards/9_of_diamonds.png",
"cards/9_of_hearts.png",
"cards/9_of_spades.png",
"cards/10_of_clubs.png",
"cards/10_of_diamonds.png",
"cards/10_of_hearts.png",
"cards/10_of_spades.png",
"cards/jack_of_clubs.png",
"cards/jack_of_diamonds.png",
"cards/jack_of_hearts.png",
"cards/jack_of_spades.png",
"cards/queen_of_clubs.png",
"cards/queen_of_diamonds.png",
"cards/queen_of_hearts.png",
"cards/queen_of_spades.png",
"cards/king_of_clubs.png",
"cards/king_of_diamonds.png",
"cards/king_of_hearts.png",
"cards/king_of_spades.png",
"cards/ace_of_clubs.png",
"cards/ace_of_diamonds.png",
"cards/ace_of_hearts.png",
"cards/ace_of_spades.png"
]
return img;
}




