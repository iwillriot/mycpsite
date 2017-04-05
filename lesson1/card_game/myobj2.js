var deck = startdeck();
window.onload = function(){
	document.getElementById("run").onclick = function(){
		document.getElementById('txt').innerHTML = deck[0];
		removeCard(0);
		alert(deck[0])
		
	}
}

function startHand(hand){
	var ndx1 = Math.floor(Math.random() * 51)
	var ndx2 = Math.floor(Math.random() * 51)
	this.card1 = (hand[ndx1]).split("_")[0];
	this.card2 = (hand[ndx2]).split("_")[0];
	this.suit1 = (hand[ndx1].split("_")[2]).split(".")[0];
	this.suit2 = (hand[ndx2].split("_")[2]).split(".")[0];
	this.url1 = hand[ndx1];
	this.url2 = hand[ndx2];
	removeCard(ndx1);
	removeCard(ndx2);
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
img = shuffle(img);
return img;
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function shuffle(array){
	var currentIndex = array.length, temporaryValue, randomIndex;
	while(0 != currentIndex){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;		
		}
		return array;
}













function removeCard(index){
	var temp = deck;
	
	
	for(var i=0;i<index;i++){
			if(i==index || i == 0 || i == deck.length){
				continue;
			}else{
				temp.push(deck[i]);
			}
		}
	deck = temp;
}