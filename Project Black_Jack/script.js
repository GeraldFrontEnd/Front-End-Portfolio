/*
 - create an global array of decks of cards (King) 
 - create a shuffle function to shuffle all the decks in the cards
 - create a dealDeck function where it pops off 3 cards 
 - create a two player instance
Blackjack is a popular card game played in casinos around the world. The objective of the game is to have a hand with a total value closer to 21 than the dealer's hand, without exceeding 21. Here are the basic rules of playing blackjack:

Card Values:

Number cards (2-10) are worth their face value.
Face cards (King, Queen, Jack) are worth 10.
Ace can be worth 1 or 11, depending on the player's choice.
The Game:

The game starts with each player and the dealer receiving two cards. Both player cards are dealt face up, while one dealer card is face up and the other face down.
The player plays their hand first before the dealer.
The player can either "hit" (receive an additional card) or "stand" (not receive any more cards).
The player can continue to hit until they decide to stand or until their hand exceeds 21, resulting in a "bust" and an automatic loss.
Once the player stands, it's the dealer's turn to play their hand.
Dealer's Turn:

The dealer reveals their face-down card.
The dealer must follow a specific rule known as "dealer's rules." Typically, the dealer must hit on a hand value of 16 or less and stand on a hand value of 17 or more.
If the dealer's hand exceeds 21, they bust, and all remaining players win.
Winning and Losing:

If the player's hand value exceeds 21, they bust and lose the bet.
If the player's hand value is closer to 21 than the dealer's hand without exceeding 21, the player wins and is paid out at a 1:1 ratio.
If the player's hand value is equal to the dealer's hand value, it results in a "push," and the player's bet is returned.
If the player's hand value is lower than the dealer's hand value, the player loses the bet.
Blackjack:

If a player is dealt an Ace and a 10-value card (10, Jack, Queen, or King) as their initial two cards, it's called a "blackjack" or a "natural." This hand automatically wins, usually paying out at a higher ratio, such as 3:2.
*/


// deck of cards(Create Deck)

// Define the deck of cards
var deck = makeDeck();
// Shuffle the deck
var shuffledDeck = shuffleCards(deck);
// Main game function
var main = function () {
  // Draw 2 cards from the top of the deck
  var computerCard = shuffledDeck.pop();
  var playerCard = shuffledDeck.pop();
  // Construct an output string to communicate which cards were drawn
  var myOutputValue =
    "Computer had " +
    computerCard.name +
    " of " +
    computerCard.suit +
    ". Player had " +
    playerCard.name +
    " of " +
    playerCard.suit +
    ". ";
  // Compare computer and player cards by rank attribute
  if (computerCard.rank > playerCard.rank) {
    myOutputValue = myOutputValue + "Computer wins.";
  } else if (computerCard.rank < playerCard.rank) {
    myOutputValue = myOutputValue + "Player wins!";
  } else {
    myOutputValue = myOutputValue + "It's a tie.";
  }
  // Return the fully-constructed output string
  return myOutputValue;
};
​
// Function to create a deck of cards
var makeDeck = function () {
  var cardDeck = [];
  var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  var ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (var rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
      var card = {
        rank: rankIndex + 1,
        suit: suits[suitIndex],
        name: ranks[rankIndex],
      };
      cardDeck.push(card);
    }
  }​
  return cardDeck;
}

// Function to shuffle the deck
var shuffleCards = function() {
  var shuffledDeck = deck.slice(); // Copy the original deck
  for (var i = shuffledDeck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledDeck[i];
    shuffledDeck[i] = shuffledDeck[j];
    shuffledDeck[j] = temp;
  }
  return shuffledDeck;
}
