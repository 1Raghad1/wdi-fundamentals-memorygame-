
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
	var counter=0;

	function checkForMatch(){
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			alert("You found a match!");
			removeOldCards();
			createBoard();
			counter++;
			countScore();
		} else {
			alert("Sorry, try again.");
			removeOldCards();
			createBoard();
			counter--;
			countScore();

		}
	}

	function flipCard(){
		var cardId=this.getAttribute('data-id');
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
	function removeOldCards(){
		var parent = document.getElementById("game-board");
	        parent.innerHTML = "";
	        cardsInPlay =[];

	}
	function countScore(){
	var scor = document.createElement("p");
	var parent = document.getElementById("score");
	parent.removeChild(parent.lastChild)
	scor.innerHTML=counter;

	document.getElementById("score").appendChild(scor);
	}

	createBoard();


