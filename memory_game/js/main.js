
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

function flipCard(cardId){
	console.log("User flipped "+cards[cardId].rank);
	console.log("User flipped "+cards[cardId].suit);
	console.log("User flipped "+cards[cardId].cardImg);
	cardsInPlay.push(cards[cardId]);
	if(cardsInPlay.length===2){
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);



