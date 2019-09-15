
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
		alert("You found a match!");
		removeOldCards();
		createBoard();
	} else {
		alert("Sorry, try again.");
		removeOldCards();
		createBoard();

	}
}

function flipCard(){
	var cardId=this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId]);
	this.setAttribute("src",cards[cardId].cardImg);
	if(cardsInPlay.length%2===0){
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
function removeOldCards(){
	var parent = document.getElementById("game-board");
        parent.innerHTML = "";
        cardsInPlay =[];

}

createBoard();


