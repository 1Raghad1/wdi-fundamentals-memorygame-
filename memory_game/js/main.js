
/*var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/


var cards= [
{
rank: 'queen',
suit: 'hearts',
cardImg: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImg: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImg: "images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImg: "images/king-of-diamonds.png"
}
];

var cardsInPlay =[];

function checkForMatch(){
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		console.log("You found a match!");
	} else {
		alert("Sorry, try again.");

	}
}

function flipCard(){
	var cardId=this.getAttribute('data-id');
	console.log(cardId);
	console.log("User flipped "+cards[cardId].rank);
	console.log("User flipped "+cards[cardId].suit);
	console.log("User flipped "+cards[cardId].cardImg);
	cardsInPlay.push(cards[cardId]);
	this.setAttribute("src",cards[cardId].cardImg);
	if(cardsInPlay.length===2){
		checkForMatch();
	}
}
function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener("click", flipCard);
	document.getElementById("game-board").appendChild(cardElement);
}
}

createBoard();


