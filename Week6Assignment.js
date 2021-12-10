// 
// This game is completely run through the alerts
// 

//This class is used to create a player and assign them a name, points, and their deck of cards
//It also has a method to play a card from a specific index
class Player{
    constructor(name){
        this.name = name;
        this.currentCards = [];
        this.points = 0;
    }
    

    playCard(index){
        return this.currentCards[index];
    }

}

//creates a card object with a number value, string suit and cardName
class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
        this.cardName = valueToCardName(value);
    }
}

//This class creates a deck of 52 cards total with 13 cards in each suit of Hearts, Diamonds, Clubs, and Spades. This class has methods to assign all the cards within the deck 
//as well as shuffle the cards alread in the deck
class Deck{
    constructor(){
        this.cards = []
    }

    //assigns 52 total cards, 13 of each suit
    assignCards(){
        let suit = ['Hearts','Diamonds','Clubs','Spades'];
        for(let i = 0; i < suit.length; i++){
            for(let j = 2; j <= 14; j++){
                this.cards.push(new Card(j,suit[i]));
            }
        }
    }

    shuffleCards(){
        //let currentIndex = cards.length-1;
        let temp = 0;
        for(let i = this.cards.length-1; i > 0; i--){
            let change = Math.floor(Math.random()*(this.cards.length));
            temp = this.cards[i];
            this.cards[i] = this.cards[change];
            this.cards[change] = temp;
        }
    }
        
}

//This function takes in a number value and returns what the card's name is
function valueToCardName(value){
    let card = '';
    if(value === 14){
        card = 'Ace';
    }
    else if(value === 11){
        card = 'Jack';
    }
    else if(value === 12){
        card = 'Queen';
    }
    else if(value === 13){
        card = 'King';
    }
    else{
        card = value.toString();
    }
    return card;
}

function dealCards(deck, player1,player2){
    for(let i = 0; i < deck.cards.length; i++){
        if(i % 2 === 0){
            player1.currentCards.push(deck.cards[i])
        }
        else{
            player2.currentCards.push(deck.cards[i]);
        }
    }

    //deal half the cards to each player
}

//This function takes in 2 values and returns 0 if they are equal, 
//returns 1 if player 1's value is higher
//returns 2 if player 2's value is higher
function compare(in1,in2){
    let ans;
    if(in1 > in2){
        ans = 1; //show that player 1 won
    }
    else if(in1 < in2){
        ans = 2;//shows that player 2 won
    }
    else{//if(in2 == in1){
        ans = 0;//shows that it was a tie
    }
    //console.log('Compare cards: ' + ans);
    return ans;

}

function rules(){
    let description = 
    `Game Rules for War:
    Each round a player with play a card from the top of their own deck.
    The player with higher value card gets a point after each round.
    Neither player gets a point if a round ends in a tie.
    Aces are high.

    Good Luck!
    `;
    return description;
}

//This function plays through each round of the game, compares the 2 cards played, and awards the points to the correct player if any for each round
//It shows each round what cards are played and which player won the round
function playGame(player1,player2){
    for(let i = 0; i < player1.currentCards.length; i++){ 
        let p1Card = player1.playCard(i);
        let p2Card = player2.playCard(i);
        
        let ans = compare(p1Card.value,p2Card.value);
        let desc = '';
    
        if(ans === 1){//player 1 card is higher value
            desc = player1.name + ' wins this round';
            player1.points ++;
        }
        else if(ans === 2){//player 2 card is higher value
            desc = player2.name + ' wins this round!';
            player2.points ++;
        }
        else if(ans === 0){
            desc = 'This round ends in a tie';
        }
        else{
            console.log(ans);
        }

        alert(`Round ${(i+1)} of ${player1.currentCards.length}:
        ${player1.name}: ${p1Card.cardName} of ${p1Card.suit}
        ${player2.name}: ${p2Card.cardName} of ${p2Card.suit}
        
        ${desc}`);
    }
}

//This function decides the winner at the end of the game
function decideWinner(player1,player2){
    let winner = compare(player1.points,player2.points);
    let winDesc = '';
    if(winner === 0){
        winDesc = 'The game ends in a tie! What luck!';
    }
    else if (winner === 1){
        winDesc = player1.name + ' wins this game!';
    }
    else{
        winDesc = player2.name + ' wins this game!';
    }
    return(`
    GAME OVER!
    FINAL SCORE:
    ${player1.name}'s points: ${player1.points}
    ${player2.name}'s points: ${player2.points}

    ${winDesc}
    `)
}


//code for the game
const player1 = new Player('Player 1');
const player2 = new Player('Player 2');
let deck = new Deck();

deck.assignCards(); //this assigns the original values of the cards and puts them in a deck
deck.shuffleCards();//this shuffles all the cards within the deck

dealCards(deck,player1,player2);//deals the cards between the 2 players before starting the game

alert(rules());
playGame(player1,player2);
alert(decideWinner(player1,player2));


